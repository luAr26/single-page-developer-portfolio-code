/** @format */

import Link from "next/link";
import GithubIcon from "@/public/images/icon-github.svg";
import FrontEndMentorIcon from "@/public/images/icon-frontend-mentor.svg";
import LinkedinIcon from "@/public/images/icon-linkedin.svg";
import TwitterIcon from "@/public/images/icon-twitter.svg";

function Header() {
  return (
    <header className='flex flex-col items-center gap-5'>
      <Link href='/' className='font-bold text-m'>
        adamkeyes
      </Link>
      <ul className='flex items-center justify-between gap-[1.625rem]'>
        <li>
          <Link href=''>
            <span className='sr-only'>Github</span>
            <GithubIcon />
          </Link>
        </li>
        <li>
          <Link href=''>
            <span className='sr-only'>FrontEnd Mentor</span>
            <FrontEndMentorIcon />
          </Link>
        </li>
        <li>
          <Link href=''>
            <span className='sr-only'>LinkedIn</span>
            <LinkedinIcon />
          </Link>
        </li>
        <li>
          <Link href=''>
            <span className='sr-only'>Twitter</span>
            <TwitterIcon />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
