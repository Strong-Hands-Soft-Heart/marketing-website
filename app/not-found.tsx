import Link from 'next/link';
import { SvgLogo } from '@/components/svg-logo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col items-center justify-center p-4 animate-fade-in">
      <div className="text-center space-y-6 max-w-md">
        <SvgLogo className="h-16 w-16 mx-auto animate-slide-up" variant="site" />
        <h1 className="text-4xl font-bold text-stone-800 animate-slide-up animate-delay-100">
          Page Not Found
        </h1>
        <p className="text-stone-600 animate-slide-up animate-delay-100">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="animate-slide-up animate-delay-200">
          <Link
            href="/"
            className="inline-block border-2 border-stone-800 px-6 py-3 text-stone-800 font-medium tracking-wide hover:bg-stone-800 hover:text-white transition-colors rounded-md"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
