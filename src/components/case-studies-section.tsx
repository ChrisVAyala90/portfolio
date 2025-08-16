import React from "react";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import caseStudies from "../data/caseStudies.json";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
          <p className="text-default-600 max-w-2xl mx-auto">
            A selection of projects where I've made significant contributions as a product manager and AI engineer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} isHoverable className="bg-background">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardBody className="p-5">
                <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
                <p className="text-default-600 mb-4 text-sm">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, i) => (
                    <span key={i} className="text-tiny bg-default-100 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardBody>
              <CardFooter className="px-5 pb-5 pt-0">
                <Button 
                  as="a" 
                  href={study.link} 
                  color="primary" 
                  variant="flat" 
                  size="sm"
                  endContent={<Icon icon="lucide:arrow-right" />}
                  className="w-full"
                >
                  View Case Study
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}