import React from "react";

import { AboutSection } from "./about-section";
import { ExperienceSection, EducationSection, SkillsSection } from "./resume-section";
import { TechnicalProjectsSection } from "./technical-projects-section";

export function Home() {
  return (
    <>
      <AboutSection />
      <ExperienceSection />
      <TechnicalProjectsSection />
      <EducationSection />
      <SkillsSection />
    </>
  );
}
