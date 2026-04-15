import React from "react";
import { useTheme } from "../contexts/theme-context";

const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
];

export function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50" style={{ background: "var(--paper)", borderBottom: "1px solid var(--rule)" }}>
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="mono text-sm tracking-tight hidden sm:inline" style={{ color: "var(--ink)" }}>
          christopher ayala
        </a>
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
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="mono text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
            style={{ color: "var(--ink-2)" }}
          >
            {isDark ? "light" : "dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
