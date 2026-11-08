import Image from "next/image";
import Link from "next/link";
import { services, stats, whyUs, site } from "@/data/site";
import ServiceCard from "@/components/ServiceCard";
import EnquiryForm from "@/components/EnquiryForm";
import ContestsSection from "@/components/Contests";

export default function Home() {
  const online = services.find((s) => s.slug === "online-courses");
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
          <div className="grid-4 services-grid">
            {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container online">
          <div>
            <span className="pill">🌐 New • Learn from anywhere</span>
            <h2>Admission to <span className="hl">online courses</span> from IITs &amp; renowned universities</h2>
            <p className="muted">
              Degree, PG, diploma and certificate programmes you can study from home. We guide you from choosing a
              programme to completing your admission.
            </p>
            <div className="hero-cta" style={{ marginTop: 24 }}>
              <Link href="/#contact" className="btn btn-primary">Enquire Now</Link>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Moon's World, I want to enquire about online courses from IITs / universities.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                💬 WhatsApp Enquiry
              </a>
            </div>
          </div>
          <ul className="online-list">
            {online.features.map((f) => (
              <li key={f.title} className="card">
                <strong>{f.title}</strong>
                <span className="muted">{f.text}</span>
              </li>
            ))}
          </ul>
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
