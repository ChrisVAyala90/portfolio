import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="px-6 pt-20 pb-24">
      <div className="max-w-3xl mx-auto">
        <p className="mono text-xs uppercase tracking-widest muted mb-6">
          Christopher Ayala — Minneapolis, MN
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-10" style={{ color: "var(--ink)" }}>
          I'm a software and AI engineer with a background across product research and UX design.
        </h1>

        <div className="space-y-5 text-lg leading-relaxed" style={{ color: "var(--ink-2)" }}>
          <p>
            My career has spanned the entire product lifecycle—from digital and social media to UX design, product research, and my current focus on software and AI engineering. I architect and ship production systems with a unique perspective, simultaneously addressing business goals, user friction, and technical feasibility.
          </p>
          <p>
            This interdisciplinary approach is backed by two master's degrees: Software Development from Boston University and Human-Computer Interaction (with distinction) from DePaul University. This background enables me to move seamlessly between deep architectural reviews and user discovery sessions, translating complex requirements into tangible business results like production-ready AI platforms and roadmap-defining research.
          </p>
          <p>
            When I'm not building systems, I prioritize time with my family, maintain a daily meditation practice, and stay active through hockey and the gym.
          </p>
          <p>
            I am always looking to connect with teams building at the intersection of business, design, and engineering.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-6 mono text-xs uppercase tracking-widest">
          <a className="link" href="mailto:chris.ayala12@gmail.com">Email</a>
          <a className="link" href="https://www.linkedin.com/in/chrisvayala" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="link" href="https://github.com/ChrisVAyala90" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="link" href="/ChrisVAyalaResume.pdf" target="_blank" rel="noopener noreferrer">Résumé ↗</a>
        </div>
      </div>
    </section>
  );
}
