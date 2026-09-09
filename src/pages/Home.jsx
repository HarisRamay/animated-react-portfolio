import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "SwiftLogix",
    category: "Web App",
    description: "A courier management platform with delivery workflows and live tracking.",
    stack: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "TaskFlow",
    category: "Productivity",
    description: "A focused task management interface designed around speed and simplicity.",
    stack: ["React", "Tailwind", "GSAP"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  const root = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-small", { y: 25, opacity: 0, duration: .7 })
      .from(".hero-title-line", { y: 100, opacity: 0, duration: 1, stagger: .13 }, "-=.35")
      .from(".hero-copy", { y: 25, opacity: 0, duration: .7 }, "-=.45")
      .from(".hero-actions", { y: 20, opacity: 0, duration: .6 }, "-=.4")
      .from(".hero-orb", { scale: 0, opacity: 0, duration: 1.2, ease: "elastic.out(1,.5)" }, "-=.8");

    gsap.to(".hero-orb", {
      y: -25,
      x: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, { scope: root });

  return (
    <div ref={root}>
      <section className="grid-bg relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <div className="hero-orb absolute right-[5%] top-[25%] h-48 w-48 rounded-full bg-white/10 blur-3xl md:h-80 md:w-80" />

        <div className="mx-auto w-full max-w-6xl">
          <p className="hero-small mb-7 text-sm uppercase tracking-[.35em] text-white/40">
            Software Engineer & Frontend Developer
          </p>

          <h1 className="max-w-5xl text-6xl font-semibold leading-[.88] tracking-[-.07em] md:text-[9rem]">
            <span className="hero-title-line block">Building</span>
            <span className="hero-title-line block text-white/35">digital</span>
            <span className="hero-title-line block">experiences.</span>
          </h1>

          
          <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <p className="hero-copy max-w-xl text-base leading-7 text-white/50 md:text-lg">
              I create clean, structured and interactive web experiences with React,
              Tailwind CSS and modern animation.
            </p>

            <div className="hero-actions flex items-center gap-3">
              <Link to="/projects" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
                View work <ArrowUpRight className="ml-1 inline" size={16} />
              </Link>
              <Link to="/contact" className="rounded-full border border-white/15 px-6 py-3 text-sm transition hover:bg-white/10">
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-5 text-white/35">
            <ArrowDown className="animate-bounce" size={18} />
            <span className="text-xs uppercase tracking-[.25em]">Scroll to explore</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[.3em] text-white/35">Selected work</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Recent projects</h2>
          </div>
          <Link to="/projects" className="hidden text-sm text-white/45 hover:text-white md:block">
            All projects →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-xs uppercase tracking-[.3em] text-white/35">Capabilities</p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["01", "Frontend", "React, JavaScript, responsive interfaces and reusable components."],
              ["02", "Design", "Tailwind CSS, visual systems, accessibility and interaction design."],
              ["03", "Motion", "GSAP-powered page transitions, scroll reveals and micro-interactions."],
            ].map(([num, title, text]) => (
              <div key={num} className="border-t border-white/15 pt-5">
                <span className="text-xs text-white/30">{num}</span>
                <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/45">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="rounded-3xl border border-white/10 bg-white/[.035] p-8 md:p-14">
          <p className="text-xs uppercase tracking-[.3em] text-white/35">Let's connect</p>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-7xl">
            Turning ideas into useful interfaces.
          </h2>
          <div className="mt-10 flex gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 hover:bg-white hover:text-black"><Github /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 hover:bg-white hover:text-black"><Linkedin /></a>
          </div>
        </div>
      </section>
    </div>
  );
}