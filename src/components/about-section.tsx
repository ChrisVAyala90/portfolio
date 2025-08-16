import React from "react";
import { Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

const skills = [
  { name: "Product Strategy", icon: "lucide:strategy" },
  { name: "AI/ML", icon: "lucide:brain" },
  { name: "User Research", icon: "lucide:users" },
  { name: "Data Analysis", icon: "lucide:bar-chart-2" },
  { name: "Agile/Scrum", icon: "lucide:git-branch" },
  { name: "Prototyping", icon: "lucide:layers" },
  { name: "Python", icon: "logos:python" },
  { name: "TensorFlow", icon: "logos:tensorflow" },
];

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-square rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://img.heroui.chat/image/avatar?w=400&h=400&u=pm1" 
                  alt="Alex Morgan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4 justify-center">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Icon icon="logos:linkedin-icon" className="w-6 h-6" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Icon icon="logos:github-icon" className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Icon icon="logos:twitter" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">Alex Morgan</h1>
            <h2 className="text-2xl text-primary mb-6">Product Manager & AI Engineer</h2>
            <p className="text-default-600 mb-8 text-lg">
              I'm a product manager and AI engineer with over 8 years of experience building innovative products at the intersection of artificial intelligence and user experience. My passion lies in translating complex technical capabilities into intuitive, valuable user experiences.
            </p>
            <p className="text-default-600 mb-8 text-lg">
              Currently leading AI product initiatives at TechCorp, where I've launched three successful AI-powered features that have increased user engagement by 45% and reduced customer support inquiries by 30%.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {skills.map((skill) => (
                <Chip
                  key={skill.name}
                  startContent={<Icon icon={skill.icon} className="text-primary" />}
                  variant="flat"
                  className="px-3 py-2"
                >
                  {skill.name}
                </Chip>
              ))}
            </div>
            
            <Card className="bg-primary-50">
              <CardBody className="p-6">
                <div className="flex gap-4 items-start">
                  <Icon icon="lucide:lightbulb" className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">My Philosophy</h3>
                    <p className="text-default-600">
                      I believe in building products that solve real problems through a deep understanding of user needs, technical possibilities, and business goals. Great products emerge at the intersection of desirability, feasibility, and viability.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}