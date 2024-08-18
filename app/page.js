/** @format */

import Header from "@/app/_components/Header";
import Skills from "@/app/_components/Skills";
import Projects from "@/app/_components/Projects";

export default function Home() {
  return (
    <div className='max-w-[375px] mx-auto px-4 tablet:max-w-[768px] desktop:max-w-[1142px]'>
      <Header />
      <Skills />
      <Projects />
    </div>
  );
}
