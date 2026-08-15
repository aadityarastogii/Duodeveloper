import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Filter, MousePointerClick, Users, ShoppingBag, ArrowDown, Target, TrendingUp, Zap, BarChart3, ArrowDownRight, ArrowUpRight, Globe, ShieldCheck } from "lucide-react";
import Footer from "../common-components/Footer";
import Navbar from "../common-components/Navbar";
import SEO from "../SEO Component/SEO";

// Fade-in animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function DigitalMarketing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing & Performance Growth",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Say It Social"
    },
    "description": "Full-funnel digital marketing services designed to capture high-intent audiences and drive measurable revenue growth."
  };

  return (
    <div ref={containerRef} className="min-h-screen relative bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#04AAA5]/30">
      <SEO
        title="Digital Marketing Services | Say It Social"
        description="Discover the What, Why, and Impact of full-funnel Digital Marketing. We transform raw engagement into measurable, scalable revenue."
        schemaMarkup={pageSchema}
      />

      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] rounded-full bg-[#04AAA5]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FBB040]/5 blur-[120px]" />
      </div>

      <Navbar isScrolled={isScrolled} />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 lg:pt-52 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ y: yParallax }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#04AAA5] font-bold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBB040] animate-pulse" />
              Service Spotlight
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Performance-Driven <br />
              <span className="bg-gradient-to-r from-[#04AAA5] via-white to-[#FBB040] bg-clip-text text-transparent italic">
                Digital Marketing
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              We don't just generate traffic; we engineer scalable growth ecosystems. Discover how our full-funnel approach transforms your digital presence into your most powerful sales engine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: THE WHAT */}
      <section className="relative py-24 px-6 border-t border-white/5 bg-white/[0.01] z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-[#04AAA5]">01.</span> What is it?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Digital marketing is the strategic deployment of digital channels—such as search engines, social media, email, and websites—to connect with prospective customers where they spend their time.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Unlike traditional advertising, it is a <strong>data-driven ecosystem</strong>. We build custom funnels that capture high-intent users at the top, nurture them through targeted content, and seamlessly convert them into loyal customers at the bottom.
              </p>
              <ul className="space-y-4">
                {['Search Engine Optimization (SEO)', 'Pay-Per-Click (PPC) Advertising', 'Social Media Management', 'Conversion Rate Optimization (CRO)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium tracking-wide text-gray-200">
                    <div className="w-6 h-6 rounded-full bg-[#04AAA5]/10 flex items-center justify-center text-[#04AAA5]">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
  initial={{ opacity: 0, x: 50 }} 
  whileInView={{ opacity: 1, x: 0 }} 
  viewport={{ once: true }}
  className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(4,170,165,0.15)] p-2 bg-black/50 backdrop-blur-md"
>
  {/* Inner Dashboard Mockup */}
  <div className="relative bg-[#0a0a0a] rounded-2xl p-6 md:p-8 overflow-hidden border border-white/5 h-full min-h-[360px]">
    
    {/* Background Decorative Gradients */}
    <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#FBB040]/10 rounded-full blur-[80px] pointer-events-none" />
    <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#04AAA5]/10 rounded-full blur-[80px] pointer-events-none" />

    {/* Header Section */}
    <div className="flex items-center justify-between mb-8 relative z-10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          <Filter className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="text-white font-bold text-lg leading-tight">Conversion Funnel</h4>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Live Ecosystem</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#04AAA5] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#04AAA5]"></span>
        </span>
        <span className="text-gray-400 text-xs font-medium tracking-wide">Capturing</span>
      </div>
    </div>

    {/* Animated Funnel Stages */}
    <div className="flex flex-col items-center gap-4 relative z-10 w-full">
      
      {/* Stage 1: Awareness (Top) */}
      <motion.div 
        initial={{ width: "60%", opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between px-4 w-full relative group overflow-hidden"
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-white/20 group-hover:bg-white transition-colors" />
        <div className="flex items-center gap-3">
          <MousePointerClick className="w-4 h-4 text-gray-300" />
          <span className="text-sm font-bold text-white">Awareness</span>
        </div>
        <div className="text-xs font-mono text-gray-400">SEO / PPC</div>
      </motion.div>

      {/* Down Arrow / Flow Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="text-white/20"
      >
        <ArrowDown className="w-4 h-4" />
      </motion.div>

      {/* Stage 2: Consideration (Middle) */}
      <motion.div 
        initial={{ width: "60%", opacity: 0 }}
        whileInView={{ width: "85%", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="h-14 bg-[#FBB040]/10 border border-[#FBB040]/30 rounded-xl flex items-center justify-between px-4 relative group overflow-hidden shadow-[0_0_15px_rgba(251,176,64,0.1)]"
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-[#FBB040]/50 group-hover:bg-[#FBB040] transition-colors" />
        <div className="flex items-center gap-3">
          <Users className="w-4 h-4 text-[#FBB040]" />
          <span className="text-sm font-bold text-white">Nurture</span>
        </div>
        <div className="text-xs font-mono text-[#FBB040]/80">Social / Email</div>
      </motion.div>

      {/* Down Arrow / Flow Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.0 }}
        className="text-[#04AAA5]/30"
      >
        <ArrowDown className="w-4 h-4" />
      </motion.div>

      {/* Stage 3: Conversion (Bottom) */}
      <motion.div 
        initial={{ width: "60%", opacity: 0 }}
        whileInView={{ width: "70%", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="h-14 bg-[#04AAA5]/10 border border-[#04AAA5]/40 rounded-xl flex items-center justify-between px-4 relative group overflow-hidden shadow-[0_0_20px_rgba(4,170,165,0.2)]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#04AAA5]/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        <div className="absolute left-0 top-0 h-full w-1 bg-[#04AAA5] shadow-[0_0_10px_#04AAA5]" />
        <div className="flex items-center gap-3">
          <ShoppingBag className="w-4 h-4 text-[#04AAA5]" />
          <span className="text-sm font-bold text-white">Conversion</span>
        </div>
        <div className="text-xs font-mono font-bold text-[#04AAA5]">CRO / Sales</div>
      </motion.div>

    </div>

    {/* Floating Data Nodes simulating ecosystem activity */}
    <motion.div 
      animate={{ y: [0, -40], x: [0, -20], opacity: [0, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
      className="absolute bottom-20 right-16 w-2 h-2 rounded-full bg-[#04AAA5] shadow-[0_0_8px_#04AAA5] z-0"
    />
    <motion.div 
      animate={{ y: [0, 40], x: [0, 20], opacity: [0, 1, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2.5 }}
      className="absolute top-24 left-16 w-2 h-2 rounded-full bg-[#FBB040] shadow-[0_0_8px_#FBB040] z-0"
    />

  </div>
</motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE WHY */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-[#FBB040]">02.</span> Why Do You Need It?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              In a digital-first world, visibility is currency. Here is why partnering with an agency for digital marketing is non-negotiable for modern businesses.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Target, title: "Hyper-Targeting", desc: "Stop shouting into the void. We target demographics, behaviors, and precise search intents." },
              { icon: BarChart3, title: "Total Measurability", desc: "Every click, impression, and conversion is tracked. You know exactly where your ROI comes from." },
              { icon: Globe, title: "Global Scalability", desc: "Break geographical borders. Scale your campaigns globally or hyper-locally with the click of a button." },
              { icon: Zap, title: "Cost Efficiency", desc: "Optimize spend in real-time. We reallocate budgets to the highest-performing channels instantly." }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10, borderColor: "rgba(4, 170, 165, 0.4)" }}
                  className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#04AAA5]/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#04AAA5]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE EFFECT */}
      <section className="relative py-24 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-[#04AAA5]/5 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
  initial={{ opacity: 0, x: -50 }} 
  whileInView={{ opacity: 1, x: 0 }} 
  viewport={{ once: true }}
  className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-[#FBB040]/20 shadow-[0_0_50px_rgba(251,176,64,0.1)] p-2 bg-black/50 backdrop-blur-md"
>
  {/* Inner Dashboard Mockup */}
  <div className="relative bg-[#0a0a0a] rounded-2xl p-6 md:p-8 overflow-hidden border border-white/5 h-full">
    
    {/* Background Decorative Gradients */}
    <div className="absolute top-0 right-0 w-48 h-48 bg-[#FBB040]/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#04AAA5]/10 rounded-full blur-3xl pointer-events-none" />

    {/* Header Section */}
    <div className="flex items-start justify-between mb-8 relative z-10">
      <div>
        <h4 className="text-white font-bold text-xl flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-[#FBB040]" />
          Revenue Analytics
        </h4>
        <p className="text-gray-400 text-xs mt-1">Compound Growth (YTD)</p>
      </div>
      <div className="flex items-center gap-1 bg-[#FBB040]/10 text-[#FBB040] px-3 py-1.5 rounded-full text-[10px] font-bold border border-[#FBB040]/20 uppercase tracking-widest">
        Live Data
      </div>
    </div>

    {/* Animated SVG Area Chart */}
    <div className="relative h-40 w-full mb-8 z-10">
      {/* Chart Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between border-l border-b border-white/10 pb-1 pl-1">
        <div className="w-full border-t border-white/5 h-px dashed" />
        <div className="w-full border-t border-white/5 h-px dashed" />
        <div className="w-full border-t border-white/5 h-px dashed" />
      </div>

      <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
        <defs>
          <linearGradient id="revLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#04AAA5" />
            <stop offset="100%" stopColor="#FBB040" />
          </linearGradient>
          <linearGradient id="revAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBB040" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#04AAA5" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated Fill Area */}
        <motion.path
          d="M0 50 L0 45 Q 25 45, 45 25 T 100 5 L 100 50 Z"
          fill="url(#revAreaGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Animated Line */}
        <motion.path
          d="M0 45 Q 25 45, 45 25 T 100 5"
          fill="none"
          stroke="url(#revLineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Animated End Dots with Pulse effect */}
        <motion.circle
          cx="100"
          cy="5"
          r="3"
          fill="#FBB040"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="drop-shadow-[0_0_10px_rgba(251,176,64,0.8)]"
        />
        <motion.circle
          cx="100"
          cy="5"
          r="6"
          fill="none"
          stroke="#FBB040"
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        />
      </svg>
    </div>

    {/* Bottom Metric Cards (CAC and LTV to perfectly match the paragraph copy) */}
    <div className="grid grid-cols-2 gap-4 relative z-10">
      
      {/* CAC Card (Showing Decrease) */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#04AAA5]/30 transition-all cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">Avg. CAC</span>
          <div className="flex items-center gap-1 text-[#04AAA5] bg-[#04AAA5]/10 px-2 py-0.5 rounded text-[10px] font-bold">
            <ArrowDownRight className="w-3 h-3" /> 42%
          </div>
        </div>
        <div className="text-2xl font-bold text-white mb-1">$24.50</div>
        <div className="text-gray-500 text-[9px] uppercase tracking-widest">Cost Per Acquisition</div>
      </motion.div>
      
      {/* LTV Card (Showing Increase) */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#FBB040]/30 transition-all cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">Client LTV</span>
          <div className="flex items-center gap-1 text-[#FBB040] bg-[#FBB040]/10 px-2 py-0.5 rounded text-[10px] font-bold">
            <ArrowUpRight className="w-3 h-3" /> 3x
          </div>
        </div>
        <div className="text-2xl font-bold text-white mb-1">$4,850</div>
        <div className="text-gray-500 text-[9px] uppercase tracking-widest">Lifetime Value</div>
      </motion.div>

    </div>

  </div>
</motion.div>

            <motion.div className="order-1 lg:order-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">03.</span> The Effect
              </h2>
              <p className="text-[#04AAA5] text-xl font-semibold mb-6">
                Predictable Revenue & Market Dominance.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                The ultimate effect of a properly executed digital marketing strategy is <strong>compound growth</strong>. By continuously A/B testing, analyzing user data, and refining creative assets, we lower your Customer Acquisition Cost (CAC) while increasing the Lifetime Value (LTV) of your clients.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-2 border-[#04AAA5] pl-4">
                  <div className="text-3xl font-bold text-white mb-1">3x - 5x</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Average ROI Increase</div>
                </div>
                <div className="border-l-2 border-[#FBB040] pl-4">
                  <div className="text-3xl font-bold text-white mb-1">200%+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Traffic Growth</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 px-6 z-10 flex justify-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl"
        >
            <h2 className="text-4xl font-bold mb-6">Ready to see these effects?</h2>
            <p className="text-gray-400 mb-10">Stop leaving money on the table. Let our experts audit your current strategy and build a custom growth roadmap.</p>
            <motion.a
                href="#contact"
                whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(4, 170, 165, 0.4)",
                backgroundColor: "#04AAA5",
                color: "#000"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-black font-black uppercase tracking-widest text-sm px-12 py-5 rounded-full transition-all duration-300"
            >
                Launch Your Campaign
            </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}