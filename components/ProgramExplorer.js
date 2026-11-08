"use client";
import { useMemo, useState } from "react";
import { onlineInstitutes } from "@/data/onlinePrograms";

const inr = (n) => "₹" + n.toLocaleString("en-IN");
const LEVELS = ["All", "UG", "PG"];

export default function ProgramExplorer() {
  const [level, setLevel] = useState("All");
  const [cat, setCat] = useState("All");
  const [openUni, setOpenUni] = useState(() => new Set());
  const toggle = (name) =>
    setOpenUni((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });

  const cats = useMemo(() => {
    const set = new Set();
    onlineInstitutes.forEach((u) => u.courses.forEach((c) => (level === "All" || c.level === level) && set.add(c.cat)));
    return ["All", ...["BA", "B.Com", "B.Sc", "BBA", "BCA", "MBA", "MCA", "Other"].filter((c) => set.has(c))];
  }, [level]);

  const list = onlineInstitutes
    .map((u) => ({
      ...u,
      shown: u.courses.filter((c) => (level === "All" || c.level === level) && (cat === "All" || c.cat === cat)),
    }))
    .filter((u) => u.shown.length || (u.onRequest && cat === "All"));

  const total = list.reduce((n, u) => n + u.shown.length, 0);
  const uniCount = list.length;

  return (
    <div className="explorer">
      <div className="filters">
        <div className="seg" role="tablist" aria-label="Programme level">
          {LEVELS.map((l) => (
            <button key={l} role="tab" aria-selected={level === l} className={level === l ? "on" : ""}
              onClick={() => { setLevel(l); setCat("All"); }}>
              {l === "UG" ? "UG (Bachelor's)" : l === "PG" ? "PG (Master's)" : "All programmes"}
            </button>
          ))}
        </div>
        <div className="chips">
          {cats.map((c) => (
            <button key={c} className={`chip chip-btn ${cat === c ? "on" : ""}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <p className="muted small">{total} programmes with fees across {uniCount} universities</p>
      </div>

      <div className="uni-grid">
        {list.map((u) => (
          <article key={u.name} className="uni-card">
            <header className="uni-head">
              <span className="inst-logo">{u.short}</span>
              <div>
                <h4>{u.name}</h4>
                <div className="uni-meta">
                  {u.type && <span className={`utype ${u.type === "Government" ? "gov" : "pvt"}`}>{u.type === "Government" ? "Govt. University" : "Private University"}</span>}
                  {u.naac && <span className="naac">NAAC {u.naac}</span>}
                  {u.est && <span>Est. {u.est}</span>}
                  {u.note && <span>{u.note}</span>}
                  <span>Online</span>
                </div>
              </div>
            </header>
            {(() => {
              const ug = u.shown.filter((c) => c.level === "UG").length;
              const pg = u.shown.length - ug;
              const isOpen = openUni.has(u.name);
              const id = "courses-" + u.short;
              if (u.onRequest && !u.shown.length) {
                return (
                  <>
                    <p className="course-note">📘 Courses &amp; fees available on request</p>
                    <a href="#enquire" className="explore">Enquire for details <span className="arrow">→</span></a>
                  </>
                );
              }
              return (
                <>
                  <p className="course-note">
                    📘 <strong>{u.shown.length} {u.shown.length === 1 ? "course" : "courses"}</strong> available
                    <span className="muted"> ({[ug && `${ug} UG`, pg && `${pg} PG`].filter(Boolean).join(" · ")})</span>
                  </p>
                  <button type="button" className={`explore explore-btn ${isOpen ? "open" : ""}`} aria-expanded={isOpen} aria-controls={id} onClick={() => toggle(u.name)}>
                    {isOpen ? "Hide courses" : "Explore courses"} <span className="arrow">{isOpen ? "↑" : "↓"}</span>
                  </button>
                  <div id={id} className={`course-panel ${isOpen ? "open" : ""}`} hidden={!isOpen}>
                    <ul className="course-list">
                      {u.shown.map((c) => (
                        <li key={c.level + c.name}>
                          <div>
                            <span className={`lvl ${c.level.toLowerCase()}`}>{c.level}</span>
                            <strong>{c.name}</strong>
                            <small>{c.duration}</small>
                          </div>
                          <span className="fee">{inr(c.fee)}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#enquire" className="btn btn-primary enquire-uni">Enquire for admission</a>
                  </div>
                </>
              );
            })()}
          </article>
        ))}
      </div>
    </div>
  );
}
