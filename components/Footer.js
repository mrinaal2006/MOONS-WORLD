import Link from "next/link";
import Image from "next/image";
import { site, services } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand">
            <Image src="/emblem.png" alt="" width={46} height={38} />
            <span>MOON&apos;S <b>WORLD</b></span>
          </Link>
          <p className="muted">{site.tagline}</p>
          <p className="muted small">{site.description}</p>
        </div>
        <div>
          <h4>Services</h4>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span className="muted">{site.address}</span>
        </div>
      </div>
      <div className="container copy">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  );
}
