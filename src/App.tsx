import React from "react";

import {Header} from "./components/header";
import {AboutSection} from "./components/about-section";
import {ResumeSection} from "./components/resume-section";
import {TechnicalProjectsSection} from "./components/technical-projects-section";

export default function App() {
  return (
    <main className="min-h-screen bg-background dark:bg-default-50">
      <Header />
      <AboutSection />
      <ResumeSection />
      <TechnicalProjectsSection />
    </main>
  );
}
