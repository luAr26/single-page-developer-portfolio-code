/** @format */

import Skill from "@/app/_components/Skill";
import { skillsData } from "@/data";

function Skills() {
  return (
    <section className='border-t border-[#979797] py-10 tablet:pt-[52px] tablet:pb-12'>
      <ul className='flex flex-col items-center gap-6 tablet:flex-wrap tablet:flex-row tablet:gap-0'>
        {skillsData.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
