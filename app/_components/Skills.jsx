/** @format */

import Skill from "@/app/_components/Skill";

const skills = [
  {
    name: "HTML",
    experience: 3,
  },
  {
    name: "CSS",
    experience: 4,
  },
  {
    name: "JavaScript",
    experience: 4,
  },
  {
    name: "Accessibility",
    experience: 4,
  },
  {
    name: "React",
    experience: 3,
  },
  {
    name: "Sass",
    experience: 1,
  },
];

function Skills() {
  return (
    <section className='border-t border-[#979797] py-10 tablet:pt-[52px] tablet:pb-12'>
      <ul className='flex flex-col items-center gap-6 tablet:flex-wrap tablet:flex-row tablet:gap-0'>
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
