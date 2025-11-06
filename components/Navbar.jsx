import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
export default function Navbar({social}) {
  const toggle = () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    const next = cur === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };
  return (
    <header className="w-full bg-white/60 backdrop-blur sticky top-0 z-40 border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-lg font-bold">Dilip&nbsp;Rajbhar</div>
        <nav className="flex items-center gap-4">
          <a href="#projects" className="text-sm">Projects</a>
          <a href="#experience" className="text-sm">Experience</a>
          <a href="#contact" className="text-sm">Contact</a>
          <a href={social.github} target="_blank" className="text-sm">GitHub</a>
          <a href={social.linkedin} target="_blank" className="text-sm">LinkedIn</a>
          <button aria-label="toggle theme" onClick={toggle} className="p-2 rounded">
            <Sun size={16}/>
          </button>
        </nav>
      </div>
    </header>
  );
}
