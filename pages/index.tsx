import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Service';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zaid | Portfolio</title>
      </Head>
      <Navbar/>
      <Hero />
      <About />
      <Services />
       <Skills/>
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop/>
    </>
  );
}
