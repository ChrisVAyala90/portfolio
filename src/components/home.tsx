import React from "react";

import { AboutSection } from "./about-section";
import { ResumeSection } from "./resume-section";
import { TechnicalProjectsSection } from "./technical-projects-section";

export function Home() {
  return (
    <>
      <AboutSection />
      <ResumeSection />
      <TechnicalProjectsSection />
    </>
  );
}
