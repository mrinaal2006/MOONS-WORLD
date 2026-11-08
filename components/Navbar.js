"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/data/site";

// Home-page sections (in page order) → the menu item to highlight while that
// section is at the top of the screen. Sections not listed fall under the one above.
const SECTION_TO_NAV = [
  ["top", "/"],
  ["admission", "/#admission"],
  ["services", "/"],
  ["about", "/#about"],
  ["online", "/services/online-courses"],
  ["contests", "/contests"],
  ["why-us", "/#about"],
  ["leadership", "/#about"],
  ["gallery", "/#about"],
  ["hostels", "/services/coaching"],
  ["supervision", "/services/coaching"],
  ["contact", "/#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState("/");

  // Other pages: highlight by route
  useEffect(() => {
    if (pathname !== "/") setActive(nav.find((n) => n.href === pathname)?.href || "");
  }, [pathname]);

  // Home page: scroll-spy
  useEffect(() => {
    if (pathname !== "/") return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = 120; // just below the sticky menu bar
      let current = "/";
      for (const [id, href] of SECTION_TO_NAV) {
        if (id === "top") continue;
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = href;
      }
      // Reached the bottom: the last section wins even if it can't scroll to the top
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "/#contact";
      setActive(current);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  const go = (href) => { setOpen(false); setActive(href); };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" onClick={() => go("/")}>
          <Image src="/emblem.png" alt="" width={48} height={56} preload className="brand-logo" />
          <span>MOON&apos;S <b>WORLD</b></span>
        </Link>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => go(n.href)}
              className={active === n.href ? "active" : undefined}
              aria-current={active === n.href ? (n.href.includes("#") ? "location" : "page") : undefined}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary nav-cta" onClick={() => go("/#contact")}>Enquire Now</Link>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
