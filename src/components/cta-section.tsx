import {Button} from "@heroui/react";
import {Icon} from "@iconify/react";
import React from "react";

export function CTASection() {
  return (
    <section className="bg-primary px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="mb-6 text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
          Join thousands of satisfied customers and transform your business today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            color="default"
            className="bg-white"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Start Free Trial
          </Button>
          <Button size="lg" variant="bordered" className="border-white text-white">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
