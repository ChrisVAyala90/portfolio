import React from "react";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import projectsData from "../data/technical-projects.json";

const categoryIcons = {
  "AI/ML": "lucide:brain",
  "Full-Stack": "lucide:code-2"
};

const techStackColors = {
  "OpenAI": "primary",
  "Claude": "secondary",
  "Gemini": "success",
  "Langchain": "warning",
  "Python": "primary",
  "Hugging Face": "secondary",
  "SportsBERT": "success",
  "NLP": "warning",
  "FastAPI": "primary",
  "React": "secondary",
  "Q-Learning": "success",
  "Docker": "warning",
  "PHP": "primary",
  "MySQL": "secondary",
  "REST APIs": "success",
  "JSON": "warning",
  "XML": "default"
} as const;

export function TechnicalProjectsSection() {
  return (
    <section id="technical-projects" className="px-4 py-20 bg-background dark:bg-default-100">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Projects</h2>
          <p className="text-default-600 text-lg max-w-2xl mx-auto">
            Personal projects exploring AI/ML engineering, full-stack development, and emerging technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.projects.map((project, index) => (
            <Card key={index} className="bg-background dark:bg-default-50">
              <CardBody className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Icon 
                      icon={categoryIcons[project.category as keyof typeof categoryIcons]} 
                      className="text-primary w-5 h-5" 
                    />
                    <span className="text-sm text-default-500">{project.category}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                <p className="text-default-600 mb-4 text-sm">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-primary font-medium mb-2">Key Learning:</p>
                  <p className="text-sm text-default-600">{project.keyLearning}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-default-700 font-medium mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, i) => (
                      <Chip 
                        key={i} 
                        size="sm" 
                        variant="flat"
                        color={techStackColors[tech as keyof typeof techStackColors] || "default"}
                        className="text-xs"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </div>
              </CardBody>
              
              <CardFooter className="pt-0 px-6 pb-6">
                <Button
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="bordered"
                  size="sm"
                  startContent={<Icon icon="logos:github-icon" />}
                  className="w-full hover:scale-105 transition-transform duration-200"
                >
                  View on GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}