import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";

const stats = [
  { value: 2, label: "Core services", color: "text-[#04AAA5]" },
  { value: 1, label: "Dedicated team", color: "text-[#FBB040]" },
  { value: 0, label: "Template shortcuts", color: "text-[#04AAA5]" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 md:pt-24">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#04AAA5]/30 rounded-full blur-[90px] mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#FBB040]/20 rounded-full blur-[90px] mix-blend-screen" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <motion.div className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto text-center" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-6 sm:mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#FBB040] animate-pulse" />
          <span className="text-xs sm:text-sm text-gray-400 font-medium tracking-wide">Duodeveloper · Digital product studio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white font-display">
          Websites and apps<br />
          <span className="text-[#04aaa5] italic">built to perform.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          We design and develop fast, thoughtful digital products that help ambitious businesses turn ideas into experiences people want to use.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 px-4">
          <a href="/contact" className="group relative w-full sm:w-auto px-7 py-4 border-2 border-white/20 text-white font-bold rounded-lg transition-all text-center overflow-hidden hover:border-[#FBB040] hover:shadow-[0_0_20px_rgba(251,175,64,0.2)]"><span className="relative z-10">Start a project</span></a>
          <a href="#process" className="group relative w-full sm:w-auto px-7 py-4 border-2 border-white/20 text-white font-bold rounded-lg transition-all text-center overflow-hidden hover:border-[#04AAA5] hover:shadow-[0_0_20px_rgba(4,170,165,0.2)]"><span className="relative z-10">How we work</span></a>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 px-4">
          {stats.map((stat, index) => <div key={stat.label} className="flex items-center gap-6 md:gap-12">
            <div className="text-center"><div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-1`}><AnimatedCounter value={stat.value} colorClass={stat.color} /></div><div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div></div>
            {index < stats.length - 1 && <div className="hidden sm:block w-px h-10 bg-white/20" />}
          </div>)}
        </div>
      </motion.div>
    </section>
  );
}
