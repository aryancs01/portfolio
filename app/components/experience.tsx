import Image from "next/image";

type ExperienceItem = {
  company: string;
  duration: string;
  role: string;
  summary: string;
};

const experienceItems: ExperienceItem[] = [
  {
    company: "Fonix Technologies",
    duration: "Sept 2025 – March 2026",
    role: "Backend Intern",
    summary:
      "Worked on backend systems, building and optimizing APIs while leading backend development for key features and projects. Focused on system architecture, data flow, and core logic. Simplified complex systems by replacing multiple dependencies with a single backend, improving performance and maintainability. Also worked on automation, AI agents, and external API integrations.",
  },
  {
    company: "Compitcom Digital Solutions Pvt. Ltd.",
    duration: "June 2025 – July 2025",
    role: "Software Developer Intern",
    summary:
      "Built and improved full-stack features, including a slot booking system with real-time updates, payments, and notifications. Focused on performance, reliability, and smooth user experience. Worked on multiple web applications, handling UI improvements, bug fixes, and optimizations. Also contributed to integrations and system monitoring to improve overall stability.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 text-white md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="inline-flex items-center gap-3 sm:gap-4">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Experience
          </h2>
          <Image
            src="/eye.png"
            alt=""
            width={28}
            height={28}
            aria-hidden="true"
            className="h-5 w-5 opacity-90 sm:h-6 sm:w-6"
          />
        </div>

        <div className="mt-12 space-y-12 md:mt-16">
          {experienceItems.map((item) => (
            <article
              key={item.company}
              className="grid gap-3 border-b border-white/10 pb-10 md:grid-cols-[18rem_minmax(0,1fr)] md:gap-8"
            >
              <div className="md:pr-4">
                <h3 className="text-2xl font-semibold tracking-tight">{item.company}</h3>
                <p className="mt-2 text-sm font-medium text-zinc-500">{item.duration}</p>
              </div>

              <div>
                <h4 className="text-xl font-medium text-zinc-100">{item.role}</h4>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}