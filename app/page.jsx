import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import AboutSection from '@/components/sections/AboutSection';
import ExpertiseGrid from '@/components/sections/ExpertiseGrid';
import ServicesSection from '@/components/sections/ServicesSection';
import CtaBanner from '@/components/sections/CtaBanner';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutSection />
      <ExpertiseGrid />
      <ServicesSection />
      <CtaBanner />
      <ContactSection />
    </>
  );
}
