import {Card, CardBody} from "@heroui/react";
import {Icon} from "@iconify/react";
import React from "react";

const features = [
  {
    description: "Connect with your favorite tools seamlessly",
    icon: "lucide:puzzle",
    title: "Easy Integration",
  },
  {
    description: "Get insights instantly with powerful dashboards",
    icon: "lucide:bar-chart",
    title: "Real-time Analytics",
  },
  {
    description: "Enterprise-grade security out of the box",
    icon: "lucide:shield",
    title: "Secure by Default",
  },
  {
    description: "Our team is here to help you succeed",
    icon: "lucide:headphones",
    title: "24/7 Support",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-background px-4 py-20" id="features">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Choose Us</h2>
          <p className="text-default-600 mx-auto max-w-2xl">
            Discover the features that make our platform stand out from the competition
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
