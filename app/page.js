import Image from "next/image";
import Link from "next/link";
import { services, stats, whyUs, site } from "@/data/site";
import ServiceCard from "@/components/ServiceCard";
import EnquiryForm from "@/components/EnquiryForm";
import ContestsSection from "@/components/Contests";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="pill">🌙 Bankura • Durgapur</span>
            <h1>
              Your journey from <span className="hl">Class XI</span> to{" "}
              <span className="hl">Ph.D</span> starts here
            </h1>
            <p className="lead">{site.description}</p>
            <div className="hero-cta">
              <Link href="/#contact" className="btn btn-primary">Get Started</Link>
              <Link href="/#services" className="btn btn-ghost">Explore Services</Link>
            </div>
          </div>
          <div className="hero-art">
            <div className="glow" />
            <Image src="/emblem.png" alt={`${site.name} logo`} width={420} height={342} priority />
            <p className="tagline">{site.tagline}</p>
          </div>
        </div>
        <div className="container stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we offer</span>
            <h2>Everything a student needs, <span className="hl">under one roof</span></h2>
          </div>
          <div className="grid-3">
            {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
          </div>
        </div>
      </section>

      <ContestsSection />

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Moon&apos;s World</span>
            <h2>Built on <span className="hl">discipline &amp; care</span></h2>
          </div>
          <div className="grid-4">
            {whyUs.map((w) => (
              <div key={w.title} className="card why">
                <div className="icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p className="muted">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container banner">
          <div>
            <h2>Supervised by a retired Head Master of <span className="hl-gold">Ramkrishna Mission</span></h2>
            <p>Values, discipline and academic excellence for every residential and non-residential student.</p>
          </div>
          <Link href="/services/coaching" className="btn btn-gold">View Coaching Plans</Link>
        </div>
      </section>

      <section id="contact" className="section alt">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Contact us</span>
            <h2>Talk to our <span className="hl">counsellors</span></h2>
            <p className="muted">Leave your details and we&apos;ll call you back with fees, seat availability and admission details.</p>
            <ul className="contact-list">
              <li>📞 <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>
              <li>✉️ <a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>📍 {site.address}</li>
            </ul>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
