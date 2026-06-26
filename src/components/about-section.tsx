import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="px-6 pt-20 pb-24">
      <div className="max-w-3xl mx-auto">
        <p className="mono text-xs uppercase tracking-widest muted mb-6">
          Christopher Ayala — Minneapolis, MN
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-10" style={{ color: "var(--ink)" }}>
          Full-stack technologist — engineer, product researcher, and designer — building production AI.
        </h1>

        <div className="space-y-5 text-lg leading-relaxed" style={{ color: "var(--ink-2)" }}>
          <p>
            I’ve spent my career working across just about every part of the product lifecycle—from digital media and social to UX design and product research. These days, I’m focused on software and AI engineering. Because I’ve worn so many hats, I look at building systems a bit differently; I’m always thinking about how to balance business goals with technical feasibility while making sure things actually work for the people using them.
          </p>
          <p>
            I have two master’s degrees—one in Software Development from Boston University and another in Human-Computer Interaction from DePaul (where I graduated with distinction). This background lets me jump comfortably between deep technical reviews and user research sessions. I love taking complex requirements and turning them into real results, whether that’s a new AI platform or a research-backed roadmap.
          </p>
          <p>
            Outside of work, I’m big on family time, keep a daily meditation practice, and stay active playing hockey or hitting the gym.
          </p>
          <p>
            I’m always happy to connect with teams working where business, design, and engineering meet.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-6 mono text-xs uppercase tracking-widest [&>a]:py-2.5 [&>a]:-my-2.5">
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
