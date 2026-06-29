import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="px-6 pt-12 pb-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-10" style={{ color: "var(--ink)" }}>
          Full-stack technologist building production AI systems.
        </h1>

        <div className="space-y-5 text-lg leading-relaxed" style={{ color: "var(--ink-2)" }}>
          <p>
            I’ve spent my career across nearly every part of the product lifecycle—UX design, product, research, and engineering—and I bring all of it to building AI systems. I start in the problem space, not the solution—digging into the why, framing the how-might-we, then reasoning through the whole system and engineering the answer that works for the people using it.
          </p>
          <p>
            Two master’s degrees ground both sides of the work—Software Development from Boston University and Human-Computer Interaction from DePaul—so I move comfortably between an architecture review and a user-research session. I’ve owned the AI operations for a platform running thousands of internal workflows, and led research programs that reshaped executive roadmaps. I turn ambiguous, complex problems into systems that ship and decisions that hold.
          </p>
          <p>
            Outside of work, I’m big on family time, keep a daily meditation practice, and stay active playing hockey or hitting the gym.
          </p>
          <p>
            I’m always glad to connect with people building where business, design, and engineering meet.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-6 mono text-xs uppercase tracking-widest [&>a]:py-3.5 [&>a]:-my-3.5 [&>a]:px-1.5 [&>a]:-mx-1.5">
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
