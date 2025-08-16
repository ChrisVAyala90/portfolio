import {Button} from "@heroui/react";
import {Icon} from "@iconify/react";
import React from "react";

export function HeroSection() {
  return (
    <section className="from-primary-50 to-background bg-linear-to-b relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
      <div className="container relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Transform Your Ideas Into
          <span className="text-primary"> Reality</span>
        </h1>
        <p className="text-default-600 max-w-2xl text-xl">
          Empower your business with our cutting-edge platform. Build, launch, and scale your
          projects faster than ever before.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" color="primary" endContent={<Icon icon="lucide:arrow-right" />}>
            Get Started
          </Button>
          <Button size="lg" variant="bordered" startContent={<Icon icon="lucide:play-circle" />}>
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
