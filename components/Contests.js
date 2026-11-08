import Link from "next/link";
import Photo from "@/components/Photo";
import { contestCategories, contests, contestsNote, contestOrganizers } from "@/data/site";

const catOf = (key) => contestCategories.find((c) => c.key === key) || contestCategories[0];
const statusLabel = { open: "Registration Open", upcoming: "Coming Soon", closed: "Closed" };

const initials = (n) => n.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

function Avatar({ o, size }) {
  return o.photo ? (
    <span className="org-avatar" style={{ width: size, height: size }}>
      <Photo src={o.photo} alt={o.name} fill sizes={`${size}px`} />
    </span>
  ) : (
    <span className="org-avatar" style={{ width: size, height: size }} aria-hidden="true">{initials(o.name)}</span>
  );
}

// Full section (Contests page)
export function OrganizersSection() {
  if (!contestOrganizers.length) return null;
  return (
    <section id="organizers" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contest Organizers</span>
          <h2>Meet the <span className="hl">organizing team</span></h2>
          <p className="muted">The people who plan and run our scholarship tests, hackathons and coding competitions.</p>
        </div>
        <div className="org-grid">
          {contestOrganizers.map((o) => (
            <article key={o.name} className="org-card">
              <div className="org-ring"><Avatar o={o} size={104} /></div>
              <h3>{o.name}</h3>
              <span className="tag">🏆 {o.role}</span>
              {o.bio && <p className="muted">{o.bio}</p>}
              {o.phone && <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="explore">📞 {o.phone}</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Compact "Organised by" strip (home page Contests section)
function OrganizersStrip() {
  if (!contestOrganizers.length) return null;
  return (
    <Link href="/contests#organizers" className="org-strip">
      <span className="org-label">Contests organised by</span>
      <span className="org-people">
        {contestOrganizers.map((o) => (
          <span key={o.name} className="org-person"><Avatar o={o} size={40} /> {o.name}</span>
        ))}
      </span>
      <span className="arrow">→</span>
    </Link>
  );
}

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
    <Link href={`/contests#${c.key}`} className={`cat-card ${c.key}`}>
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
  const open = c.status === "open" && c.formLink;
  return (
    <article className="card contest">
      <div className="contest-banner">
        {c.banner ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={c.banner} alt={`${c.title} banner`} loading="lazy" />
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
          {c.date && <li>📅 {c.date}</li>}
          {c.eligibility && <li>🎯 {c.eligibility}</li>}
        </ul>
        {open ? (
          <a href={c.formLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Register Now ↗</a>
        ) : (
          <span className="btn btn-disabled">{c.status === "closed" ? "Registration Closed" : "Registration Opens Soon"}</span>
        )}
      </div>
    </article>
  );
}

const active = () => contests.filter((c) => c.status !== "closed");

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
        <OrganizersStrip />
        {list.length > 0 && (
          <div className="center" style={{ marginTop: 32 }}>
            <Link href="/contests" className="btn btn-ghost">View all contests</Link>
          </div>
        )}
      </div>
    </section>
  );
}
