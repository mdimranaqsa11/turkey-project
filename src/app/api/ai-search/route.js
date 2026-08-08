const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.6-flash";
const MAX_QUERY_LENGTH = 500;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 10;

const SYSTEM_INSTRUCTION =
  "You are the AI search assistant on the website of Turkish International " +
  "Academy of The Medical Science & Aesthetics (TIAMA), which offers " +
  "certification, fellowship, and accreditation programs in medical " +
  "science, aesthetics, and cosmetology. Answer the visitor's question " +
  "clearly and concisely (2-4 short paragraphs or a short list). If the " +
  "question is medical in nature, include a brief reminder that this is " +
  "general educational information, not medical advice, and that a " +
  "qualified healthcare professional should be consulted for personal " +
  "medical questions. If you don't know the answer, say so honestly " +
  "instead of guessing. Do not invent specific TIAMA prices, dates, or " +
  "staff names — if asked about those, suggest the visitor check the " +
  "relevant page or contact TIAMA directly. Respond in plain text only — " +
  "no markdown, no asterisks for bold or bullets, no headers. For lists, " +
  "use a dash and a space at the start of each line instead.";

// Best-effort in-memory rate limit. Resets on server restart / per instance —
// not a substitute for a real rate
//  limiter (e.g. Upstash) in production.
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        error:
          "AI search isn't configured yet. Set GEMINI_API_KEY in your environment.",
      },
      { status: 500 },
    );
  }

  const ip = request.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429 },
    );
  }

  let query;
  try {
    ({ query } = await request.json());
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof query !== "string" || !query.trim()) {
    return Response.json(
      { error: "Please enter a question." },
      { status: 400 },
    );
  }
  if (query.length > MAX_QUERY_LENGTH) {
    return Response.json(
      { error: `Question is too long (max ${MAX_QUERY_LENGTH} characters).` },
      { status: 400 },
    );
  }

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: query.trim() }],
            },
          ],
          generationConfig: {
            maxOutputTokens: 1024,
            temperature: 0.4,
            thinkingConfig: {
              thinkingLevel: "minimal",
            },
          },
        }),
      },
    );

    if (!geminiRes.ok) {
      const detail = await geminiRes.text().catch(() => "");
      console.error("Gemini API error:", geminiRes.status, detail);
      return Response.json(
        { error: "The AI search service is temporarily unavailable." },
        { status: 502 },
      );
    }

    const data = await geminiRes.json();
    const answer = data?.candidates?.[0]?.content?.parts
      ?.map((p) => p.text)
      .join("")
      .trim();

    if (!answer) {
      return Response.json(
        { error: "No answer was generated. Try rephrasing your question." },
        { status: 502 },
      );
    }

    return Response.json({ answer });
  } catch (err) {
    console.error("AI search request failed:", err);
    return Response.json(
      { error: "Something went wrong reaching the AI search service." },
      { status: 500 },
    );
  }
}
