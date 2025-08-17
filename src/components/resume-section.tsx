import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import resumeData from "../data/resume.json";

export function ResumeSection() {
  return (
    <section id="resume" className="px-4 py-20 bg-default-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Icon icon="lucide:briefcase" className="mr-2 text-primary" />
            Work Experience
          </h3>
          
          <div className="space-y-6">
            {resumeData.experience.map((job, index) => (
              <Card key={index} className="bg-background">
                <CardBody className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">{job.position}</h4>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-default-500 text-sm">{job.location}</p>
                    </div>
                    <span className="text-default-500 mt-1 md:mt-0">{job.period}</span>
                  </div>
                  <p className="text-default-600 mb-4">{job.description}</p>
                  <ul className="list-disc pl-5 space-y-1 text-default-600">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Icon icon="lucide:graduation-cap" className="mr-2 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <Card key={index} className="bg-background">
                  <CardBody className="p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{edu.institution}</h4>
                        <p className="text-default-600">{edu.degree}</p>
                        {edu.gpa && <p className="text-default-500 text-sm">GPA: {edu.gpa}</p>}
                        {edu.coursework && (
                          <p className="text-default-500 text-sm mt-2">
                            <span className="font-medium">Relevant Coursework:</span> {edu.coursework.join(", ")}
                          </p>
                        )}
                      </div>
                      <span className="text-default-500 mt-2 sm:mt-0 sm:ml-4">{edu.period}</span>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Icon icon="lucide:code-2" className="mr-2 text-primary" />
              Technical Skills
            </h3>
            <Card className="bg-background">
              <CardBody className="p-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-sm text-default-700 mb-2">Languages</h5>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.programmingLanguages.map((lang, index) => (
                        <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Divider />
                  
                  <div>
                    <h5 className="font-medium text-sm text-default-700 mb-2">Frameworks</h5>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.librariesFrameworks.map((framework, index) => (
                        <span key={index} className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-sm">
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Divider />
                  
                  <div>
                    <h5 className="font-medium text-sm text-default-700 mb-2">Tools</h5>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.tools.slice(0, 8).map((tool, index) => (
                        <span key={index} className="px-2 py-1 bg-default-200 text-default-700 rounded text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
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