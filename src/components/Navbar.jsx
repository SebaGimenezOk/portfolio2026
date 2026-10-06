export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center text-xs font-mono tracking-widest uppercase">
        <a href="#" className="font-bold text-black hover:opacity-70 transition-opacity">
          SG / 2026
        </a>
        <nav className="flex gap-6 text-neutral-500">
          <a href="#proyectos" className="hover:text-black transition-colors">Trabajos</a>
          <a href="#skills" className="hover:text-black transition-colors">Stack</a>
          <a href="#sobre-mi" className="hover:text-black transition-colors">Sobre mí</a>
        </nav>
      </div>
    </header>
  );
}