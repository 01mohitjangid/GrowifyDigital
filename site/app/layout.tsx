import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { JsonLd } from "@/components/ui";
import { SITE_URL, contact, isLive, orgRef } from "@/content/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400", style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Growify Digital: Growth Systems for Luxury Brands", template: "%s | Growify Digital" },
  description:
    "Growify builds and runs growth systems for luxury, couture and jewellery brands: Shopify stores, performance marketing, sales support and AI products like Lookify.",
  openGraph: { siteName: "Growify Digital", type: "website", locale: "en_IN" },
  robots: isLive ? undefined : { index: false, follow: false },
};

const organization = {
  "@context": "https://schema.org",
  ...orgRef,
  email: contact.email,
  telephone: contact.phone,
  foundingDate: "2019",
  founder: [
    { "@type": "Person", name: "Rishab Mehra" },
    { "@type": "Person", name: "Disha Bhatnagar" },
  ],
  address: { "@type": "PostalAddress", streetAddress: contact.address.replace(", New Delhi", ""), addressLocality: "New Delhi", addressCountry: "IN" },
  sameAs: ["https://www.linkedin.com/company/growify-studio/", "https://instagram.com/growifydigital"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${serif.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <JsonLd data={organization} />
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
