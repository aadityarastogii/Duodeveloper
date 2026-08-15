import { motion } from "framer-motion";
import { Code2, Layers3, Smartphone } from "lucide-react";

const capabilities = [
  { icon: Layers3, title: "Product thinking", text: "We align the experience with the people using it and the business behind it." },
  { icon: Code2, title: "Web development", text: "Fast, responsive websites that are clear to use and built to scale." },
  { icon: Smartphone, title: "App development", text: "Useful mobile experiences designed around the moments that matter." },
];

export default function ShowreelSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-black via-teal/[0.03] to-black relative">
      <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-12 overflow-hidden relative">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#04AAA5]/15 blur-3xl" />
        <div className="relative text-center mb-10 sm:mb-14">
          <p className="text-[#FBB040] font-bold tracking-[0.2em] text-xs uppercase mb-4">What we build</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">Digital experiences that <span className="text-[#04AAA5]">move ideas forward.</span></h2>
        </div>
        <div className="relative grid md:grid-cols-3 gap-4 sm:gap-6">
          {capabilities.map(({ icon: Icon, title, text }, index) => <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }} className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-7 text-left hover:border-[#04AAA5]/50 transition-colors">
            <Icon className="w-8 h-8 text-[#FBB040] mb-5" />
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{text}</p>
          </motion.article>)}
        </div>
      </div>
    </section>
  );
}
