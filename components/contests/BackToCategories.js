"use client";
import { useRouter } from "next/navigation";

// Returns to the category cards the visitor came from:
//  • came from the home page  → /#contests
//  • otherwise                → /contests#categories
// Then scrolls to them reliably (retries until the target exists) and flashes them.
export default function BackToCategories({ className = "back-btn", children = "← Back to Categories" }) {
  const router = useRouter();

  function go(e) {
    e.preventDefault();
    let prev = "";
    try { prev = sessionStorage.getItem("mw-prev-path") || ""; } catch {}
    const fromHome = prev === "/" || prev.startsWith("/#");
    const path = fromHome ? "/" : "/contests";
    const id = fromHome ? "contests" : "categories";

    router.push(`${path}#${id}`);

    let tries = 0;
    const tick = () => {
      const el = document.getElementById(id);
      if (el && window.location.pathname === path) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.remove("flash");
        void el.offsetWidth; // restart animation
        el.classList.add("flash");
        return;
      }
      if (++tries < 60) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  return (
    <a href="/contests#categories" className={className} onClick={go}>
      {children}
    </a>
  );
}
