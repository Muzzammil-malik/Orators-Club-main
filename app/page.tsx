import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import SmoothScroll from '@/components/providers/smooth-scroll';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import VisionMission from '@/components/sections/vision-mission';
import Statistics from '@/components/sections/statistics';
import Activities from '@/components/sections/activities';
import Events from '@/components/sections/events';
import Announcements from '@/components/sections/announcements';
import Gallery from '@/components/sections/gallery';
import Team from '@/components/sections/team';
import Connect from '@/components/sections/connect';
import FinalCTA from '@/components/sections/final-cta';

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Statistics />
        <Activities />
        <Events />
        <Announcements />
        <Gallery />
        <Team />
        <Connect />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}