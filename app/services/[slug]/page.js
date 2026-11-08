import Link from "next/link";
import { notFound } from "next/navigation";
import { services, universities } from "@/data/site";
import EnquiryForm from "@/components/EnquiryForm";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/#services" className="back">← All services</Link>
          <span className="pill">{s.icon} {s.tag}</span>
          <h1>{s.title}</h1>
          <p className="lead">{s.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={s.features.length === 3 ? "grid-3" : "grid-4"}>
            {s.features.map((f, i) => (
              <div key={f.title} className="card feature">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {s.plans && (
        <section className="section alt">
          <div className="container">
            <div className="section-head"><span className="eyebrow">Choose your plan</span><h2>Residential or <span className="hl">Non-Residential</span></h2></div>
            <div className="grid-2 plans">
              {s.plans.map((p) => (
                <div key={p.name} className={`card plan ${p.highlight ? "featured" : ""}`}>
                  {p.highlight && <span className="badge">Most popular</span>}
                  <h3>{p.name}</h3>
                  <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  <Link href="#enquire" className={`btn ${p.highlight ? "btn-primary" : "btn-ghost"}`}>Enquire</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {s.showUniversities && (
        <section className="section alt">
          <div className="container">
            <div className="section-head"><span className="eyebrow">Partner institutions</span><h2>Universities in <span className="hl">Bankura &amp; Durgapur</span></h2></div>
            <div className="grid-3">
              {universities.map((u, i) => (
                <div key={u.name} className="card uni">
                  <span className="num">{i + 1}</span>
                  <div><h3>{u.name}</h3><p className="muted">{u.city} • {u.courses}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="enquire" className="section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2>Interested in <span className="hl">{s.title}</span>?</h2>
            <p className="muted">Send us your details and our team will contact you.</p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
