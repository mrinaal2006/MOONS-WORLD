import Image from "next/image";
import Link from "next/link";
import { services, stats, whyUs, site, onlineInstitutes, team, hostels, about, admissionOffer, gallery } from "@/data/site";
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
            <span className="pill">🌙 Bankura, West Bengal</span>
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
          <div className="hero-photos">
            <div className="glow" />
            <div className="photo-main glass-frame">
              <Image src="/gallery/self-study.jpg" alt="Moon's World students studying" width={1400} height={882} priority sizes="(max-width: 960px) 100vw, 520px" />
            </div>
            <div className="photo-float glass-frame">
              <Image src="/gallery/class-teaching.jpg" alt="Classroom teaching at Moon's World" width={610} height={745} sizes="180px" />
            </div>
            <Link href="/#admission" className="offer-badge">
              <span>Class XI admission</span>
              <strong>{admissionOffer.fee}<small>/month</small></strong>
            </Link>
            <div className="hero-chip">⭐ {site.tagline}</div>
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

      <section id="admission" className="section offer-section">
        <div className="container offer-grid">
          <a href={admissionOffer.flyer} target="_blank" rel="noopener noreferrer" className="flyer glass-frame" title="Open full flyer">
            <Image src={admissionOffer.flyer} alt="Moon's World Class XI special admission flyer" width={900} height={1350} sizes="(max-width: 960px) 90vw, 420px" />
            <span className="flyer-zoom">🔍 View full flyer</span>
          </a>
          <div>
            <span className="pill">{admissionOffer.kicker}</span>
            <h2 className="offer-title" lang="bn">{admissionOffer.title}</h2>
            <p className="offer-sub">{admissionOffer.subtitle}</p>
            <p className="offer-slogan" lang="bn">{admissionOffer.slogan}</p>

            <div className="price-card">
              <div>
                <span className="price-label">Special fee only</span>
                <strong className="price">{admissionOffer.fee}</strong>
                <span className="price-note">{admissionOffer.feeNote}</span>
              </div>
              <div className="price-loc">📍 {admissionOffer.location}</div>
            </div>

            <div className="facility-grid">
              {admissionOffer.facilities.map((f) => (
                <div key={f.title} className="facility">
                  <span className="facility-icon">{f.icon}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <span lang="bn">{f.bn}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="why-box">
              <h3>Why MoonsWorld?</h3>
              <ul>{admissionOffer.why.map((w) => <li key={w}>{w}</li>)}</ul>
            </div>

            <div className="hero-cta">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-primary">📞 আজই ভর্তি হোন: {site.phone}</a>
              <Link href="/#contact" className="btn btn-ghost">Request a call back</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we offer</span>
            <h2>Everything a student needs, <span className="hl">under one roof</span></h2>
          </div>
          <div className="grid-3 services-grid">
            {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
          </div>
        </div>
      </section>

      <section id="about" className="section alt">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="eyebrow">About Moon&apos;s World</span>
              <h2 className="about-title">Building strong foundations in <span className="hl">Bankura</span></h2>
              {about.paragraphs.map((p) => <p key={p} className="about-text">{p}</p>)}
            </div>
            <div className="vm">
              <div className="vm-photo glass-frame">
                <Image src="/gallery/class-room.jpg" alt="Students attending class at Moon's World" width={610} height={1070} sizes="(max-width: 960px) 100vw, 480px" />
                <span className="vm-photo-tag">📍 Our classroom, Bankura</span>
              </div>
              <div className="vm-card vision">
                <span className="vm-icon">🔭</span>
                <div>
                  <h3>Our Vision</h3>
                  <p>{about.vision}</p>
                </div>
              </div>
              <div className="vm-card mission">
                <span className="vm-icon">🎯</span>
                <div>
                  <h3>Our Mission</h3>
                  <p>{about.mission}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-head focus-head">
            <span className="eyebrow">Educational Focus</span>
            <h2>What we <span className="hl">prepare you for</span></h2>
          </div>
          <div className="grid-4 focus-grid">
            {about.focus.map((f) => (
              <div key={f.title} className="card focus">
                <div className="icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="online" className="section">
        <div className="container online">
          <div>
            <span className="pill">🌐 New • Learn from anywhere</span>
            <h2>Admission to <span className="hl">online courses</span> from IIIT &amp; renowned universities</h2>
            <p className="muted">
              UG and PG degrees (BA, B.Com, B.Sc, BBA, BCA, MBA and MCA) you can study from home. We guide you from choosing a
              programme to completing your admission.
            </p>
            <div className="hero-cta" style={{ marginTop: 24 }}>
              <Link href="/#contact" className="btn btn-primary">Enquire Now</Link>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Moon's World, I want to enquire about online courses from universities.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                💬 WhatsApp Enquiry
              </a>
            </div>
            <p className="inst-label">Online UG & PG admission at:</p>
            <div className="chips">
              {onlineInstitutes.map((i) => (
                <span key={i.name} className={`chip ${i.naac === "A++" ? "chip-iit" : ""}`}>{i.name}{i.naac ? ` (${i.naac})` : ""}</span>
              ))}
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

      <section id="why-us" className="section alt">
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

      <section id="leadership" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Leadership</span>
            <h2>The people behind <span className="hl">Moon&apos;s World</span></h2>
          </div>
          <div className="grid-2 team">
            {team.map((m) => (
              <article key={m.name} className="team-card">
                <div className="team-photo">
                  <Image src={m.photo} alt={m.name} fill sizes="(max-width: 760px) 100vw, 260px" />
                </div>
                <div className="team-body">
                  <span className="tag">{m.role}</span>
                  <h3>{m.name}</h3>
                  {m.credential && <p className="credential">🎓 {m.credential}</p>}
                  <p className="muted">{m.bio}</p>
                  {m.quote && <blockquote lang="bn">“{m.quote}”</blockquote>}
                  {m.phone && (
                    <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="explore">
                      📞 {m.phone} <span className="arrow">→</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Gallery</span>
            <h2>Life at <span className="hl">Moon&apos;s World</span></h2>
            <p className="muted">Real classrooms, real students, every day.</p>
          </div>
          <div className="gallery">
            {gallery.map((g) => (
              <figure key={g.src} className={`g-item glass-frame ${g.size || ""}`}>
                <Image src={g.src} alt={g.caption} width={g.w} height={g.h} sizes="(max-width: 760px) 100vw, 50vw" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="hostels" className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Stay with us</span>
            <h2>Safe hostels for <span className="hl">boys &amp; girls</span></h2>
          </div>
          <div className="grid-2 hostels">
            {hostels.map((h) => (
              <div key={h.name} className="card hostel">
                <div className="hostel-top">
                  <div className="icon">🏠</div>
                  <div>
                    <span className="tag">{h.tag}</span>
                    <h3>{h.name}</h3>
                    <p className="muted small">📍 {h.location}</p>
                  </div>
                </div>
                <ul>{h.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <a href={`tel:${h.phone.split("/")[0].replace(/\s/g, "")}`} className="btn btn-ghost">📞 {h.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="supervision" className="section">
        <div className="container banner">
          <div>
            <h2>Under the direct supervision of <span className="hl-gold">Biswabaran Sir</span></h2>
            <p>Ex. Head Master, Ramkrishna Mission, Garbetha. Values, discipline and academic excellence for every residential and non-residential student.</p>
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
            <div className="centre-photo">
              <Image src="/team/centre.jpg" alt="Moon's World centre, Katjuridanga, Bankura" width={1400} height={865} sizes="(max-width: 960px) 100vw, 560px" />
            </div>
            <ul className="contact-list">
              <li>📞 <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>{site.phone2 && <> / <a href={`tel:${site.phone2.replace(/\s/g, "")}`}>{site.phone2}</a></>}{site.phone3 && <> / <a href={`tel:${site.phone3.replace(/\s/g, "")}`}>{site.phone3}</a></>}</li>
              {site.email && <li>✉️ <a href={`mailto:${site.email}`}>{site.email}</a></li>}
              <li>📍 <a href={site.mapLink} target="_blank" rel="noopener noreferrer">{site.address}</a></li>
            </ul>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
