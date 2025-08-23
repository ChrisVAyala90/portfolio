import React from "react";
import { Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

const selectedWork = [
  {
    id: 1,
    company: "DraftKings",
    title: "Responsible Gaming AI Strategy",
    problem: "Players needed better tools to monitor gaming behavior and make informed decisions about their activity.",
    solution: "Designed and shipped self-monitoring features with behavioral analytics and personalized insights.",
    impact: "30% of users engaged with the feature within first year, 20% increase in responsible gaming center visits",
    role: "Product Strategy & Research",
    category: "Product Strategy",
    icon: "lucide:shield-check"
  },
  {
    id: 2,
    company: "DraftKings", 
    title: "Enterprise Product Roadmap Optimization",
    problem: "Product teams needed data-driven prioritization for vertical-wide roadmap across multiple touchpoints.",
    solution: "Led bi-annual MaxDiff surveys and built analytics framework to translate complex user preferences into actionable roadmap decisions.",
    impact: "Informed C-level product strategy, optimized resource allocation across 5 product verticals",
    role: "Product Analytics & Strategy",
    category: "Product Strategy", 
    icon: "lucide:target"
  },
  {
    id: 3,
    company: "Freelance",
    title: "Healthcare Conversion Optimization", 
    problem: "Wellness center's digital presence wasn't converting visitors into patients effectively.",
    solution: "Applied mixed-methods research and conversion optimization strategies to redesign patient journey.",
    impact: "46% increase in patient bookings, improved user experience across mobile-first design",
    role: "Product Strategy & UX",
    category: "Growth Strategy",
    icon: "lucide:trending-up"
  }
];

const categoryColors = {
  "Product Strategy": "primary",
  "Growth Strategy": "success"
} as const;

export function SelectedWorkSection() {
  return (
    <section id="selected-work" className="px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
          <p className="text-default-600 text-lg max-w-2xl mx-auto">
            Key projects demonstrating product strategy, AI implementation, and business impact
          </p>
        </div>
        
        <div className="space-y-8">
          {selectedWork.map((work) => (
            <Card key={work.id} className="bg-background hover:shadow-lg transition-shadow">
              <CardBody className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Icon and Category */}
                  <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-3">
                    <div className="p-3 bg-primary-100 rounded-xl">
                      <Icon icon={work.icon} className="w-6 h-6 text-primary" />
                    </div>
                    <Chip 
                      color={categoryColors[work.category as keyof typeof categoryColors]}
                      variant="flat"
                      size="sm"
                      className="whitespace-nowrap"
                    >
                      {work.category}
                    </Chip>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{work.title}</h3>
                        <p className="text-primary font-medium">{work.company}</p>
                        <p className="text-sm text-default-500">{work.role}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                      <div>
                        <h4 className="font-semibold text-default-700 mb-2">Problem</h4>
                        <p className="text-default-600">{work.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-default-700 mb-2">Solution</h4>
                        <p className="text-default-600">{work.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-default-700 mb-2">Impact</h4>
                        <p className="text-default-600 font-medium">{work.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}