import { useState, useEffect } from "react";
import { projects } from "../data/portfolioData.js";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevenir scroll en background al abrir el modal
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section
      id="proyectos"
      className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-b border-neutral-200"
    >
      <div className="flex justify-between items-end mb-16 border-b border-neutral-200 pb-6">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight uppercase text-black">
          Trabajos <span className="text-neutral-400">Seleccionados</span>
        </h2>
        <span className="text-xs font-mono text-neutral-400">[ 01 — 06 ]</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between border-b border-neutral-200 pb-8 cursor-pointer"
            onClick={() =>
              project.screenshots && project.screenshots.length > 0
                ? setSelectedProject(project)
                : window.open(project.link, "_blank")
            }
          >
            <div>
              <div className="flex justify-between items-center font-mono text-xs text-neutral-400 mb-4">
                <span>0{idx + 1}</span>
                <span className="uppercase">
                  {project.tools.slice(0, 2).join(" / ")}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-normal text-black group-hover:text-neutral-600 transition-colors mb-3">
                {project.title}
              </h3>

              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black group-hover:text-neutral-500 transition-colors">
                {project.screenshots && project.screenshots.length > 0
                  ? "Ver Capturas & Detalles →"
                  : "Ver Proyecto →"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Showcase de Capturas */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white border border-neutral-300 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-10 relative text-neutral-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-neutral-500 hover:text-black text-xs font-mono tracking-wider border border-neutral-300 px-3 py-1.5 hover:border-black transition-all"
            >
              CERRAR [ESC]
            </button>

            {/* Cabecera del Modal */}
            <div className="mb-8 pr-16">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                {selectedProject.tools.join(" — ")}
              </span>
              <h3 className="text-3xl md:text-4xl font-light text-black mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-neutral-700 font-light text-base leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>
            </div>

            {/* Puntos destacados */}
            {selectedProject.highlights &&
              selectedProject.highlights.length > 0 && (
                <div className="mb-10 bg-neutral-100 border-l-2 border-black p-4">
                  <h4 className="text-xs font-mono uppercase text-neutral-500 mb-3 tracking-wider">
                    Aspectos clave:
                  </h4>
                  <ul className="space-y-1.5 text-sm text-neutral-700 font-light">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-neutral-400 mr-2">—</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Galería de Capturas WebP (Tamaño intermedio perfecto) */}
            {selectedProject.screenshots &&
              selectedProject.screenshots.length > 0 && (
                <div className="space-y-6 mb-10">
                  <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-widest border-b border-neutral-200 pb-2">
                    Capturas de Pantalla ({selectedProject.screenshots.length})
                  </h4>

                  {/* Grilla de 3 columnas para que tengan buen tamaño visual */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {selectedProject.screenshots.map((img, index) => (
                      <div key={index} className="space-y-2 group">
                        <div className="overflow-hidden border border-neutral-200 bg-neutral-100 p-2 flex items-center justify-center max-h-105">
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-auto object-contain grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <p className="text-[11px] font-mono text-neutral-400 text-center truncate">
                          // {img.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Footer del Modal */}
            <div className="pt-6 border-t border-neutral-200 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono text-neutral-600 bg-neutral-100 px-2.5 py-1 border border-neutral-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-mono tracking-wider text-white bg-black px-5 py-2.5 hover:bg-neutral-800 transition-colors font-medium"
                >
                  VER REPO / SITIO ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
