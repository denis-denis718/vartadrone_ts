import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tactical-rich">
      <div className="text-center px-4">
        <h1 className="font-display text-display-xl text-accent-gold mb-4">404</h1>
        <h2 className="font-display text-2xl mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
