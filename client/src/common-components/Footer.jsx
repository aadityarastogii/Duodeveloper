import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div className="flex flex-col sm:flex-row items-center justify-between gap-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center sm:text-left"><Logo /><p className="text-gray-500 text-sm mt-3">Web development and app development for ambitious businesses.</p></div>
          <div className="flex items-center gap-6 text-sm font-semibold text-gray-300"><Link to="/" className="hover:text-[#FBB040]">Home</Link><Link to="/services" className="hover:text-[#FBB040]">Services</Link><Link to="/contact" className="hover:text-[#FBB040]">Contact</Link></div>
        </motion.div>
        <div className="animated-divider my-8" />
        <p className="text-center text-gray-500 text-xs sm:text-sm">© {new Date().getFullYear()} Duodeveloper. All rights reserved.</p>
      </div>
    </footer>
  );
}
