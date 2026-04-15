import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="px-6 pt-20 pb-24">
      <div className="max-w-3xl mx-auto">
        <p className="mono text-xs uppercase tracking-widest muted mb-6">
          Christopher Ayala — Boston, MA
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-10" style={{ color: "var(--ink)" }}>
          I build AI products where the technical, user, and business decisions can't be separated.
        </h1>

        <div className="space-y-5 text-lg leading-relaxed" style={{ color: "var(--ink-2)" }}>
          <p>
            I've been on every side of how products get built, found, and adopted — digital and social media, UX design and product research, and now software and AI engineering, where I ship production systems. That arc is the point. When I work on a problem, I'm asking what the business is trying to win, where the user is getting stuck, and what's actually buildable — at the same time.
          </p>
          <p>
            I hold a Master's in Software Development from Boston University and a Master's with Distinction in Human-Computer Interaction from DePaul. Together they let me sit in an architecture review and a discovery interview in the same afternoon and translate between them.
          </p>
          <p>
            Outside work, my growing family comes first. The rest goes to a daily meditation practice, hockey, and the gym.
          </p>
          <p>
            If you're building products and systems where the technical, user, and business decisions can't be separated, I'd like to know what you're working on.
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
