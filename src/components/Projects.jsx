import { projects } from '../data/portfolioData.js';

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-b border-neutral-200">
      <div className="flex justify-between items-end mb-16 border-b border-neutral-200 pb-6">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight uppercase text-black">
          Trabajos <span className="text-neutral-400">Seleccionados</span>
        </h2>
        <span className="text-xs font-mono text-neutral-400">[ 01 — 06 ]</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {projects.map((project, idx) => (
          <div key={project.id} className="group flex flex-col justify-between border-b border-neutral-200 pb-8">
            <div>
              <div className="flex justify-between items-center font-mono text-xs text-neutral-400 mb-4">
                <span>0{idx + 1}</span>
                <span className="uppercase">{project.tools.slice(0, 2).join(' / ')}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-normal text-black group-hover:text-neutral-600 transition-colors mb-3">
                {project.title}
              </h3>

              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black hover:text-neutral-500 transition-colors"
            >
              Ver Proyecto &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}