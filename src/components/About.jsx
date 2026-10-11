import { personalInfo } from '../data/portfolioData.js';

export default function About() {
  return (
   <section id="sobre-mi" className="py-24 border-t border-neutral-200">
  <div className="max-w-7xl mx-auto px-6 md:px-16">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
      {/* Etiqueta / Header de sección */}
      <div className="md:col-span-4">
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">03 / Sobre Mí</span>
        <h2 className="text-2xl md:text-3xl font-light text-black mt-4 tracking-tight">
          Arquitectura visual, código limpio y mentalidad analítica.
        </h2>
      </div>

      {/* Copy narrativo */}
      <div className="md:col-span-8 space-y-6 text-neutral-700 font-sans text-base leading-relaxed md:text-lg">
        {personalInfo.aboutParagraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}