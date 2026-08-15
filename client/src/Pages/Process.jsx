import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, LayoutGrid, MessageSquareText, Rocket, Search, Sparkles } from "lucide-react";
import Navbar from "../common-components/Navbar";
import Footer from "../common-components/Footer";
import FloatingParticles from "../common-components/FloatingParticles";
import SEO from "../SEO Component/SEO";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    summary: "We understand your business, users, goals, and the problems your product needs to solve.",
    points: [
      "Business goals and user needs",
      "Current website/app review",
      "Technical and strategic gap analysis"
    ],
    accent: "#04AAA5"
  },
  {
    number: "02",
    title: "Strategy & Planning",
    summary: "We turn the brief into a clear roadmap, wireframes, and decision-ready priorities.",
    points: [
      "Feature prioritization",
      "Project roadmap and milestones",
      "Scope, timeline, and budget clarity"
    ],
    accent: "#FBB040"
  },
  {
    number: "03",
    title: "Design & UX",
    summary: "We design intuitive, conversion-focused experiences that feel premium and easy to use.",
    points: [
      "User flows and interface design",
      "Brand consistency and responsiveness",
      "Prototype validation before build"
    ],
    accent: "#7C3AED"
  },
  {
    number: "04",
    title: "Development",
    summary: "We build in structured sprints with clean code, performance focus, and consistent communication.",
    points: [
      "Frontend and backend implementation",
      "API and database integration",
      "Testing and quality review"
    ],
    accent: "#22C55E"
  },
  {
    number: "05",
    title: "Launch & Growth",
    summary: "We launch the product, monitor feedback, and help iterate for long-term business performance.",
    points: [
      "Final deployment and QA",
      "Performance optimization",
      "Ongoing improvements and support"
    ],
    accent: "#FB7185"
  }
];

const deliverables = [
  { icon: Search, title: "Discovery first", text: "We clarify what matters before design or code begins." },
  { icon: LayoutGrid, title: "Visual clarity", text: "Clean interfaces that improve trust and user experience." },
  { icon: MessageSquareText, title: "Fast feedback", text: "You stay involved through practical check-ins and revisions." },
  { icon: Rocket, title: "Launch support", text: "We help move from build to release without confusion." }
];

export default function ProcessPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#050505] text-white overflow-x-hidden">
      <SEO
        title="Our Process | DuoDeveloper"
        description="See how DuoDeveloper works from discovery to launch, delivering website and app projects with clarity, design, and technical execution."
      />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-[#04AAA5]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-[#FBB040]/10 blur-[120px]" />
      </div>

      <FloatingParticles />
      <Navbar isScrolled={isScrolled} />

      <main className="relative z-10 pt-32 pb-20 px-6">
        <section className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[10px] uppercase tracking-[0.2em] text-[#04AAA5] font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Our Process
            </span>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              A clear system for
              <span className="block bg-gradient-to-r from-[#04AAA5] via-white to-[#FBB040] bg-clip-text text-transparent italic">
                building digital products
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
              We keep the process simple, collaborative, and focused on outcomes—so your website or app moves from idea to launch with less confusion and better results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
            {deliverables.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="mb-5 w-12 h-12 rounded-xl bg-[#04AAA5]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#04AAA5]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="relative rounded-3xl border border-white/10 bg-[#0a0d0f]/80 p-6 md:p-8 shadow-[0_0_30px_rgba(4,170,165,0.06)]"
              >
                <div className="absolute left-6 top-6 hidden md:block w-px h-[calc(100%-3rem)] bg-white/10" />

                <div className="grid md:grid-cols-[120px_1fr_220px] gap-6 items-start">
                  <div className="flex md:block items-center gap-4">
                    <span
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-2xl font-black border"
                      style={{
                        background: `${step.accent}20`,
                        borderColor: `${step.accent}50`,
                        color: step.accent,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">{step.title}</h2>
                    <p className="text-gray-300 text-base leading-relaxed mb-5 max-w-2xl">{step.summary}</p>

                    <ul className="space-y-3">
                      {step.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#04AAA5]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:pt-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-3">Outcome</p>
                      <p className="text-white font-semibold text-lg">
                        {index === 0 && "Clear direction"}
                        {index === 1 && "Roadmap confidence"}
                        {index === 2 && "Better product experience"}
                        {index === 3 && "Reliable build"}
                        {index === 4 && "Smooth launch"}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 rounded-[2rem] border border-[#04AAA5]/20 bg-gradient-to-r from-[#04AAA5]/10 via-[#050505] to-[#FBB040]/10 p-8 md:p-12 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Need a digital product that actually works for your business?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              We help businesses turn ideas into websites, apps, and digital experiences that look sharp and perform with purpose.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-7 py-4 rounded-full font-bold uppercase tracking-[0.18em] text-xs transition-transform hover:scale-[1.02]"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
