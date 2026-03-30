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
    <section id="tech" className="bg-neutral-950 py-24 text-white md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Technologies.
        </h2>

        <ul className="mt-12 flex flex-wrap gap-4 md:mt-16">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-zinc-900/60 px-6 py-3 text-base text-zinc-100 transition hover:border-orange-500 hover:text-orange-400"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}