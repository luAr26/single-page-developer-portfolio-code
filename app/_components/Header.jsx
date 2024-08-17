/** @format */

import Link from "next/link";
import GithubIcon from "@/public/images/icon-github.svg";
import FrontEndMentorIcon from "@/public/images/icon-frontend-mentor.svg";
import LinkedinIcon from "@/public/images/icon-linkedin.svg";
import TwitterIcon from "@/public/images/icon-twitter.svg";
import Image from "next/image";
import profileImageMobile from "@/public/images/image-profile-mobile.webp";
import profileImageTablet from "@/public/images/image-profile-tablet.webp";
import profileImageDesktop from "@/public/images/image-profile-desktop.webp";
import RingsPattern from "@/public/images/pattern-rings.svg";
import CirclePattern from "@/public/images/pattern-circle.svg";

function Header() {
  return (
    // TODO: Add background-images to the header
    <header className='relative text-center tablet:text-left'>
      <div className='absolute top-5 z-[1] flex flex-col items-center w-full gap-5 tablet:flex-row tablet:justify-between'>
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
      <div className='flex flex-col items-center gap-6 pb-20 tablet:pb-[60px] desktop:pb-[238px]'>
        <div className='relative h-[383px] w-[174px] tablet:hidden'>
          <Image src={profileImageMobile} alt='Profile Image' />
        </div>
        <div className='h-[600px] w-[322px] hidden tablet:block tablet:absolute tablet:-right-4 desktop:hidden'>
          <Image src={profileImageTablet} alt='Profile Image' />
        </div>
        <div className='h-[720px] w-[445px] hidden desktop:block desktop:absolute desktop:right-0'>
          <Image src={profileImageDesktop} alt='Profile Image' />
        </div>
        <div className='flex flex-col items-center gap-6 tablet:items-start tablet:w-full tablet:relative tablet:mt-[148px] desktop:mt-[178px]'>
          <h1 className=' text-[2.5rem] font-bold leading-[1] mt-4 -tracking-[1.14px] tablet:text-[4.5rem] tablet:leading-[1] tablet:-tracking-[2.05px] tablet:max-w-[445px] desktop:max-w-[709px] desktop:text-xl'>
            Nice to <br className='hidden tablet:block desktop:hidden' /> meet
            you! I&apos;m{" "}
            <span className='border-b-[4px] border-secondary'>Adam Keyes</span>.
          </h1>
          <p className='mt-2 leading-[1.625] text-light-gray tablet:max-w-[445px] tablet:text-[1.125rem] tablet:leading-[1.555556] tablet:mt-10'>
            Based in the UK, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          {/* TODO: Add button hover state */}
          <button className='uppercase leading-[1.625] tracking-[2.29px] font-bold border-b-2 border-secondary py-2 px-1'>
            Contact me
          </button>
        </div>
      </div>

      {/* <RingsPattern /> */}
      {/* <CirclePattern /> */}
    </header>
  );
}

export default Header;
