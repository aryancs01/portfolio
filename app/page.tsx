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
            className="h-auto w-full max-w-xs rounded-xl border border-white/10 object-cover sm:max-w-sm md:max-w-md"
            priority
          />
        </div>
      </main>

      {/* <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-4 left-4 z-40 hidden 2xl:block"
      >
        <Image
          src={CodingImage}
          alt=""
          width={160}
          height={160}
          unoptimized
          priority
          className="h-auto w-32 xl:w-40"
        />
      </div> */}
    </>
  );
}