import { motion } from "framer-motion";
import { Code2, Gauge, MessageSquare, Puzzle } from "lucide-react";

const reasons = [
  { icon: Puzzle, title: "One focused partner", desc: "Strategy, design, and development stay connected from the first call to launch." },
  { icon: Code2, title: "Built for the real world", desc: "We choose practical technology and write maintainable code your business can grow with." },
  { icon: Gauge, title: "Performance matters", desc: "Every experience is designed to be fast, responsive, and easy to use across devices." },
  { icon: MessageSquare, title: "Straightforward collaboration", desc: "Clear communication, shared progress, and decisions grounded in your goals." },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden" id="why-us">
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="max-w-7xl mx-auto relative grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-xs text-[#04AAA5] font-bold uppercase tracking-[0.2em] mb-6">Why Duodeveloper</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8 leading-tight">Less handoff.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04AAA5] to-[#10b981]">More momentum.</span></h2>
          <p className="text-gray-400 text-lg leading-loose mb-9">We are a focused web and app development partner for teams that want a product built with care—not a one-size-fits-all template.</p>
          <a href="/contact" className="inline-flex px-8 py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:border-[#FBB040] transition-colors">Talk about your project</a>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map(({ icon: Icon, title, desc }, index) => <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#04AAA5]/50 transition-colors"><Icon className="w-7 h-7 text-[#FBB040] mb-5" /><h3 className="font-bold text-lg mb-2">{title}</h3><p className="text-gray-400 text-sm leading-relaxed">{desc}</p></motion.article>)}
        </div>
      </div>
    </section>
  );
}
