import {Avatar, Card, CardBody} from "@heroui/react";
import React from "react";

const testimonials = [
  {
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "This platform has revolutionized how we handle our projects. Highly recommended!",
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "The best development platform I've used in my 10 years of experience.",
    name: "Michael Chen",
    role: "Lead Developer",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "Incredible features and amazing support team. Worth every penny!",
    name: "Emma Davis",
    role: "Product Manager",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-default-50 px-4 py-20" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
          <p className="text-default-600 mx-auto max-w-2xl">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background">
              <CardBody className="p-6">
                <p className="text-default-600 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar src={testimonial.avatar} size="lg" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-small text-default-500">{testimonial.role}</p>
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
