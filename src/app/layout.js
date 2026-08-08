import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingChatButton } from "@/components/layout/FloatingChatButton";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.turkeyinternationalacademy.com";
const siteName = "Turkey International Academy (TIAMA)";
const siteDescription =
  "Turkey International Academy of The Medical Science & Aesthetics (TIAMA) — globally recognized certification, accreditation, and training for medical and aesthetic professionals.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Turkey International Academy | TIAMA Certification",
    template: "%s | Turkey International Academy",
  },
  description: siteDescription,
  keywords: [
    "TIAMA",
    "Turkey International Academy",
    "medical aesthetics certification",
    "CPD accreditation",
    "cosmetology training",
    "fellowship programs",
    "medical science education",
  ],
  authors: [{ name: "Turkey International Academy" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Turkey International Academy | TIAMA Certification",
    description: siteDescription,
    locale: "en_US",
    images: [{ url: "/images/logo.png", width: 589, height: 617, alt: siteName }],
  },
  twitter: {
    card: "summary",
    title: "Turkey International Academy | TIAMA Certification",
    description: siteDescription,
    images: ["/images/logo.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteName,
  alternateName: "TIAMA",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress: "16-C, Percy Street, 1st floor",
    addressLocality: "Istanbul",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-65-588-7051",
    email: "info@turkeyinternationalacademy.com",
    contactType: "customer service",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <FloatingChatButton />
      </body>
    </html>
  );
}
