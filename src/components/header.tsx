import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/theme-context";

// Section links point at the home route so they work from any page (e.g. /blog).
const nav = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
];

export function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50" style={{ background: "var(--paper)", borderBottom: "1px solid var(--rule)" }}>
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" aria-label="Home" className="flex items-center gap-2.5 transition-opacity hover:opacity-60">
          <img src={isDark ? "/logo-dark.svg" : "/logo-light.svg"} alt="" className="h-7 w-auto" />
          <span className="mono text-sm tracking-tight hidden sm:inline" style={{ color: "var(--ink)" }}>
            christopher ayala
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="mono text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: "var(--ink-2)" }}
            >
              {n.label}
            </a>
          ))}
          <Link
            to="/blog"
            className="mono text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
            style={{ color: "var(--ink-2)" }}
          >
            Blog
          </Link>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="mono text-xs uppercase tracking-widest transition-opacity hover:opacity-60 cursor-pointer"
            style={{ color: "var(--ink-2)" }}
          >
            {isDark ? "light" : "dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
