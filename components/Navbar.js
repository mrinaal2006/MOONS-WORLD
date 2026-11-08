"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/emblem.png" alt="" width={46} height={38} priority />
          <span>MOON&apos;S <b>WORLD</b></span>
        </Link>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          <Link href="/#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>Enquire Now</Link>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
