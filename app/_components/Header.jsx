/** @format */

import RingsPattern from "@/public/images/pattern-rings.svg";
import CirclePattern from "@/public/images/pattern-circle.svg";

function Header({ children }) {
  return (
    // TODO: Add background-images to the header
    <header className='container relative text-center tablet:text-left'>
      {children}
      {/* <RingsPattern /> */}
      {/* <CirclePattern /> */}
    </header>
  );
}

export default Header;
