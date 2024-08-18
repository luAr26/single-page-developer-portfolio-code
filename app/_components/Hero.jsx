/** @format */

import Image from "next/image";
import Link from "next/link";

import profileImageMobile from "@/public/images/image-profile-mobile.webp";
import profileImageTablet from "@/public/images/image-profile-tablet.webp";
import profileImageDesktop from "@/public/images/image-profile-desktop.webp";

function Hero() {
  return (
    <div className='flex flex-col items-center gap-6 pb-20 tablet:pb-[60px] desktop:pb-[238px]'>
      <div className='relative h-[383px] w-[174px] tablet:hidden'>
        <Image src={profileImageMobile} alt='Profile Image' />
      </div>
      <div className='h-[600px] w-[322px] hidden tablet:block tablet:absolute tablet:right-0 desktop:hidden'>
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
        {/* TODO: Add link hover state */}
        <Link className='btn' href='/'>
          Contact me
        </Link>
      </div>
    </div>
  );
}

export default Hero;
