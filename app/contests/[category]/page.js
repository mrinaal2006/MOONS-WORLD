import Link from "next/link";
import { notFound } from "next/navigation";
import { contestCategories, contests, categoryBySlug } from "@/data/contests";
import Breadcrumbs from "@/components/contests/Breadcrumbs";
import CategoryExplorer from "@/components/contests/CategoryExplorer";

export const dynamicParams = false;

export function generateStaticParams() {
  return contestCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = categoryBySlug(category);
  return cat ? { title: cat.title, description: cat.intro } : {};
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const cat = categoryBySlug(category);
  if (!cat) notFound();

  const items = contests.filter((c) => c.category === cat.key);
  const count = (statuses) => items.filter((c) => statuses.includes(c.status)).length;
  const others = contestCategories.filter((c) => c.key !== cat.key);

  return (
    <>
      <section className={`page-hero cat-hero ${cat.key}`}>
        <div className="container">
          <div className="cat-hero-top">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contests", href: "/contests" }, { label: cat.title }]} />
            <Link href="/contests#categories" className="back-btn">← Back to Categories</Link>
          </div>

          <div className="cat-hero-grid">
            <div>
              <span className="pill">{cat.icon} Contest category</span>
              <h1>{cat.title}</h1>
              <p className="lead">{cat.intro}</p>
              <div className="chips">
                {cat.groups.map((g) => <span key={g.value} className="chip">{g.label}</span>)}
              </div>
            </div>
            <div className="cat-hero-art" aria-hidden="true"><span>{cat.icon}</span></div>
          </div>

          <div className="cat-stats">
            <div><strong>{items.length}</strong><span>Total listed</span></div>
            <div><strong>{count(["open"])}</strong><span>Registration open</span></div>
            <div><strong>{count(["upcoming"])}</strong><span>Coming soon</span></div>
            <div><strong>{count(["ongoing"])}</strong><span>Ongoing</span></div>
          </div>
        </div>
      </section>

      <section className="section cat-body">
        <div className="container">
          <CategoryExplorer category={cat} items={items} />

          <div className="cat-steps">
            <h2>How to participate</h2>
            <ol>
              {cat.steps.map((s, i) => (
                <li key={s}><span>{i + 1}</span>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">More contests</span>
            <h2>Explore other <span className="hl">categories</span></h2>
          </div>
          <div className="other-cats">
            {others.map((o) => (
              <Link key={o.key} href={`/contests/${o.slug}`} className="other-cat">
                <span className="oc-icon">{o.icon}</span>
                <div>
                  <strong>{o.title}</strong>
                  <span className="muted">{o.text}</span>
                </div>
                <span className="arrow">→</span>
              </Link>
            ))}
          </div>
          <div className="center" style={{ marginTop: 28 }}>
            <Link href="/contests#categories" className="btn btn-ghost">← Back to Categories</Link>
          </div>
        </div>
      </section>
    </>
  );
}
