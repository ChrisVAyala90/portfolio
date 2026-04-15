import React from "react";
import resumeData from "../data/resume.json";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 pb-3 border-b hairline">
      <p className="mono text-xs uppercase tracking-widest muted">{children}</p>
    </div>
  );
}

export function ResumeSection() {
  return (
    <section id="work" className="px-6 py-20" style={{ borderTop: "1px solid var(--rule)" }}>
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Experience</SectionLabel>

        <ol className="space-y-12">
          {resumeData.experience.map((job, i) => (
            <li key={i} className="grid grid-cols-[88px_1fr] md:grid-cols-[140px_1fr] gap-6">
              <div className="mono text-xs uppercase tracking-widest pt-1 numeric muted">
                {job.period}
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-snug" style={{ color: "var(--ink)" }}>
                  {job.position}
                </h3>
                <p className="mono text-xs uppercase tracking-widest mt-1 dim">
                  {job.company} · {job.location}
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
                  {job.achievements.map((a, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="muted select-none" aria-hidden>—</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <SectionLabel>Education</SectionLabel>
          <ol className="space-y-8">
            {resumeData.education.map((edu, i) => (
              <li key={i} className="grid grid-cols-[88px_1fr] md:grid-cols-[140px_1fr] gap-6">
                <div className="mono text-xs uppercase tracking-widest pt-1 numeric muted">
                  {edu.period}
                </div>
                <div>
                  <h3 className="text-base font-semibold" style={{ color: "var(--ink)" }}>
                    {edu.institution}
                  </h3>
                  <p className="text-[15px] mt-0.5" style={{ color: "var(--ink-2)" }}>
                    {edu.degree}
                    {edu.gpa && <span className="mono text-xs ml-2 muted numeric">GPA {edu.gpa}</span>}
                  </p>
                  {edu.coursework && (
                    <p className="mono text-xs mt-2 muted">{edu.coursework.join(" · ")}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20">
          <SectionLabel>Skills</SectionLabel>
          <dl className="space-y-5">
            <div className="grid grid-cols-[88px_1fr] md:grid-cols-[140px_1fr] gap-6">
              <dt className="mono text-xs uppercase tracking-widest pt-1 muted">AI Engineering</dt>
              <dd className="text-[15px]" style={{ color: "var(--ink-2)" }}>
                {resumeData.skills.aiEngineering.join(" · ")}
              </dd>
            </div>
            <div className="grid grid-cols-[88px_1fr] md:grid-cols-[140px_1fr] gap-6">
              <dt className="mono text-xs uppercase tracking-widest pt-1 muted">Development</dt>
              <dd className="text-[15px]" style={{ color: "var(--ink-2)" }}>
                {resumeData.skills.development.join(" · ")}
              </dd>
            </div>
            <div className="grid grid-cols-[88px_1fr] md:grid-cols-[140px_1fr] gap-6">
              <dt className="mono text-xs uppercase tracking-widest pt-1 muted">Product & Evaluation</dt>
              <dd className="text-[15px]" style={{ color: "var(--ink-2)" }}>
                {resumeData.skills.productEvaluation.join(" · ")}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
