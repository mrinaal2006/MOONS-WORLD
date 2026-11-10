import { contestCategories, contests } from "@/data/site";
import { ContestCard, CategoryCard } from "@/components/Contests";
import EmptyState from "@/components/contests/EmptyState";
import Breadcrumbs from "@/components/contests/Breadcrumbs";

export const metadata = {
  title: "Contests",
  description: "Scholarship tests for school students, hackathons and coding competitions by Moon's World.",
};

export default function ContestsPage() {
  const active = contests.filter((c) => c.status !== "closed" && c.status !== "past");
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contests" }]} />
          <span className="pill">🏆 Scholarship • Hackathon • Coding</span>
          <h1>Contests &amp; <span className="hl">Scholarship Tests</span></h1>
          <p className="lead">
            Take part in school-level scholarship tests, hackathons and coding competitions organised by Moon&apos;s World.
            Choose a category to see every contest in it.
          </p>
          <div id="categories" className="grid-3" style={{ marginTop: 32 }}>
            {contestCategories.map((c) => <CategoryCard key={c.key} c={c} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Latest</span>
            <h2>Open &amp; upcoming <span className="hl">contests</span></h2>
          </div>
          {active.length ? (
            <div className="grid-3">{active.map((c) => <ContestCard key={c.id || c.title} c={c} />)}</div>
          ) : (
            <EmptyState
              title="No upcoming contests available. Stay tuned!"
              text="Scholarship tests, hackathons and coding competitions will be announced here with official registration links."
              icon="🚀"
            />
          )}
        </div>
      </section>

    </>
  );
}
