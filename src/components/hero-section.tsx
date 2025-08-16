import {Button} from "@heroui/react";
import {Icon} from "@iconify/react";
import React from "react";

export function HeroSection() {
  return (
    <section className="from-primary-50 to-background bg-linear-to-b relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
      <div className="container relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I'm <span className="text-primary">Christopher Ayala</span>
        </h1>
        <p className="text-default-600 max-w-2xl text-xl">
          AI Product Engineer building thoughtful, responsible AI features that solve real-world problems. 
          I blend deep customer empathy with technical execution to ship products that move KPIs.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" color="primary" endContent={<Icon icon="lucide:mail" />}>
            Get In Touch
          </Button>
          <Button size="lg" variant="bordered" startContent={<Icon icon="lucide:download" />}>
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
