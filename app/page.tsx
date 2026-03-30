import Image from "next/image";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Technologies from "./components/technologies";
import CodingImage from "../public/coding.gif";

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
      </main>

      <div
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
      </div>
    </>
  );
}