import {Button, Card, CardBody, CardHeader} from "@heroui/react";
import {Icon} from "@iconify/react";
import React from "react";

const plans = [
  {
    features: ["5 Projects", "10GB Storage", "Basic Support", "Basic Analytics"],
    isPopular: false,
    name: "Starter",
    price: "29",
  },
  {
    features: ["15 Projects", "50GB Storage", "Priority Support", "Advanced Analytics"],
    isPopular: true,
    name: "Pro",
    price: "99",
  },
  {
    features: ["Unlimited Projects", "1TB Storage", "24/7 Support", "Custom Analytics"],
    isPopular: false,
    name: "Enterprise",
    price: "299",
  },
];

export function PricingSection() {
  return (
    <section className="bg-background px-4 py-20" id="pricing">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-default-600 mx-auto max-w-2xl">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.isPopular ? "border-primary border-2" : ""}>
              <CardHeader className="flex flex-col items-center gap-2 p-6">
                {plan.isPopular && (
                  <div className="text-tiny bg-primary rounded-full px-3 py-1 text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-default-500">/month</span>
                </div>
              </CardHeader>
              <CardBody className="p-6">
                <ul className="mb-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Icon icon="lucide:check" className="text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button color={plan.isPopular ? "primary" : "default"} className="w-full" size="lg">
                  Get Started
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
