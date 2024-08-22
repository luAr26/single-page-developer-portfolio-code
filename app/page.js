/** @format */

import Header from "@/app/_components/Header";
import Skills from "@/app/_components/Skills";
import Projects from "@/app/_components/Projects";
import Main from "@/app/_components/Main";
import Footer from "@/app/_components/Footer";
import Contact from "@/app/_components/Contact";
import MainNav from "@/app/_components/MainNav";
import Hero from "@/app/_components/Hero";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Header>
        <MainNav />
        <Hero />
      </Header>
      <Main>
        <Skills />
        <Projects />
      </Main>
      <Footer>
        <Contact />
      </Footer>
      <Toaster position='top-right' />
    </>
  );
}
