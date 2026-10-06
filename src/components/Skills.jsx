import { skillCategories } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-b border-neutral-200">
      <div className="flex justify-between items-end mb-16 border-b border-neutral-200 pb-6">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight uppercase text-black">
          Stack <span className="text-neutral-400">& Tecnologías</span>
        </h2>
        <span className="text-xs font-mono text-neutral-400">[ CAPACIDADES ]</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="text-xs font-mono uppercase text-neutral-500 tracking-widest border-b border-neutral-200 pb-2">
              {cat.category}
            </h3>
            <ul className="space-y-3">
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx} className="text-neutral-800 font-light text-base hover:text-black transition-colors flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}