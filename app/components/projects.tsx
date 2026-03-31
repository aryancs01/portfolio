import Image from "next/image";

type Project = {
    title: string;
    description: string;
    tech: string[];
    href: string;
};

const projects: Project[] = [
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
        href: "https://github.com/aryancs01/bitwise",
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

                <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
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

                            <a
                                href={project.href}
                                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-100 transition hover:text-orange-400"
                            >
                                View Source
                                <span aria-hidden="true">-&gt;</span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}