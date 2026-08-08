const siteUrl = "https://www.turkeyinternationalacademy.com";

const routes = [
  "",
  "/courses",
  "/about",
  "/accreditation-cpd",
  "/blog",
  "/contact",
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
