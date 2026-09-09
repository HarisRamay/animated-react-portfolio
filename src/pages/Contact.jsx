import { useRef, useState } from "react";
import { Mail, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import PageIntro from "../components/PageIntro";

export default function Contact() {
  const ref = useRef(null);
  const [sent, setSent] = useState(false);

  useGSAP(() => {
    gsap.from(".contact-card", {
      y: 45,
      opacity: 0,
      duration: .9,
      ease: "power3.out",
    });
  }, { scope: ref });

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div ref={ref}>
      <PageIntro
        eyebrow="Get in touch"
        title={<>Let's make something <span className="text-white/30">great.</span></>}
        description="This form is front-end only for practice. Connect it to Formspree, EmailJS, a backend API, or your preferred email service before production."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-32 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <a href="mailto:hello@example.com" className="contact-card flex items-center justify-between rounded-3xl border border-white/10 p-6 transition hover:bg-white/[.05]">
            <span className="flex items-center gap-4"><Mail /> hello@example.com</span>
            <ArrowUpRight />
          </a>

          <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-card flex items-center justify-between rounded-3xl border border-white/10 p-6 transition hover:bg-white/[.05]">
            <span className="flex items-center gap-4"><Github /> GitHub</span>
            <ArrowUpRight />
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="contact-card flex items-center justify-between rounded-3xl border border-white/10 p-6 transition hover:bg-white/[.05]">
            <span className="flex items-center gap-4"><Linkedin /> LinkedIn</span>
            <ArrowUpRight />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="contact-card rounded-3xl border border-white/10 bg-white/[.035] p-6 md:p-10">
          <div className="grid gap-7">
            <label>
              <span className="mb-2 block text-xs uppercase tracking-[.2em] text-white/35">Name</span>
              <input required className="w-full border-b border-white/15 bg-transparent py-3 outline-none transition focus:border-white" placeholder="Your name" />
            </label>

            <label>
              <span className="mb-2 block text-xs uppercase tracking-[.2em] text-white/35">Email</span>
              <input required type="email" className="w-full border-b border-white/15 bg-transparent py-3 outline-none transition focus:border-white" placeholder="you@example.com" />
            </label>

            <label>
              <span className="mb-2 block text-xs uppercase tracking-[.2em] text-white/35">Message</span>
              <textarea required rows="5" className="w-full resize-none border-b border-white/15 bg-transparent py-3 outline-none transition focus:border-white" placeholder="Tell me about your project..." />
            </label>

            <button className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.02]">
              {sent ? "Message ready ✓" : "Send message"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}