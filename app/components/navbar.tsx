const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-24 w-full max-w-6xl items-center justify-between px-6"
        aria-label="Primary"
      >
        <a href="#home" className="text-2xl font-extrabold tracking-tight text-white">
          Aryan<span className="text-orange-500">.</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1e5k1AGbwy7BQzDOVemggRM3WqcIbDrz6/view?usp=drive_link"
              target="_blank"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}