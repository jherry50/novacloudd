import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import Features from "@/components/sections/Features";
import Dashboard from "@/components/sections/Dashboard";
import Stats from "@/components/sections/Stats";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Dashboard />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}