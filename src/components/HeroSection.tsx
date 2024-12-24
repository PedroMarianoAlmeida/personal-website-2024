import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HeroSection = () => (
  <section
    className="flex flex-col justify-center items-center gap-5 h-screen relative"
    id="hero"
  >
    <h1 className="text-3xl font-bold text-center">
      Hello, I{"'"}m Pedro Almeida
    </h1>
    <ul className="text-info list-disc ml-4">
      <li className="sm:text-base text-sm">
        Dynamic Web Developer with Global Experience
      </li>
      <li className="sm:text-base text-sm">Delivering code since 2018</li>
      <li className="sm:text-base text-sm">
        Expert in React, Next.js, and TypeScript
      </li>
      <li className="sm:text-base text-sm">
        Enthusiast of Continuous Learning and Innovation
      </li>
    </ul>
    <div className="flex flex-wrap gap-5 w-100 justify-center">
      <Link href="/#portfolio">
        <button className="btn btn-primary hover:btn-accent w-32">
          Portfolio
        </button>
      </Link>
      <Link
        href="https://www.linkedin.com/in/pedroprogrammer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-primary hover:btn-accent w-32">
          My LinkedIn
        </button>
      </Link>
      <Link href="/#testimonials">
        <button className="btn btn-primary hover:btn-accent w-32">
          Testimonials
        </button>
      </Link>
    </div>
  </section>
);

export default HeroSection;
