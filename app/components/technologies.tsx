const technologies = [
  "JavaScript",
  "TypeScript",
  "React & Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Supabase",
  "Docker",
  "AWS",
  "WebRTC",
  "Redis",
  "BullMQ",
  "MongoDB",
  "MySQL",
  "Express.js",
];

export default function Technologies() {
  return (
    <section id="tech" className="py-24 text-white md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Technologies.
        </h2>

        <div className="mt-12 md:mt-16">
          <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm text-zinc-100 transition hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-400 sm:text-base"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}