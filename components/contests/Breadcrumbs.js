import Link from "next/link";

// items: [{ label, href? }] — the last item is the current page
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <ol>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.label}>
              {last || !it.href ? (
                <span aria-current={last ? "page" : undefined}>{it.label}</span>
              ) : (
                <Link href={it.href}>{it.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
