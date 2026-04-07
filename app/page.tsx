import Image from "next/image";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Technologies from "./components/technologies";
import HandshakeImage from "../public/the-office-handshake.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Technologies />
        <Contact />

        <div className="flex justify-center px-6 pb-16 md:pb-24">
          <Image
            src={HandshakeImage}
            alt="Handshake"
            width={520}
            height={320}
            className="h-auto w-full max-w-64 rounded-xl border border-white/10 object-cover sm:max-w-72 md:max-w-80"
            priority
          />
        </div>
      </main>
    </>
  );
}