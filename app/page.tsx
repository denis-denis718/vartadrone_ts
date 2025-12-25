'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/uk');
  }, [router]);

  return (
    <div className="min-h-screen bg-tactical-rich flex items-center justify-center">
      <div className="text-white">Redirecting...</div>
    </div>
  );
}
