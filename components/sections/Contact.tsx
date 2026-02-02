'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}
      >
        <h2 className="text-5xl lg:text-6xl font-extrabold mb-10 tracking-tight bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          Let’s Build Something Great
        </h2>

        <p className="text-xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Open for full-time opportunities, freelance contracts, collaborations, or exciting game ideas. Drop me a line.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <motion.a
            whileHover={{ scale: 1.05, y: -4 }}
            href="mailto:your.email@domain.com"
            className="flex items-center gap-5 px-10 py-6 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-yellow-700/60 hover:bg-zinc-900/95 transition-all duration-300 group shadow-lg shadow-black/30 backdrop-blur-sm"
          >
            <FaEnvelope size={26} className="text-yellow-400 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-lg">your.email@domain.com</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -4 }}
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="flex items-center gap-5 px-10 py-6 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-yellow-700/60 hover:bg-zinc-900/95 transition-all duration-300 group shadow-lg shadow-black/30 backdrop-blur-sm"
          >
            <FaLinkedin size={26} className="text-yellow-400 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-lg">LinkedIn</span>
          </motion.a>
        </div>

        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Lenard Gaspi. Crafted with focus & passion.
        </p>
      </motion.div>
    </section>
  );
}