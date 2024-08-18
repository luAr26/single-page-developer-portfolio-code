/** @format */

import Link from "next/link";

import GithubIcon from "@/public/images/icon-github.svg";
import FrontEndMentorIcon from "@/public/images/icon-frontend-mentor.svg";
import LinkedinIcon from "@/public/images/icon-linkedin.svg";
import TwitterIcon from "@/public/images/icon-twitter.svg";

function MainNav() {
  return (
    <div className='absolute top-5 right-4 left-4 w-[calc(100%-2rem)] z-[1] flex flex-col items-center gap-5 tablet:flex-row tablet:justify-between tablet:gap-0'>
      <Link
        href='/'
        className='font-bold text-m tablet:text-[2rem] tablet:leading-[1]'
      >
        adamkeyes
      </Link>
      <ul className='flex justify-center items-center gap-[1.625rem]'>
        <li>
          <Link href='/'>
            <span className='sr-only'>Github</span>
            <GithubIcon />
          </Link>
        </li>
        <li>
          <Link href='/'>
            <span className='sr-only'>FrontEnd Mentor</span>
            <FrontEndMentorIcon />
          </Link>
        </li>
        <li>
          <Link href='/'>
            <span className='sr-only'>LinkedIn</span>
            <LinkedinIcon />
          </Link>
        </li>
        <li>
          <Link href='/'>
            <span className='sr-only'>Twitter</span>
            <TwitterIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
