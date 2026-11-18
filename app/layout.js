import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import DoubtWidget from "@/components/DoubtWidget";
import RouteTracker from "@/components/RouteTracker";
import PromoModal from "@/components/PromoModal";
import { site } from "@/data/site";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });

// The site's public address (used for share previews, sitemap and Google's logo data).
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.moonsworld.org").replace(/\/$/, "");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  // Favicons come from app/favicon.ico, app/icon.png and app/apple-icon.png (Next.js adds the tags).
  applicationName: site.name,
  openGraph: { type: "website", url: "/", siteName: site.name, title: site.name, description: site.description, images: ["/logo.png"] },
};

export const viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          // Tells Google the site name and official logo (shown in search results).
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                name: site.name,
                url: siteUrl,
                logo: `${siteUrl}/icon.png`,
                telephone: site.phone,
                address: { "@type": "PostalAddress", streetAddress: site.address, addressRegion: "West Bengal", addressCountry: "IN" },
              },
              { "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: siteUrl },
            ]),
          }}
        />
        <div className="bg-blobs" aria-hidden="true"><span /><span /><span /></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
        <DoubtWidget />
        <RouteTracker />
        <PromoModal />
      </body>
    </html>
  );
}
