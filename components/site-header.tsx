"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Stay", "/rooms"],
  ["Experiences", "/experiences"],
  ["Our story", "/about"],
  ["Explore Malvan", "/location"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" onClick={closeMenu} aria-label="Meridian Malvan home">
          <span className="brand-mark" aria-hidden="true">M.</span>
          <span className="brand-copy">
            <span className="brand-name">Meridian <span>Malvan</span></span>
            <small>A considered coastal stay</small>
          </span>
        </Link>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={closeMenu}>
              {label}
            </Link>
          ))}
          <Link className="button nav-cta" href="/contact" onClick={closeMenu}>
            Plan your stay <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
