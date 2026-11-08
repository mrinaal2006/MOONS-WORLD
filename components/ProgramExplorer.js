"use client";
import { useMemo, useState } from "react";
import { onlineInstitutes } from "@/data/onlinePrograms";

const inr = (n) => "₹" + n.toLocaleString("en-IN");
const LEVELS = ["All", "UG", "PG"];

export default function ProgramExplorer() {
  const [level, setLevel] = useState("All");
  const [cat, setCat] = useState("All");

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
            {u.onRequest && !u.shown.length ? (
              <div className="on-request">
                <strong>Courses &amp; fees on request</strong>
                <span>UG and PG programmes available. Contact us for the latest course list and fee structure.</span>
              </div>
            ) : (
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
            )}
            <a href="#enquire" className="explore">Enquire for admission <span className="arrow">→</span></a>
          </article>
        ))}
      </div>
    </div>
  );
}
