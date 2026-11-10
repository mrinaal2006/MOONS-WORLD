"use client";
import { useMemo, useState } from "react";
import ContestDetailCard from "./ContestDetailCard";
import EmptyState from "./EmptyState";
import { statusLabel } from "@/data/contests";

const SEARCH_KEYS = ["title", "organizer", "eligibility", "problem", "examPattern", "rewards", "prizes", "difficulty", "syllabus", "topics", "subtitle", "description", "sponsoredBy", "collaborator", "venue"];
const STATUS_FILTERS = ["all", "open", "upcoming", "closed"];

function matches(c, q) {
  if (!q) return true;
  const hay = SEARCH_KEYS.map((k) => (Array.isArray(c[k]) ? c[k].join(" ") : c[k] || "")).join(" ").toLowerCase();
  return q.toLowerCase().split(/\s+/).every((w) => hay.includes(w));
}

// Search + group tabs + sections for one contest category.
// `category` is a plain config object from data/contests.js; `items` are its contests.
export default function CategoryExplorer({ category, items }) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("all");
  const [status, setStatus] = useState("all");

  const labelOf = (v) => category.groups.find((g) => g.value === v)?.label || v;

  const filtered = useMemo(
    () =>
      items.filter(
        (c) =>
          (group === "all" || c.group === group) &&
          (category.sections || status === "all" || c.status === status || (status === "closed" && c.status === "past")) &&
          matches(c, query)
      ),
    [items, group, status, query, category.sections]
  );

  const countIn = (v) => items.filter((c) => c.group === v).length;

  // Blocks to render: status sections (hackathons, coding) or one block per group (scholarships)
  const blocks = category.sections
    ? category.sections.map((s) => ({
        key: s.key,
        title: s.title,
        empty: s.empty,
        list: filtered.filter((c) => s.statuses.includes(c.status)),
      }))
    : category.groups
        .filter((g) => group === "all" || g.value === group)
        .map((g) => ({
          key: g.value,
          title: g.label,
          empty: `No scholarship tests for ${g.label} yet. Stay tuned!`,
          list: filtered.filter((c) => c.group === g.value),
        }));

  return (
    <div className="cx">
      <div className="cx-toolbar">
        <label className="cx-search">
          <span aria-hidden="true">🔍</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${category.title.toLowerCase()}…`}
            aria-label={`Search ${category.title}`}
          />
        </label>

        <div className="seg cx-groups" role="tablist" aria-label={category.groupLabel}>
          <button role="tab" aria-selected={group === "all"} className={group === "all" ? "on" : ""} onClick={() => setGroup("all")}>
            All <small>{items.length}</small>
          </button>
          {category.groups.map((g) => (
            <button key={g.value} role="tab" aria-selected={group === g.value} className={group === g.value ? "on" : ""} onClick={() => setGroup(g.value)}>
              {g.label} <small>{countIn(g.value)}</small>
            </button>
          ))}
        </div>

        {!category.sections && (
          <div className="chips cx-status" aria-label="Status">
            {STATUS_FILTERS.map((s) => (
              <button key={s} className={`chip chip-btn ${status === s ? "on" : ""}`} onClick={() => setStatus(s)}>
                {s === "all" ? "All statuses" : statusLabel[s]}
              </button>
            ))}
          </div>
        )}
      </div>

      {items.length === 0 ? (
        <EmptyState
          title="No upcoming contests available. Stay tuned!"
          text={`New ${category.title.toLowerCase()} will be published here with full details and official registration links.`}
          icon={category.icon}
        />
      ) : null}

      {blocks.map((b) => (
        <section key={b.key} className="cx-block" aria-labelledby={`blk-${b.key}`}>
          <div className="cx-block-head">
            <h2 id={`blk-${b.key}`}>{b.title}</h2>
            <span className="cx-count">{b.list.length}</span>
          </div>
          {b.list.length ? (
            <div className="cx-grid">
              {b.list.map((c) => (
                <ContestDetailCard key={c.id || c.title} contest={c} category={category} groupLabel={labelOf(c.group)} />
              ))}
            </div>
          ) : (
            <EmptyState compact cta={false} icon="⏳" title={query ? "No contests match your search." : b.empty} />
          )}
        </section>
      ))}
    </div>
  );
}
