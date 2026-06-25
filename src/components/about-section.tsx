import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="px-6 pt-20 pb-24">
      <div className="max-w-3xl mx-auto">
        <p className="mono text-xs uppercase tracking-widest muted mb-6">
          Christopher Ayala — Minneapolis, MN
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-10" style={{ color: "var(--ink)" }}>
          I've been the engineer, the researcher, and the designer. Now I build production AI where all three decisions are one.
        </h1>

        <div className="space-y-5 text-lg leading-relaxed" style={{ color: "var(--ink-2)" }}>
          <p>
            I've worked every side of how products get built, found, and adopted: digital and social media, UX design, product research, and now software and AI engineering, where I architect and ship production systems. That range is the point. When I take on a problem I'm working three questions at once, what the business is trying to win, where the user is getting stuck, and what is actually buildable.
          </p>
          <p>
            Two master's degrees sit under that, Software Development from Boston University and Human-Computer Interaction, with distinction, from DePaul. Together they let me sit in an architecture review and a user-discovery session in the same afternoon and translate cleanly between them. The output is measured in business results: production AI platforms in real use, research that has moved executive roadmaps, and interfaces people actually want to use.
          </p>
          <p>
            Outside work, my growing family comes first. The rest goes to a daily meditation practice, hockey, and the gym.
          </p>
          <p>
            If you're building something where those three forces collide, I'd like to hear what you're working on.
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
