import { motion } from "framer-motion";

const process = [
  ["01", "Discovery", "We understand your business, audience, and goals before a single screen is designed."],
  ["02", "Strategy", "We define the right scope, feature priorities, and launch direction for your product."],
  ["03", "Design", "We shape a clean, user-friendly experience that looks premium and feels easy to use."],
  ["04", "Build", "We develop the product in focused cycles with progress, testing, and feedback built in."],
  ["05", "Launch", "We ship the final product and support the next improvements as your business grows."],
];

export default function Process() {
  return (
    <section className="relative py-24 bg-black overflow-hidden" id="process">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-flex px-5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-xs text-[#04AAA5] font-bold uppercase tracking-[0.2em] mb-6">How we work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            A simple path from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04AAA5] to-[#10b981]">idea to launch</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {process.map(([step, title, text], index) => (
            <motion.article
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-[#060a0d]/80 p-6 hover:border-[#04AAA5]/50 transition-colors"
            >
              <span className="text-5xl font-black text-white/15">{step}</span>
              <div className="w-8 h-1 bg-[#FBB040] rounded-full my-5" />
              <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
