import React from "react";
import BrandScroller from "./BrandScroller";
import HeroSection from "./HeroSection";
import EscStackLanding from "../components/EscStackLanding";
import ContactSidebar from "./ContactSidebar";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const testimonials = [
  {
    description:
      "escStack completely transformed how we build products. The process was smooth, the team is highly skilled, and the results exceeded expectations.",
    image:
      "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=2070&auto=format&fit=crop",
    name: "Isabelle Carlos",
    handle: "@isabellecarlos",
  },
  {
    description:
      "Working with escStack made our project feel effortless. The team understood our vision and delivered a professional, scalable product.",
    image:
      "https://plus.unsplash.com/premium_photo-1692340973636-6f2ff926af39?q=80&w=2070&auto=format&fit=crop",
    name: "Lana Akash",
    handle: "@lanaaakash",
  },
  {
    description:
      "The smooth development process and expert guidance from escStack saved us months of time. We’ll definitely partner with them again.",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2070&auto=format&fit=crop",
    name: "Liam O’Connor",
    handle: "@liamoc",
  },
];

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <BrandScroller />
      <EscStackLanding />
      <ContactSidebar />
      <section aria-labelledby="home-testimonials-heading" className="w-full">
        <h2
          id="home-testimonials-heading"
          className="px-6 pt-16 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
        >
          What our Valuable Clients say about us
        </h2>
        <AnimatedTestimonials data={testimonials} />
      </section>
    </div>
  );
}

export default LandingPage;
