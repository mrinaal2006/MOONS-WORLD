"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { promo } from "@/data/promo";

// Signals other widgets (the doubt chat) so they don't pop up on top of the ad.
const setFlag = (v) => { if (v) document.documentElement.dataset.promo = v; else delete document.documentElement.dataset.promo; };

export default function PromoModal() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!promo?.enabled) return;
    if (promo.showUntil && Date.now() > new Date(`${promo.showUntil}T23:59:59+05:30`).getTime()) return;
    const key = `mw-promo-seen:${promo.id}`;
    try { if (sessionStorage.getItem(key)) return; } catch {}
    setFlag("pending");
    const t = setTimeout(() => {
      setOpen(true);
      setFlag("open");
      try { sessionStorage.setItem(key, "1"); } catch {}
    }, promo.delayMs ?? 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [open]);

  function close() {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
      setFlag(null);
      window.dispatchEvent(new Event("mw-promo-closed"));
    }, 220);
  }

  if (!open) return null;

  return (
    <div className={`promo-overlay ${closing ? "closing" : ""}`} onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="promo" role="dialog" aria-modal="true" aria-labelledby="promo-title">
        <button ref={closeRef} type="button" className="promo-x" aria-label="Close advertisement" onClick={close}>✕</button>

        <a className="promo-poster" href={promo.image} target="_blank" rel="noopener noreferrer" title="Open full poster">
          <Image src={promo.image} alt={`${promo.title} poster`} width={promo.imageWidth} height={promo.imageHeight}
            sizes="(max-width: 760px) 90vw, 380px" preload />
        </a>

        <div className="promo-info">
          {promo.badge && <span className="promo-badge"><i /> {promo.badge}</span>}
          <h2 id="promo-title">{promo.title}</h2>
          {promo.subtitle && <p className="promo-sub">{promo.subtitle}</p>}
          <ul>{promo.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <div className="promo-cta">
            <a href={promo.primary.href} className="btn btn-gold" target={promo.primary.external ? "_blank" : undefined}
              rel={promo.primary.external ? "noopener noreferrer" : undefined} onClick={close}>
              {promo.primary.label} ↗
            </a>
            {promo.secondary && (
              <Link href={promo.secondary.href} className="btn promo-ghost" onClick={close}>{promo.secondary.label}</Link>
            )}
          </div>
          <button type="button" className="promo-later" onClick={close}>Maybe later</button>
        </div>
      </div>
    </div>
  );
}
