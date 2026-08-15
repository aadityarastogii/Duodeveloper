import { useEffect, useState } from "react";
import Navbar from "../common-components/Navbar";
import HeroSection from "../HomeComponent/HeroSection";
import Showreel from "../HomeComponent/Showreel";
import Process from "../HomeComponent/Process";
import WhyUs from "../HomeComponent/WhyUs";
import CTA from "../HomeComponent/CTA";
import Footer from "../common-components/Footer";
import SEO from "../SEO Component/SEO";
import Service from "../HomeComponent/Service";
import FloatingParticles from "../common-components/FloatingParticles";

export default function DuodeveloperHome() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "#organization",
        "name": "Duodeveloper",
        "description": "Duodeveloper designs and develops websites and mobile applications for ambitious businesses."
      },
      {
        "@type": "ProfessionalService",
        "@id": "#service",
        "name": "Duodeveloper",
        "description": "Web development and mobile app development services."
      }
    ]
  };

  return (
    <div className="min-h-screen relative bg-black text-white font-sans overflow-x-hidden">
      <SEO
        title="Duodeveloper | Web & App Development Agency"
        description="Duodeveloper creates high-performing websites and mobile applications tailored to your business."
        schemaMarkup={homeSchema}
      />
      <FloatingParticles />
      <Navbar isScrolled={isScrolled} />
      <HeroSection />
      <Showreel />
      <Service />
      <Process />
      <WhyUs />
      <CTA />
      <Footer />
    </div>
  );
}
