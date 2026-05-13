import PageTransition from '../components/layout/PageTransition';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

export default function AboutPage() {
  return (
    <PageTransition>
      <About />
      <Testimonials />
      <CtaBanner />
    </PageTransition>
  );
}
