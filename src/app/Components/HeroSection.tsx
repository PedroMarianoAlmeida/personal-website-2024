import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HeroSection = () => (
  <section
    className="flex flex-col justify-center items-center gap-5 h-screen relative"
    id="hero"
  >
    <h1 className="text-3xl font-bold">Hello, I'm Pedro Almeida</h1>
    <ul className="text-info list-disc ml-4">
      <li>Dynamic Web Developer with Global Experience</li>
      <li>Delivering code since 2018</li>
      <li>Expert in React, Next.js, and TypeScript</li>
      <li>Enthusiast of Continuous Learning and Innovation</li>
    </ul>
    <Link href="#portfolio">
      <button className="btn btn-accent max-w-32">See Portfolio</button>
    </Link>
    <p className="absolute bottom-16 w-full text-center">⬇️ See more ⬇️</p>
  </section>
);

export default HeroSection;
