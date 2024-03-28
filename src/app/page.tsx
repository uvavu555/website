import AboutUs from "@/components/About";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import ScrollUp from "@/components/Common/ScrollUp";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "D&L Insatllations - creating beautiful dream homes that last a lifetime.",
  description:
    "Owner and Director Lee Sargeant began his career as a carpenter and joiner, his skill set has developed over the years to bespoke furniture fabrication and installations specialism. To transform your space, Lee will draw on his experience to project manage your renovation and development project.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutUs />
      <Projects />
      <Services />
      <Testimonials />
      <Partners />
    </>
  );
}
