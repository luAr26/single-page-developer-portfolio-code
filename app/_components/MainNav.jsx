/** @format */

import Link from "next/link";
import SocialLinks from "@/app/_components/SocialLinks";

function MainNav() {
  return (
    <div className='absolute top-5 right-4 left-4 w-[calc(100%-2rem)] z-[1] flex flex-col items-center gap-5 tablet:flex-row tablet:justify-between tablet:gap-0 tablet:right-6 tablet:w-[calc(100%-3rem)]'>
      <Link href='/' className='logo'>
        adamkeyes
      </Link>
      <SocialLinks />
    </div>
  );
}

export default MainNav;
