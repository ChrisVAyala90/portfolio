import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

const experience = [
  {
    company: "TechCorp",
    position: "Senior Product Manager, AI",
    period: "2021 - Present",
    description: "Leading the development of AI-powered features across the product suite. Launched three major ML-based features that increased user engagement by 45%.",
    achievements: [
      "Spearheaded the development of a recommendation engine that increased user engagement by 32%",
      "Led cross-functional team of engineers, designers, and data scientists to launch AI-powered content moderation system",
      "Developed product roadmap and strategy for AI initiatives across the company"
    ]
  },
  {
    company: "InnovateLabs",
    position: "Product Manager",
    period: "2018 - 2021",
    description: "Managed the full product lifecycle for a B2B SaaS platform with 50,000+ users. Collaborated with engineering teams to implement ML features.",
    achievements: [
      "Redesigned onboarding flow resulting in 40% improvement in activation rate",
      "Implemented A/B testing framework that optimized conversion rates by 25%",
      "Coordinated with data science team to develop predictive analytics dashboard"
    ]
  },
  {
    company: "DataViz Inc.",
    position: "AI Engineer",
    period: "2016 - 2018",
    description: "Developed machine learning models for natural language processing and computer vision applications.",
    achievements: [
      "Built and deployed NLP models for sentiment analysis with 92% accuracy",
      "Optimized ML pipeline reducing inference time by 60%",
      "Collaborated with product team to integrate ML capabilities into user-facing features"
    ]
  }
];

const education = [
  {
    institution: "Stanford University",
    degree: "M.S. Computer Science, AI Specialization",
    period: "2014 - 2016"
  },
  {
    institution: "University of California, Berkeley",
    degree: "B.S. Computer Science",
    period: "2010 - 2014"
  }
];

const certifications = [
  "Product Management Professional (PMP)",
  "TensorFlow Developer Certificate",
  "AWS Machine Learning Specialty",
  "Certified Scrum Product Owner (CSPO)"
];

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
            {experience.map((job, index) => (
              <Card key={index} className="bg-background">
                <CardBody className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">{job.position}</h4>
                      <p className="text-primary font-medium">{job.company}</p>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Icon icon="lucide:graduation-cap" className="mr-2 text-primary" />
              Education
            </h3>
            <Card className="bg-background">
              <CardBody className="p-6">
                {education.map((edu, index) => (
                  <React.Fragment key={index}>
                    <div className="mb-4">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-semibold">{edu.institution}</h4>
                        <span className="text-default-500">{edu.period}</span>
                      </div>
                      <p className="text-default-600">{edu.degree}</p>
                    </div>
                    {index < education.length - 1 && <Divider className="my-4" />}
                  </React.Fragment>
                ))}
              </CardBody>
            </Card>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Icon icon="lucide:award" className="mr-2 text-primary" />
              Certifications
            </h3>
            <Card className="bg-background">
              <CardBody className="p-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <Icon icon="lucide:check-circle" className="mr-2 text-success" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}