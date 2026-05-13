import PageTransition from '../components/layout/PageTransition';
import Skills from '../components/Skills';
import Highlights from '../components/Highlights';

export default function SkillsPage() {
  return (
    <PageTransition>
      <Skills />
      <Highlights />
    </PageTransition>
  );
}
