"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Remembers the previous page (sessionStorage "mw-prev-path") so buttons such as
// "Back to Categories" can return visitors to where they came from.
export default function RouteTracker() {
  const pathname = usePathname();
  useEffect(() => {
    try {
      const cur = sessionStorage.getItem("mw-cur-path");
      if (cur && cur !== pathname) sessionStorage.setItem("mw-prev-path", cur);
      sessionStorage.setItem("mw-cur-path", pathname);
    } catch {}
  }, [pathname]);
  return null;
}
