import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="px-6 pt-12 pb-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-6" style={{ color: "var(--ink)" }}>
          I turn complex problems into production AI systems.
        </h1>

        <div className="space-y-5 text-lg leading-relaxed" style={{ color: "var(--ink-2)" }}>
          <p>
            I’m an AI Partner Engineer at Life360, forward deployed across business functions to solve problems and build our AI platform. Previously, I worked across AI platform engineering, product, and research at DraftKings.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-8 mono text-xs uppercase tracking-widest [&>a]:py-3.5 [&>a]:-my-3.5 [&>a]:px-1.5 [&>a]:-mx-1.5">
          <a className="link" href="mailto:chris.ayala12@gmail.com">Email</a>
          <a className="link" href="https://www.linkedin.com/in/chrisvayala" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="link" href="https://github.com/ChrisVAyala90" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="link" href="https://x.com/chrisvayala" target="_blank" rel="noopener noreferrer">X</a>
          <a className="link" href="/ChrisVAyalaResume.pdf" target="_blank" rel="noopener noreferrer">Résumé ↗</a>
        </div>
      </div>
    </section>
  );
}
