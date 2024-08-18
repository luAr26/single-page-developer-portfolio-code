/** @format */

function Skill({ skill }) {
  const { name, experience } = skill;
  return (
    <li className='flex flex-col items-center tablet:w-1/2 desktop:w-1/3 tablet:items-start tablet:mb-[52px]'>
      <h3 className='text-[2rem] leading-[1.25] font-bold -tracking-[1px] mb-[1px] tablet:mb-[14px] tablet:text-l'>
        {name}
      </h3>
      <p className='leading-[1.625] tablet:text-body text-light-gray'>
        {experience} {experience === 1 ? "Year" : "Years"} Experience
      </p>
    </li>
  );
}

export default Skill;
