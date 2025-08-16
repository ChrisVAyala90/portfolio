import React from "react";

import {CTASection} from "./components/cta-section";
import {FeaturesSection} from "./components/features-section";
import {HeroSection} from "./components/hero-section";
import {PricingSection} from "./components/pricing-section";
import {TestimonialsSection} from "./components/testimonials-section";
import {Header} from "./components/header";
import {AboutSection} from "./components/about-section";
import {ResumeSection} from "./components/resume-section";
import {CaseStudiesSection} from "./components/case-studies-section";

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutSection />
      <ResumeSection />
      <CaseStudiesSection />
    </main>
  );
}
