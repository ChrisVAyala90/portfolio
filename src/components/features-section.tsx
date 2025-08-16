import {Card, CardBody} from "@heroui/react";
import {Icon} from "@iconify/react";
import React from "react";

const features = [
  {
    description: "Building intelligent systems that leverage LLMs and modern AI technologies",
    icon: "lucide:brain",
    title: "AI Product Development",
  },
  {
    description: "Conducting user research and mixed-methods studies to drive product decisions",
    icon: "lucide:search",
    title: "Research Expertise",
  },
  {
    description: "Translating complex technical concepts into clear product strategy and roadmaps",
    icon: "lucide:lightbulb",
    title: "Strategic Thinking",
  },
  {
    description: "Leading cross-functional teams to deliver impactful AI products responsibly",
    icon: "lucide:users",
    title: "Team Leadership",
  },
];
export function FeaturesSection() {
  return (
    <section className="bg-background px-4 py-20" id="features">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">What I Bring</h2>
          <p className="text-default-600 mx-auto max-w-2xl">
            The core strengths and capabilities I bring to AI product development
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} isHoverable>
              <CardBody className="p-6 text-center">
                <Icon icon={feature.icon} className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-default-600">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
