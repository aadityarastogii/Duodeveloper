import { useEffect, useState } from "react";
import Footer from "../common-components/Footer";
import Navbar from "../common-components/Navbar";
import FloatingParticles from "../common-components/FloatingParticles";
import Projects from "../HomeComponent/Projects";
import SEO from "../SEO Component/SEO";

export default function ProjectsPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SEO
        title="Our Projects | DuoDeveloper"
        description="Explore DuoDeveloper's web and product projects across hospitality, luxury retail, and grocery delivery."
      />
      <FloatingParticles />
      <Navbar isScrolled={isScrolled} />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}