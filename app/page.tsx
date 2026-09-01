import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollFx from "@/components/ScrollFx";

export default function Home() {
  return (
    <>
      <ScrollFx />
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Process />
        {/* <Blog /> */}
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
