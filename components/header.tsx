import Link from 'next/link';
import { SvgLogo } from '@/components/svg-logo';
import { MobileNav } from '@/components/mobile-nav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="container mx-auto py-3 px-5">
        {/* Mobile navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <SvgLogo className="h-8 w-8" variant="header" />
            <span className="text-base font-medium tracking-wide">SHSH</span>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link
                  href="#philosophy"
                  className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors py-2.5 px-1"
                >
                  Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="#what-we-do"
                  className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors py-2.5 px-1"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="#contact-form"
                  className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors py-2.5 px-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
