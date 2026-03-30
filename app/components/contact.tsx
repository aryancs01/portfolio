const contactLinks = [
  { label: "aryan1032saxena@gmail.com", href: "mailto:aryan1032saxena@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-saxena12/" },
  { label: "GitHub", href: "https://github.com/aryancs01" },
  { label: "Twitter / X", href: "https://x.com/aryandev_" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-neutral-950 py-28 text-white md:py-36"
    >
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
          Let&apos;s build something remarkable together.
        </h2>

        <ul className="mt-12 flex flex-col items-center justify-center gap-6 md:mt-14 md:flex-row md:gap-12">
          {contactLinks.map((item) => (
            <li key={item.label}>
              <a
                target="_blank"
                href={item.href}
                className="relative text-xl font-medium text-zinc-100 transition hover:text-orange-400"
              >
                <span className="after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}