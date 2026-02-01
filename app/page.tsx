'use client';

import { motion } from 'framer-motion';
import CsharpIcon from '@/components/icons/CsharpIcon';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUnity,
  FaDownload,
  FaRocket,
} from 'react-icons/fa';
import {
  SiDotnet,
  SiHtml5,
  SiCss3,
  SiCanva,
  SiKrita,
} from 'react-icons/si';
import Image from 'next/image';
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern';

export default function Home() {
  return (
    <div className="relative min-h-screen text-zinc-100 antialiased font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      {/* Interactive grid background */}
      <InteractiveGridPattern
        className="fixed inset-0 z-0"
        cellSize={62}
        glowColor="rgba(234, 179, 8, 0.28)"
        borderColor="rgba(75, 85, 99, 0.22)"
        proximity={160}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-zinc-950/68 z-0 pointer-events-none" />

      {/* Main content wrapper */}
      <div className="relative z-10">
        {/* FIXED NAVBAR */}
        <nav className="fixed top-0 w-full bg-zinc-950/92 backdrop-blur-xl border-b border-zinc-800/60 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex justify-between items-center">
            <div className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide uppercase">
              <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="hover:text-yellow-400 transition-colors duration-300">
                Projects
              </a>
              <a href="#skills" className="hover:text-yellow-400 transition-colors duration-300">
                Skills
              </a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* ─── NEW HERO SECTION ─── */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 md:pt-0">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-transparent to-zinc-950/60 pointer-events-none" />
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-600/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative z-10 max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, type: "spring" }}
              className="mb-8"
            >
              <span className="inline-block px-5 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium tracking-wider uppercase">
                Game Developer • Graphic Artist
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6">
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                Lenard Gaspi
              </span>
            </h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="text-xl md:text-3xl text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Crafting immersive worlds in <span className="text-yellow-400 font-medium">Unity</span> • 
              Designing bold visuals • Turning ideas into playable experiences
            </motion.p>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                className="group bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 shadow-xl shadow-yellow-900/30 flex items-center gap-3"
              >
                <FaRocket className="group-hover:rotate-12 transition-transform" />
                Explore My Games
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="group border-2 border-yellow-500/60 hover:border-yellow-400 text-yellow-300 hover:text-yellow-200 font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
              >
                <FaEnvelope className="group-hover:scale-110 transition-transform" />
                Let’s Collaborate
              </motion.a>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1.2 }}
              className="mt-20 text-zinc-500 text-sm tracking-widest uppercase flex flex-col items-center gap-2"
            >
              <span>Scroll to discover</span>
              <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
                <div className="w-1.5 h-3 bg-yellow-500/70 rounded-full animate-bounce" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ─── ORIGINAL ABOUT SECTION ─── */}
        <section id="about" className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-yellow-500/6 blur-[120px] rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-yellow-400 font-mono tracking-widest text-sm uppercase"
                >
                  Available for Hire & Collaboration
                </motion.span>

                <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-white">
                  Lenard Gaspi<span className="text-yellow-500">.</span>
                </h1>

                <h2 className="text-xl md:text-2xl font-medium text-zinc-400 tracking-tight italic">
                  Game Developer & Graphic Designer
                </h2>
              </div>

              <div className="max-w-2xl space-y-6 text-zinc-300 leading-relaxed text-lg border-l-2 border-zinc-800/70 pl-6">
                <p>
                  Bridging the intersection of{' '}
                  <span className="text-yellow-400 font-medium">robust systems architecture</span> and{' '}
                  <span className="text-yellow-400 font-medium">immersive user experience</span>. I deliver
                  end-to-end production solutions for cross-platform titles, focusing on{' '}
                  <span className="text-yellow-400 font-medium">performant engineering</span> and refined
                  gameplay aesthetics.
                </p>
                <p>
                  My goal is to create products that are as{' '}
                  <span className="text-yellow-300 font-medium">scalable</span> as they are{' '}
                  <span className="text-yellow-300 font-medium">engaging</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <motion.a
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#projects"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-yellow-900/20"
                >
                  Explore Projects
                </motion.a>

                <motion.a
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/Lenard_CV.pdf"
                  download="Lenard_Gaspi_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-zinc-700 hover:border-yellow-500/60 bg-zinc-900/70 text-zinc-200 py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 hover:shadow-yellow-900/10"
                >
                  <FaDownload className="group-hover:text-yellow-400 transition-colors" />
                  Download CV
                </motion.a>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 border border-yellow-500/20 rounded-[2.5rem] group-hover:border-yellow-500/50 transition-colors duration-500" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-500/10 blur-3xl -z-10" />

                <motion.div
                  className="relative aspect-square rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-950"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="/images/Lenard.png"
                    alt="Lenard Gaspi - Game Developer & Graphic Designer"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── PROJECTS SECTION ─── */}
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm uppercase tracking-[0.3em] text-yellow-500/80 font-medium mb-3">
                Portfolio
              </h2>
              <h3 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Project <span className="text-zinc-500">Work</span>
              </h3>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-md text-zinc-400 text-lg leading-relaxed"
            >
              A collection of technical challenges, gameplay systems, and digital experiences crafted with precision.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-zinc-900/40 border border-zinc-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-zinc-900/60 hover:border-zinc-700/50"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src="/projects/project-1.jpg"
                  alt="Jungle Jumper"
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-yellow-500 transition-colors">
                    Jungle Jumper
                  </h3>
                  <svg className="w-5 h-5 text-zinc-500 group-hover:text-yellow-500 transition-transform group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-8 line-clamp-2 text-sm">
                  High-performance multiplayer framework built for real-time physics synchronization and low-latency input handling.
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {['Unity', 'C#', 'Multiplayer'].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 bg-zinc-800/30 border border-zinc-700/30 px-3 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative flex flex-col bg-zinc-900/40 border border-zinc-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-zinc-900/60 hover:border-zinc-700/50"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src="/projects/project-2.jpg"
                  alt="Neon Drift"
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-yellow-500 transition-colors">
                    Neon Drift
                  </h3>
                  <svg className="w-5 h-5 text-zinc-500 group-hover:text-yellow-500 transition-transform group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-8 line-clamp-2 text-sm">
                  Stylized arcade racing experience with dynamic track generation, advanced shader effects, and satisfying drift mechanics.
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {['Unity', 'Shader Graph', 'C#', 'Procedural'].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 bg-zinc-800/30 border border-zinc-700/30 px-3 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative flex flex-col bg-zinc-900/40 border border-zinc-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-zinc-900/60 hover:border-zinc-700/50"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src="/projects/project-3.jpg"
                  alt="Echo Protocol"
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-yellow-500 transition-colors">
                    Echo Protocol
                  </h3>
                  <svg className="w-5 h-5 text-zinc-500 group-hover:text-yellow-500 transition-transform group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-8 line-clamp-2 text-sm">
                  Stealth-action prototype with modular level design, AI behavior trees, sound-based detection, and dynamic lighting system.
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {['Unity', 'C#', 'AI', 'Level Design'].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 bg-zinc-800/30 border border-zinc-700/30 px-3 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── SKILLS SECTION (FIXED COLORS) ─── */}
        <section id="skills" className="py-32 px-6 bg-zinc-950/40 border-t border-b border-zinc-800/60 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-center mb-20 tracking-tight bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Tech Stack & Tools
            </h2>

            <div className="relative flex overflow-hidden">
              <motion.div
                animate={{ x: [0, -1680] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 18,
                    ease: "linear",
                  },
                }}
                className="flex flex-nowrap gap-6"
              >
                {[...Array(3)].map((_, outerIndex) => (
                  <div key={outerIndex} className="flex gap-6">
                    {[
                      { icon: FaUnity,     label: 'Unity',   colorClass: 'text-yellow-400' },
                      { icon: CsharpIcon,  label: 'C#',      colorClass: 'text-purple-400' },
                      { icon: SiHtml5,     label: 'HTML',    colorClass: 'text-orange-500' },
                      { icon: SiCss3,      label: 'CSS',     colorClass: 'text-blue-400' },
                      { icon: SiCanva,     label: 'Canva',   colorClass: 'text-sky-400' },
                      { icon: SiKrita,     label: 'Krita',   colorClass: 'text-purple-500' },
                    ].map((skill, i) => (
                      <div
                        key={i}
                        className="group w-64 flex-shrink-0 bg-zinc-900/80 border border-zinc-800/70 rounded-2xl p-6 text-center hover:border-yellow-700/60 hover:bg-zinc-900/95 transition-all duration-300 backdrop-blur-sm"
                      >
                        <skill.icon
                          className={`mx-auto mb-4 ${skill.colorClass} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                          size={44}
                        />
                        <p className="font-medium text-base whitespace-nowrap">{skill.label}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>

              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
            </div>
          </div>
        </section>

        {/* ─── CONTACT SECTION ─── */}
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
              Open for full-time opportunities, freelance contracts, collaborations, or exciting game
              ideas. Drop me a line.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <motion.a
                whileHover={{ scale: 1.05, y: -4 }}
                href="mailto:your.email@domain.com"
                className="flex items-center gap-5 px-10 py-6 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-yellow-700/60 hover:bg-zinc-900/95 transition-all duration-300 group shadow-lg shadow-black/30 backdrop-blur-sm"
              >
                <FaEnvelope
                  size={26}
                  className="text-yellow-400 group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold text-lg">your.email@domain.com</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -4 }}
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="flex items-center gap-5 px-10 py-6 bg-zinc-900/80 border border-zinc-800 rounded-2xl hover:border-yellow-700/60 hover:bg-zinc-900/95 transition-all duration-300 group shadow-lg shadow-black/30 backdrop-blur-sm"
              >
                <FaLinkedin
                  size={26}
                  className="text-yellow-400 group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold text-lg">LinkedIn</span>
              </motion.a>
            </div>

            <p className="text-zinc-600 text-sm">
              © {new Date().getFullYear()} Lenard Gaspi. Crafted with focus & passion.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}