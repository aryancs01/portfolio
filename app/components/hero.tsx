export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 text-white"
    >

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-orange-400 sm:text-base">
          I build backend systems and web applications.
        </p>

        <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Engineering
          <br />
          backend systems,
          <br />
          <span className="text-zinc-500">that actually work.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base  text-zinc-300 sm:text-xl">
          Backend-focused full-stack developer building APIs, systems, and AI agents.
        </p>
      </div>
    </section>
  );
}