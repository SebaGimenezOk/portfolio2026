import { personalInfo } from '../data/portfolioData.js';

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-3xl font-light uppercase tracking-tight text-gray-900 mb-2">Sobre Mí</h2>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">[ Perfil Profesional ]</span>
        </div>

        <div className="md:col-span-2 space-y-6 text-neutral-700 font-light text-lg md:text-xl leading-relaxed">
          {personalInfo.about.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}