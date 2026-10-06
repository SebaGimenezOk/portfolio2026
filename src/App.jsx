import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white">
       <Navbar/>
       <Hero />
      <Projects />
      <Skills />
      <About />
      <footer className="py-12 border-t border-neutral-200 text-center font-mono text-xs text-neutral-400 uppercase tracking-widest">
        <p>© 2026 Sebastian Gimenez — Buenos Aires, Argentina</p>
      </footer>
    </main>
  );
}