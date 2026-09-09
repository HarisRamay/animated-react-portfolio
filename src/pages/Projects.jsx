import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import PageIntro from "../components/PageIntro";
import ProjectCard from "../components/ProjectCard";

import { projects } from "../data.js";

export default function Projects() {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(".project-item", {
      y: 50,
      opacity: 0,
      duration: .8,
      stagger: .12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 80%",
      },
    });
  }, { scope: ref });

  return (
    <div ref={ref}>
      <PageIntro
        eyebrow="Selected work"
        title={<>A few things I've <span className="text-white/30">built.</span></>}
        description="Use these cards as placeholders for your own projects. Replace the text, links and images with your actual work before publishing."
      />

      <section className="projects-grid mx-auto grid max-w-6xl gap-6 px-6 pb-32 md:grid-cols-2">
        {projects.map((project, index) => (
          <div className="project-item" key={project.title}>
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </section>
    </div>
  );
}