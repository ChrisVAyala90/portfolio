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
      <div className="px-6">
        {/* flex on mobile, 3-col grid on desktop so the nav sits at the true page center */}
        <div className="max-w-3xl mx-auto h-14 flex items-center justify-between sm:grid sm:grid-cols-3">
          <Link
            to="/"
            aria-label="Home"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-60 sm:justify-self-start"
          >
            <img src={isDark ? "/logo-dark.svg" : "/logo-light.svg"} alt="" className="h-7 w-auto" />
            <span className="mono text-sm tracking-tight hidden sm:inline" style={{ color: "var(--ink)" }}>
              christopher ayala
            </span>
          </Link>

          <nav className="flex items-center gap-5 sm:gap-6 sm:justify-self-center">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="mono text-xs uppercase tracking-widest py-3.5 transition-opacity hover:opacity-60"
                style={{ color: "var(--ink-2)" }}
              >
                {n.label}
              </a>
            ))}
            <Link
              to="/blog"
              className="mono text-xs uppercase tracking-widest py-3.5 transition-opacity hover:opacity-60"
              style={{ color: "var(--ink-2)" }}
            >
              Blog
            </Link>
          </nav>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="mono text-xs uppercase tracking-widest py-3.5 transition-opacity hover:opacity-60 cursor-pointer sm:justify-self-end"
            style={{ color: "var(--ink-2)" }}
          >
            {isDark ? "light" : "dark"}
          </button>
        </div>
      </div>
    </header>
  );
}
