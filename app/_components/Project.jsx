/** @format */

import Image from "next/image";
import Link from "next/link";

function Project({ project }) {
  const { title, technologies, thumbnail } = project;
  const { large: thumbLarge } = thumbnail;
  return (
    <li className='flex flex-col mt-10 tablet:w-[calc(50%-11px)] tablet:mt-[60px] tablet:odd:mr-[22px]'>
      <div className='block relative w-full h-[253px]  desktop:h-[400px] project-thumbnail'>
        <Image
          src={thumbLarge}
          alt={`${title} thumbnail`}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 346px, 544px'
        />
        <div className=' absolute w-full h-full bg-[#000]/50 hidden desktop:flex desktop:flex-col desktop:items-center desktop:justify-center desktop:gap-12 desktop:opacity-0 project-thumbnail-overlay desktop:transition-opacity'>
          <Link href='#view' className='btn '>
            View Project
          </Link>
          <Link href='#view' className='btn desktop:pointer-events-auto'>
            View Code
          </Link>
        </div>
      </div>
      <h3 className='mt-5 font-bold uppercase text-m'>
        <Link
          href='/'
          className='transition-colors hover:text-secondary active:text-secondary'
        >
          {title}
        </Link>
      </h3>
      <p className='flex gap-[1.125rem] text-light-gray text-body mt-[7px]'>
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </p>
      <div className='flex mt-5 gap-[30px] desktop:hidden'>
        <Link href='/' className='btn'>
          View Project
        </Link>
        <Link href='/' className='btn'>
          View Code
        </Link>
      </div>
    </li>
  );
}

export default Project;
