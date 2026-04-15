import React from "react";
import data from "../data/technical-projects.json";

export function TechnicalProjectsSection() {
  const { featured, projects } = data;

  return (
    <section id="projects" className="px-6 py-20" style={{ borderTop: "1px solid var(--rule)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 pb-3 border-b hairline">
          <p className="mono text-xs uppercase tracking-widest muted">Selected Work</p>
        </div>

        <article className="mb-20">
          <div className="flex items-baseline justify-between flex-wrap gap-y-2 mb-6">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight" style={{ color: "var(--ink)" }}>
                {featured.title}
              </h3>
              <p className="text-[15px] mt-1" style={{ color: "var(--ink-2)" }}>
                {featured.tagline}
              </p>
            </div>
            <a
              className="link mono text-xs uppercase tracking-widest"
              href={featured.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View repo ↗
            </a>
          </div>

          <div className="grid md:grid-cols-[140px_1fr] gap-y-5 md:gap-x-6">
            <div className="mono text-xs uppercase tracking-widest pt-1 muted">Problem</div>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
              {featured.problem}
            </p>

            <div className="mono text-xs uppercase tracking-widest pt-1 muted">Approach</div>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
              {featured.approach}
            </p>

            <div className="mono text-xs uppercase tracking-widest pt-1 muted">Stack</div>
            <p className="mono text-xs leading-relaxed" style={{ color: "var(--ink-2)" }}>
              {featured.stack.join(" · ")}
            </p>
          </div>
        </article>

        <ol className="space-y-10">
          {projects.map((p, i) => (
            <li key={i} className="grid grid-cols-[88px_1fr] md:grid-cols-[140px_1fr] gap-6">
              <div className="mono text-xs uppercase tracking-widest pt-1 numeric muted">
                {String(i + 2).padStart(2, "0")}
              </div>
              <div>
                <div className="flex items-baseline justify-between flex-wrap gap-y-1">
                  <h4 className="text-base font-semibold" style={{ color: "var(--ink)" }}>
                    {p.title}
                  </h4>
                  <a
                    className="link mono text-xs uppercase tracking-widest"
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo ↗
                  </a>
                </div>
                <p className="text-[15px] mt-2 leading-relaxed" style={{ color: "var(--ink-2)" }}>
                  {p.description}
                </p>
                <p className="mono text-xs mt-2 muted">
                  {p.stack.join(" · ")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
