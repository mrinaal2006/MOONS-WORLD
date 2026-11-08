import { statusLabel } from "@/data/contests";

function FieldValue({ f, value }) {
  if (f.type === "list") {
    const items = Array.isArray(value) ? value : [value];
    return <ul className="cd-list">{items.map((v) => <li key={v}>{v}</li>)}</ul>;
  }
  if (f.type === "prizes") {
    return (
      <div className="cd-prizes">
        {value.map((p, i) => (
          <div key={p.place} className={`cd-prize p${i + 1}`}>
            <strong>{["🥇", "🥈", "🥉"][i] || "🏅"} {p.place}</strong>
            <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
          </div>
        ))}
      </div>
    );
  }
  if (f.type === "note") return <p className="cd-note">{value}</p>;
  if (f.type === "dates") {
    return (
      <ul className="cd-dates">
        {value.map((d) => <li key={d.label}><span>{d.label}</span><strong>{d.date}</strong></li>)}
      </ul>
    );
  }
  return <p>{value}</p>;
}

// Generic contest card: shows only the fields configured for its category,
// and only those that actually have a value.
export default function ContestDetailCard({ contest: c, category, groupLabel }) {
  const fields = category.fields.filter((f) => {
    const v = c[f.key];
    return v !== undefined && v !== null && v !== "" && !(Array.isArray(v) && !v.length);
  });
  const canRegister = Boolean(c.formLink) && (c.status === "open" || c.status === "ongoing");

  return (
    <article className={`contest-detail ${c.featured ? "featured" : ""}`}>
      {c.banner && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="cd-banner" src={c.banner} alt={`${c.title} banner`} loading="lazy" />
      )}
      <header className="cd-head">
        <div className="cd-badges">
          <span className={`status ${c.status}`}>{statusLabel[c.status] || c.status}</span>
          {groupLabel && <span className="cd-group">{groupLabel}</span>}
        </div>
        <h3>{c.title}</h3>
        {c.subtitle && <p className="cd-sub">{c.subtitle}</p>}
        {c.description && <p className="cd-desc">{c.description}</p>}
      </header>

      <dl className="cd-fields">
        {fields.map((f) => (
          <div key={f.key} className={`cd-field ${f.type}`}>
            {f.label && <dt><span aria-hidden="true">{f.icon}</span> {f.label}</dt>}
            <dd><FieldValue f={f} value={c[f.key]} /></dd>
          </div>
        ))}
      </dl>

      <footer className="cd-foot">
        {canRegister ? (
          <a href={c.formLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Register now (Google Form) ↗</a>
        ) : (
          <span className="btn btn-disabled">
            {c.status === "closed" || c.status === "past" ? "Registration closed" : "Registration opens soon"}
          </span>
        )}
      </footer>
    </article>
  );
}
