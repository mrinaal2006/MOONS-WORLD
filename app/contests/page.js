import { contestCategories, contests } from "@/data/site";
import { ComingSoon, ContestCard, CategoryCard, OrganizersSection } from "@/components/Contests";

export const metadata = {
  title: "Contests",
  description: "Scholarship tests for school students, hackathons and coding competitions by Moon's World.",
};

export default function ContestsPage() {
  const anyActive = contests.some((c) => c.status !== "closed");
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="pill">🏆 Scholarship • Hackathon • Coding</span>
          <h1>Contests &amp; <span className="hl">Scholarship Tests</span></h1>
          <p className="lead">
            Take part in school-level scholarship tests, hackathons and coding competitions organised by Moon&apos;s World.
            Register through the link on each contest.
          </p>
          <div className="grid-3" style={{ marginTop: 32 }}>
            {contestCategories.map((c) => <CategoryCard key={c.key} c={c} />)}
          </div>
        </div>
      </section>

      {!anyActive && (
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container"><ComingSoon /></div>
        </section>
      )}

      {contestCategories.map((cat, i) => {
        const list = contests.filter((c) => c.category === cat.key);
        return (
          <section key={cat.key} id={cat.key} className={`section ${i % 2 ? "alt" : ""}`}>
            <div className="container">
              <div className="cat-head">
                <div className="icon">{cat.icon}</div>
                <div>
                  <h2>{cat.title}</h2>
                  <p className="muted">{cat.text}</p>
                </div>
              </div>
              {list.length ? (
                <div className="grid-3">{list.map((c) => <ContestCard key={c.title} c={c} />)}</div>
              ) : (
                <ComingSoon compact text={`No ${cat.title.toLowerCase()} announced yet. New contests will be posted here soon.`} />
              )}
            </div>
          </section>
        );
      })}

      <OrganizersSection />
    </>
  );
}
