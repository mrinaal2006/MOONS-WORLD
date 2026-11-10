"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fades/slides content in as it scrolls into view. Elements are picked by
// selector so no markup changes are needed; siblings get a small stagger.
const SELECTOR = [
  ".section-head", ".card", ".stat", ".cat-card", ".inst-card", ".team-card",
  ".vm-card", ".coming-soon", ".enquiry-cta", ".banner", ".about-grid > div:first-child",
  ".online > div:first-child", ".contact-grid > div:first-child", ".page-hero .container",
  ".hero-grid > div:first-child", ".cat-head", ".inst-head", ".centre-photo",
  ".facility", ".g-item", ".mentor-stat", ".mentor-info", ".mentor-photo-wrap", ".contest-detail", ".cx-block-head", ".other-cat", ".empty-state", ".cat-steps", ".price-card", ".why-box", ".vm-photo", ".flyer", ".offer-grid > div:last-child > h2",
].join(",");

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = [...document.querySelectorAll(SELECTOR)].filter((el) => !el.classList.contains("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => {
      const sibs = el.parentElement ? [...el.parentElement.children].filter((c) => c.matches(SELECTOR)) : [];
      const i = Math.max(0, sibs.indexOf(el));
      el.style.setProperty("--d", `${Math.min(i, 6) * 90}ms`);
      el.classList.add("reveal");
      // anything already on screen animates immediately
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) requestAnimationFrame(() => el.classList.add("in"));
      else io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
