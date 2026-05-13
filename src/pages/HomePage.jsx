import PageTransition from '../components/layout/PageTransition';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Highlights />
      <Testimonials />
      <CtaBanner />
    </PageTransition>
  );
}
