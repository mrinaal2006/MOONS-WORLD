import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import DoubtWidget from "@/components/DoubtWidget";
import { site } from "@/data/site";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: { title: site.name, description: site.description, images: ["/logo.png"] },
};

export const viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="bg-blobs" aria-hidden="true"><span /><span /><span /></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
        <DoubtWidget />
      </body>
    </html>
  );
}
