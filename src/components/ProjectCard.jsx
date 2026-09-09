export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card overflow-hidden rounded-3xl border border-white/10 bg-white/[.035]">
      {/* Project Image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover grayscale"
          loading="lazy"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 md:p-8">
        <div className="mb-6 flex items-start justify-between gap-5">

          {/* Project Title */}
          <div>
            <p className="mb-2 text-xs uppercase tracking-[.25em] text-white/35">
              0{index + 1} / {project.category}
            </p>

            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>
          </div>

          {/* Animated Arrow Button */}
          <button
            className="
              group
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
            "
            aria-label={`View ${project.title}`}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="
                overflow-visible
                transition-transform
                duration-500
                ease-[cubic-bezier(.22,1,.36,1)]
                group-hover:translate-x-1
              "
            >
              {/* Diagonal arrow */}
              <path
                d="M5 19L19 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="
                  transition-all
                  duration-500
                  ease-[cubic-bezier(.22,1,.36,1)]
                  group-hover:opacity-0
                "
              />

              {/* Arrow head */}
              <path
                d="M11 5H19V13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="
                  transition-transform
                  duration-500
                  ease-[cubic-bezier(.22,1,.36,1)]
                  group-hover:rotate-45
                "
                style={{
                  transformOrigin: "19px 5px",
                }}
              />

              {/* Horizontal arrow */}
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="
                  opacity-0
                  transition-all
                  duration-500
                  ease-[cubic-bezier(.22,1,.36,1)]
                  group-hover:opacity-100
                "
              />

              {/* Horizontal arrow head */}
              <path
                d="M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="
                  opacity-0
                  transition-all
                  duration-500
                  ease-[cubic-bezier(.22,1,.36,1)]
                  group-hover:opacity-100
                "
              />
            </svg>
          </button>
        </div>

        {/* Description */}
        <p className="mb-6 text-sm leading-6 text-white/45">
          {project.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}