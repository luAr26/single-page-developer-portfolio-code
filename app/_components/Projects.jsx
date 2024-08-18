/** @format */

import Link from "next/link";
import Project from "@/app/_components/Project";

const projects = [
  {
    title: "Design Portfolio",
    technologies: ["HTML", "CSS"],
    thumbnail: {
      small: "/images/thumbnail-project-1-small.webp",
      large: "/images/thumbnail-project-1-large.webp",
    },
  },
  {
    title: "E-Learning Landing Page",
    technologies: ["HTML", "CSS"],
    thumbnail: {
      small: "/images/thumbnail-project-2-small.webp",
      large: "/images/thumbnail-project-2-large.webp",
    },
  },
  {
    title: "Todo Web App",
    technologies: ["HTML", "CSS", "JavaScript"],
    thumbnail: {
      small: "/images/thumbnail-project-3-small.webp",
      large: "/images/thumbnail-project-3-large.webp",
    },
  },
  {
    title: "Entertainment Web App",
    technologies: ["HTML", "CSS", "JavaScript"],
    thumbnail: {
      small: "/images/thumbnail-project-4-small.webp",
      large: "/images/thumbnail-project-4-large.webp",
    },
  },
  {
    title: "Memory Game",
    technologies: ["HTML", "CSS", "JavaScript"],
    thumbnail: {
      small: "/images/thumbnail-project-5-small.webp",
      large: "/images/thumbnail-project-5-large.webp",
    },
  },
  {
    title: "Art Gallery Showcase",
    technologies: ["HTML", "CSS", "JavaScript"],
    thumbnail: {
      small: "/images/thumbnail-project-6-small.webp",
      large: "/images/thumbnail-project-6-large.webp",
    },
  },
];

function Projects() {
  return (
    <section className='border-t border-[#979797] py-20'>
      <header className='flex items-center justify-between'>
        <h2 className='text-[2.5rem] font-bold leading-[1] -tracking-[1.14px] tablet:text-[4.5rem] tablet:-tracking-[2.05px]'>
          Projects
        </h2>
        <Link href='/' className='btn'>
          Contact me
        </Link>
      </header>
      <ul className='flex flex-col items-center tablet:flex-row tablet:flex-wrap '>
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
