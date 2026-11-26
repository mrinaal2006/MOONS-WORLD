"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

// Poster preview button: real thumbnail of the poster + label; opens a full-screen viewer.
export default function PosterButton({ src, title }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <>
      <a href={src} className="poster-btn" onClick={(e) => { e.preventDefault(); setOpen(true); }} aria-label={`View ${title} poster`}>
        <span className="poster-thumb">
          <Image src={src} alt="" width={84} height={119} sizes="84px" />
        </span>
        <span className="poster-text">
          <strong>View poster</strong>
          <small>Full event poster</small>
        </span>
        <svg className="poster-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </a>

      {open && createPortal(
        <div className="poster-viewer" role="dialog" aria-modal="true" aria-label={`${title} poster`} onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="poster-viewer-inner">
            <Image src={src} alt={`${title} poster`} width={1200} height={1697} sizes="(max-width: 760px) 95vw, 640px" />
            <div className="poster-viewer-bar">
              <a href={src} download className="btn btn-gold">⬇ Download</a>
              <button type="button" className="btn promo-ghost" onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
          <button type="button" className="poster-viewer-x" aria-label="Close poster" onClick={() => setOpen(false)}>✕</button>
        </div>,
        document.body
      )}
    </>
  );
}
