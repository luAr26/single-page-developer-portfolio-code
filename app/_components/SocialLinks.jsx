/** @format */

import Link from "next/link";

import GithubIcon from "@/public/images/icon-github.svg";
import FrontEndMentorIcon from "@/public/images/icon-frontend-mentor.svg";
import LinkedinIcon from "@/public/images/icon-linkedin.svg";
import TwitterIcon from "@/public/images/icon-twitter.svg";

function SocialLinks() {
  return (
    <ul className='flex justify-center items-center gap-[1.625rem]'>
      <li>
        <Link href='/' className='social-link'>
          <span className='sr-only'>Github</span>
          <GithubIcon className='w-[19.69px] tablet:w-[24.61px] social-icon' />
        </Link>
      </li>
      <li>
        <Link href='/' className='social-link'>
          <span className='sr-only'>FrontEnd Mentor</span>
          <FrontEndMentorIcon className='w-[19.68px] tablet:w-[24.6px] social-icon' />
        </Link>
      </li>
      <li>
        <Link href='/' className='social-link'>
          <span className='sr-only'>LinkedIn</span>
          <LinkedinIcon className='w-[19.2px] tablet:w-[24px] social-icon' />
        </Link>
      </li>
      <li>
        <Link href='/' className='social-link'>
          <span className='sr-only'>Twitter</span>
          <TwitterIcon className='w-[18.62px] tablet:w-[23.28px] social-icon' />
        </Link>
      </li>
    </ul>
  );
}

export default SocialLinks;
