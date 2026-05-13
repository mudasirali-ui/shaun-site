import PageTransition from '../components/layout/PageTransition';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

export default function ServicesPage() {
  return (
    <PageTransition>
      <Services />
      <Testimonials />
      <CtaBanner />
    </PageTransition>
  );
}
