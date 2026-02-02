'use client';

import { motion } from 'framer-motion';
import CsharpIcon from '@/components/icons/CsharpIcon';
import { FaUnity } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiCanva, SiKrita } from 'react-icons/si';

const skills = [
  { icon: FaUnity, label: 'Unity', colorClass: 'text-yellow-400' },
  { icon: CsharpIcon, label: 'C#', colorClass: 'text-purple-400' },
  { icon: SiHtml5, label: 'HTML', colorClass: 'text-orange-500' },
  { icon: SiCss3, label: 'CSS', colorClass: 'text-blue-400' },
  { icon: SiCanva, label: 'Canva', colorClass: 'text-sky-400' },
  { icon: SiKrita, label: 'Krita', colorClass: 'text-purple-500' },
];

export default function Skills() {
  return (
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
                repeatType: 'loop',
                duration: 18,
                ease: 'linear',
              },
            }}
            className="flex flex-nowrap gap-6"
          >
            {[...Array(3)].map((_, outerIndex) => (
              <div key={outerIndex} className="flex gap-6">
                {skills.map((skill, i) => (
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
  );
}