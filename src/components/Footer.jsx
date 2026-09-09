import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm text-white/40">Have a project in mind?</p>
          <Link to="/contact" className="group text-3xl font-semibold tracking-tight">
            Let's build something
            <ArrowUpRight className="ml-2 inline transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 p-3 hover:bg-white hover:text-black">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 p-3 hover:bg-white hover:text-black">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/30">
        © {new Date().getFullYear()} Haris. Built with React, Tailwind & GSAP.
      </div>
    </footer>
  );
}