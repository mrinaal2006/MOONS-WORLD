import Link from "next/link";

export default function EmptyState({ title = "No upcoming contests available. Stay tuned!", text, icon = "🗓️", cta = true, compact = false }) {
  return (
    <div className={`empty-state ${compact ? "compact" : ""}`} role="status">
      <span className="empty-icon" aria-hidden="true">{icon}</span>
      <div>
        <h3>{title}</h3>
        {text && <p className="muted">{text}</p>}
      </div>
      {cta && !compact && <Link href="/#contact" className="btn btn-primary">Get notified</Link>}
    </div>
  );
}
