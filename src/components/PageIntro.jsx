import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function PageIntro({ eyebrow, title, description }) {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(".page-intro-item", {
      y: 45,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 pb-20 pt-36 md:pt-44">
      <p className="page-intro-item mb-5 text-sm uppercase tracking-[.3em] text-white/40">{eyebrow}</p>
      <h1 className="page-intro-item max-w-4xl text-5xl font-semibold leading-[.95] tracking-[-.05em] md:text-8xl">
        {title}
      </h1>
      <p className="page-intro-item mt-7 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
        {description}
      </p>
    </section>
  );
}