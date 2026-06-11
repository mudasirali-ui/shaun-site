import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="not-found__code">404</p>
        <h1>Page not found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Button href="/" variant="primary">
          Return home
        </Button>
      </div>
    </section>
  );
}
