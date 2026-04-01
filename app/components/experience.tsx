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
      "I work mostly on the backend — building APIs, designing the architecture, and making sure everything runs smoothly. I’ve led development for key features and like simplifying messy systems into something clean and easy to manage. Also played around with automation, real-time systems, payment processing and integrating different APIs.",
  },
  {
    company: "Compitcom Digital Solutions Pvt. Ltd.",
    duration: "June 2025 – July 2025",
    role: "Software Developer Intern",
    summary:
      "Built and improved full-stack features, including a slot booking system with real-time updates, payments, and notifications. Focused on keeping things fast, reliable, and smooth for users. Worked across multiple web apps — fixing bugs, improving UI, and optimizing performance. Also helped with integrations and basic system monitoring to keep everything stable.",
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