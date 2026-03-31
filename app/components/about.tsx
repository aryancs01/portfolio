import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 text-white md:py-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Beyond the code.
          </h2>

          <Image
            src="/chai.png"
            alt="Chai decoration"
            width={360}
            height={360}
            className="mt-8 w-40 max-w-full object-contain sm:w-48 md:w-56"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-6 text-base leading-relaxed text-zinc-400 sm:text-xl">
            <p>
              Hey, I’m {" "}
              <span className="relative inline-block px-1 text-zinc-100">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-[35%] bottom-0 -z-10 -rotate-2 rounded-sm bg-amber-700"
                />
                Aryan Saxena
              </span>
              , a software engineer from India focused on backend systems and how things work under the hood. I enjoy designing APIs, handling data flow, and building systems that power real applications.
            </p>

            <p>
              Lately, I’ve been exploring AI agents and automation — figuring out how backend systems can integrate with intelligent workflows to solve practical problems. I’m especially interested in building systems that are reliable, efficient, and actually useful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}