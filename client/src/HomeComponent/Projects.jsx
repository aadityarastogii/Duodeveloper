import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "OneCart",
    category: "E-commerce · Shopping",
    description:
      "An e-commerce platform with product discovery, a customer storefront, admin panel, integrated payments, and an AI chatbot for shopping support.",
    url: "https://onecart-frontend-gray.vercel.app/login",
    secondaryUrl: "https://onecart-admin-cyan.vercel.app/",
    secondaryLabel: "Admin panel",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Customer shopping online",
    accent: "#79B8F2",
  },
  {
    number: "02",
    name: "Airbnb",
    category: "Hospitality · Hotel management",
    description:
      "A hotel booking platform with room listings, guest reviews, username-and-password authentication, real-location maps, and Razorpay payments.",
    url: "https://airbnb-pvvx.onrender.com/listings",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Hotel pool and resort at dusk",
    accent: "#D9A86C",
  },
  {
    number: "03",
    name: "Indraprastha",
    category: "Education · EdTech",
    description:
      "A NEET learning platform offering test series, mock tests, video streaming, a doubt support system, and practice sets.",
    url: "https://indraprasthaneetacademy.com/",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Students learning together in a classroom",
    accent: "#79B8F2",
  },
  {
    number: "04",
    name: "Fresh Curator",
    category: "Grocery · Delivery platform",
    description:
      "A grocery shopping platform with product discovery, role-based authentication, checkout and order management, payment integration, location and delivery tracking, and a delivery dashboard with assignments.",
    url: "https://fresh-curator-woad.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Fresh organic vegetables at a market",
    accent: "#89B88A",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#04AAA5]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#FBB040]">
              Selected work
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Projects built to make an impact.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/55 sm:text-base">
            A look at digital experiences across e-commerce, hospitality,
            education, and grocery delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/2.5 transition-colors duration-300 hover:border-white/20"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit the ${project.name} live website`}
                className="relative block aspect-[1.55/1] overflow-hidden bg-white/5"
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/5 to-black/10" />
                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                  {project.category}
                </span>
                <span className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={19} />
                </span>
              </a>

              <div className="p-5 sm:p-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {project.name}
                  </h3>
                  <span className="text-xs font-semibold tracking-[0.16em] text-white/35">
                    {project.number}
                  </span>
                </div>
                <p className="min-h-21 text-sm leading-6 text-white/55">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                  style={{ color: project.accent }}
                >
                  Explore live project
                  <ExternalLink size={15} />
                </a>
                {project.secondaryUrl && (
                  <a
                    href={project.secondaryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white sm:ml-5"
                  >
                    {project.secondaryLabel}
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}