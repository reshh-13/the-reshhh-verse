import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Toolkit from '@/components/Toolkit';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col selection:bg-[#F42B70] selection:text-white">
      <Navbar />
      <About />
      <Skills />
      <Toolkit />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
