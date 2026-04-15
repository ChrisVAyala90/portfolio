import React from "react";

import { Header } from "./components/header";
import { AboutSection } from "./components/about-section";
import { ResumeSection } from "./components/resume-section";
import { TechnicalProjectsSection } from "./components/technical-projects-section";

export default function App() {
  return (
    <div id="top" className="min-h-screen" style={{ background: "var(--paper)", color: "var(--ink)" }}>
      <Header />
      <AboutSection />
      <ResumeSection />
      <TechnicalProjectsSection />
      <footer className="px-6 py-10" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between mono text-xs uppercase tracking-widest muted">
          <span>© {new Date().getFullYear()} Christopher Ayala</span>
          <a className="link" href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
