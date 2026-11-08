import Link from "next/link";

export default function ServiceCard({ s }) {
  return (
    <Link href={`/services/${s.slug}`} className="card service-card">
      <div className="icon">{s.icon}</div>
      <span className="tag">{s.tag}</span>
      <h3>{s.title}</h3>
      <p className="muted">{s.short}</p>
      <ul>
        {s.features.slice(0, 4).map((f) => <li key={f.title}>{f.title}</li>)}
      </ul>
      <span className="more">Explore →</span>
    </Link>
  );
}
