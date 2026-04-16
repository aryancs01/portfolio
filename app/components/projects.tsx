import Image from "next/image";

type Project = {
    title: string;
    description: string;
    tech: string[];
    links: {
        github?: string;
        live?: string;
    };
};

const projects: Project[] = [
    {
        title: "O2Chat",
        description:
            "A modern, multi-modal AI assistant with real-time conversational AI streaming, cloud-based UI sandbox for component generation, and secure authentication.",
        tech: [
            "Next.js 16",
            "TypeScript",
            "OpenRouter",
            "Google Gemini",
            "E2B",
            "PostgreSQL",
            "Prisma",
            "Better Auth",
            "Tailwind CSS",
        ],
        links: {
            github: "https://github.com/aryancs01/o2chatbot",
            live: "https://o2chatbot.vercel.app/",
        },
    },
    {
        title: "Bitwise",
        description:
            "Designed a backend system for code evaluation using queues, workers, and isolated containers.",
        tech: [
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redis",
            "BullMQ",
            "Docker",
        ],
        links: {
            github: "https://github.com/aryancs01/bitwise",
        },
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 text-white md:py-32">
            <div className="mx-auto w-full max-w-6xl px-6">
                <div className="inline-flex items-center gap-3 sm:gap-4">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Selected Work
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

                <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="flex h-full flex-col rounded-2xl border border-white/10 p-8 transition hover:-translate-y-1.5 hover:border-zinc-500"
                        >
                            <h3 className="text-3xl font-semibold tracking-tight">{project.title}</h3>

                            <p className="mt-4 flex-1 text-base leading-relaxed text-zinc-400">
                                {project.description}
                            </p>

                            <ul className="mt-8 flex flex-wrap gap-3">
                                {project.tech.map((item) => (
                                    <li
                                        key={item}
                                        className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-zinc-300"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 flex gap-4">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        className="inline-flex items-center gap-2 text-md font-medium text-zinc-100 transition hover:text-orange-400"
                                    >
                                        GitHub
                                        <span aria-hidden="true">-&gt;</span>
                                    </a>
                                )}
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        className="inline-flex items-center gap-2 text-md font-medium transition text-green-400 hover:text-orange-400"
                                    >
                                        Live
                                        <span aria-hidden="true">-&gt;</span>
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}