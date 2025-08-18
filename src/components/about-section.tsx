// Force Netlify to rebuild and clear cache - Updated: Aug 16 2024
import React from "react";
import { Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

const skills = [
  { name: "Python", icon: "logos:python" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React", icon: "logos:react" },
  { name: "User Research", icon: "lucide:users" },
  { name: "Data Analysis", icon: "lucide:bar-chart-2" },
  { name: "AI/ML", icon: "lucide:brain" },
  { name: "Product Strategy", icon: "lucide:strategy" },
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
                  src="/images/christopher-ayala-profile.jpg" 
                  alt="Christopher Ayala - AI Product Engineer" 
                  className="w-full h-full object-cover bg-default-100"
                  loading="eager"
                />
              </div>
              <div className="flex gap-4 justify-center">
                <a href="https://www.linkedin.com/in/chrisvayala" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Icon icon="logos:linkedin-icon" className="w-6 h-6" />
                </a>
                <a href="https://github.com/ChrisVAyala90" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Icon icon="logos:github-icon" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">Christopher Ayala</h1>
            <h2 className="text-2xl text-primary mb-6">AI Product Engineer</h2>
            <p className="text-default-600 mb-8 text-lg">
              I'm a multidisciplinary technologist with a background spanning software engineering, UX research, and product management. I specialize in creating AI-powered tools that solve real-world problems in intuitive ways, blending deep customer empathy with strong technical execution.
            </p>
            <p className="text-default-600 mb-8 text-lg">
              I hold dual Master's degrees - one in Human-Computer Interaction from DePaul University (with distinction) and another in Software Development from Boston University. This unique combination allows me to navigate complex product challenges by understanding both the human and technical dimensions of innovation.
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
                    <h3 className="text-lg font-semibold mb-2">My Ethos</h3>
                    <p className="text-default-600">
                      I believe in building technology that serves real people with real problems. As a multidisciplinary technologist, I approach challenges with relentless curiosity and pragmatic execution - researching deeply but moving decisively. My work is rooted in creating products people genuinely love, bringing teams along for the journey, and refusing to let innovation be bottlenecked by fear or convention. I measure success not just in metrics, but in the energy and opportunity created for others.
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