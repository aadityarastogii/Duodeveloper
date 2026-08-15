import { Link } from "react-router-dom";

export default function Service() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(20,184,166,0.1) 0%, rgba(6,10,13,0) 60%)", border: "1px solid rgba(20,184,166,0.2)" }}>
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="section-title text-4xl md:text-6xl text-white mb-4">Your next digital product,<br /><span className="teal-gradient-text">built with purpose.</span></h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">From a conversion-focused website to a polished mobile app, Duodeveloper brings strategy, design, and development together in one focused team.</p>
            <Link to="/services" className="btn-primary text-base px-10 py-4 inline-block">Explore our services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
