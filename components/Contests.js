import Link from "next/link";
import Photo from "@/components/Photo";
import { contestCategories, contests, contestsNote } from "@/data/site";
import { statusLabel } from "@/data/contests";

const catOf = (key) => contestCategories.find((c) => c.key === key) || contestCategories[0];

export function ComingSoon({ text = contestsNote, compact = false }) {
  return (
    <div className={`coming-soon ${compact ? "compact" : ""}`}>
      <span className="cs-icon">🚀</span>
      <div>
        <h3>Upcoming contests are coming soon</h3>
        <p className="muted">{text}</p>
      </div>
      {!compact && <Link href="/#contact" className="btn btn-primary">Get Notified</Link>}
    </div>
  );
}

// Category card in the reference style: title, chips, "Explore Category →", tinted arc with icon
export function CategoryCard({ c }) {
  return (
    <Link href={`/contests/${c.slug}`} className={`cat-card ${c.key}`}>
      <div className="cat-content">
        <h3>{c.title}</h3>
        {c.chips?.length > 0 && (
          <div className="chips">{c.chips.map((ch) => <span key={ch} className="chip">{ch}</span>)}</div>
        )}
        <span className="explore">Explore Category <span className="arrow">→</span></span>
      </div>
      <div className="cat-arc"><span>{c.icon}</span></div>
    </Link>
  );
}

export function ContestCard({ c }) {
  const cat = catOf(c.category);
  const open = (c.status === "open" || c.status === "ongoing") && c.formLink;
  return (
    <article className="card contest">
      <div className="contest-banner">
        {(c.thumb || c.banner) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={c.thumb || c.banner} alt={`${c.title} banner`} loading="lazy" />
        ) : (
          <div className={`auto-banner ${cat.key}`}>
            <span>{cat.icon}</span>
            <strong>{c.title}</strong>
          </div>
        )}
        <span className={`status ${c.status}`}>{statusLabel[c.status] || c.status}</span>
      </div>
      <div className="contest-body">
        <span className="tag">{cat.icon} {cat.title}</span>
        <h3>{c.title}</h3>
        {c.description && <p className="muted">{c.description}</p>}
        <ul className="contest-meta">
          {(c.date || c.startDate || c.dates?.[0]?.date) && <li>📅 {c.date || c.startDate || `${c.dates[0].label}: ${c.dates[0].date}`}</li>}
          {c.group && <li>🏷️ {c.group}</li>}
          {c.eligibility && <li>🎯 {c.eligibility}</li>}
        </ul>
        {open ? (
          <a href={c.formLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Register Now ↗</a>
        ) : (
          <span className="btn btn-disabled">{c.status === "closed" || c.status === "past" ? "Registration Closed" : "Registration Opens Soon"}</span>
        )}
        <Link href={`/contests/${cat.slug}`} className="explore">View details <span className="arrow">→</span></Link>
      </div>
    </article>
  );
}

const active = () => contests.filter((c) => c.status !== "closed" && c.status !== "past");

// Compact block for the home page
export default function ContestsSection() {
  const list = active().slice(0, 3);
  return (
    <section id="contests" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contests</span>
          <h2>Compete, win &amp; earn <span className="hl">scholarships</span></h2>
          <p className="muted">Scholarship tests for school students, hackathons and coding competitions.</p>
        </div>
        <div className="grid-3">
          {contestCategories.map((c) => <CategoryCard key={c.key} c={c} />)}
        </div>
        <div className="contest-list">
          {list.length ? (
            <div className="grid-3">{list.map((c) => <ContestCard key={c.title} c={c} />)}</div>
          ) : (
            <ComingSoon />
          )}
        </div>
        {list.length > 0 && (
          <div className="center" style={{ marginTop: 32 }}>
            <Link href="/contests" className="btn btn-ghost">View all contests</Link>
          </div>
        )}
      </div>
    </section>
  );
}
