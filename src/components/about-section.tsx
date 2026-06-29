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
            I’ve spent my career across nearly every part of the product lifecycle—UX design, product, research, and engineering—and it all converges on architecting and building production AI systems. Wearing that many hats taught me to see the whole system instead of just my slice: I start with the real problem, weigh business goals against technical feasibility, and make sure the thing actually works for the people using it.
          </p>
          <p>
            Two master’s degrees ground both sides of the work—one in Software Development from Boston University, another in Human-Computer Interaction from DePaul—so I move comfortably between a deep architecture review and a user-research session. I’ve put it to work on both ends: owning the AI operations for a platform that powered thousands of internal workflows, and leading research programs that reshaped executive roadmaps. I like taking ambiguous, complex problems and turning them into systems that ship and decisions that hold.
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
