import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData.js';
import ContactModal from './ContactModal';

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="min-h-[85vh] flex flex-col justify-between px-6 md:px-16 pt-20 pb-12 max-w-7xl mx-auto border-b border-neutral-200">
        {/* Estado superior */}
        <div className="flex items-center justify-between text-xs tracking-widest uppercase text-neutral-500 font-mono">
          <span>[ 2026 Portfolio ]</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Disponible
          </span>
        </div>

        {/* Título y Rol */}
        <div className="my-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-mono text-neutral-500 tracking-widest uppercase mb-4"
          >
            {personalInfo.role}
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter leading-none text-gray-900 mb-8"
          >
            {personalInfo.name.split(' ')[0]} <br />
            <span className="font-bold text-neutral-400">{personalInfo.name.split(' ')[1]}</span>
          </motion.h1>

          <p className="max-w-xl text-neutral-600 text-l md:text-xl font-light leading-relaxed">
            {personalInfo.description}
          </p>
        </div>

        {/* Acciones e Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-neutral-200">
          <div className="flex gap-4">
            <a
              href="#proyectos"
              className="px-6 py-3 bg-black text-white text-sm uppercase tracking-wider font-medium hover:bg-neutral-800 transition-colors"
            >
              Proyectos
            </a>
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-6 py-3 border border-neutral-300 text-black text-sm uppercase tracking-wider font-medium hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm font-mono text-neutral-500">
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GH</a>
            <span>/</span>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LN</a>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
}