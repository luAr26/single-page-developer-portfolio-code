/** @format */

import Link from "next/link";
import Project from "@/app/_components/Project";
import { projectsData } from "@/data";

function Projects() {
  return (
    <section className='border-t border-[#979797] py-20'>
      <header className='flex items-center justify-between'>
        <h2 className='section-heading'>Projects</h2>
        <Link href='#contact' className='btn'>
          Contact me
        </Link>
      </header>
      <ul className='flex flex-col items-center tablet:flex-row tablet:flex-wrap '>
        {projectsData.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
