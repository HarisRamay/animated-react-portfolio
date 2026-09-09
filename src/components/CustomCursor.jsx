import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e) => {
      gsap.to(cursor.current, { x: e.clientX, y: e.clientY, duration: .12, ease: "power2.out" });
      gsap.to(follower.current, { x: e.clientX, y: e.clientY, duration: .5, ease: "power3.out" });
    };

    const enter = () => gsap.to(follower.current, { scale: 1.8, opacity: .35, duration: .25 });
    const leave = () => gsap.to(follower.current, { scale: 1, opacity: .2, duration: .25 });

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursor} className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white md:block" />
      <div ref={follower} className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 opacity-20 md:block" />
    </>
  );
}