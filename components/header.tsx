import Link from 'next/link';
import { SvgLogo } from '@/components/svg-logo';
import { MobileNav } from '@/components/mobile-nav';
import { navigationItems, CONSULTING_URL } from '@/config/navigation';
import { NavLink } from '@/components/nav-link';

export function Header() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-stone-800 text-white py-2 text-center">
        <Link
          href={CONSULTING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium tracking-wide hover:text-stone-200 transition-colors inline-flex items-center gap-2"
        >
          Open for consulting
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </Link>
      </div>
      <header className="sticky top-[40px] z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="container mx-auto py-3 px-5">
        {/* Mobile navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <NavLink href="/" className="flex items-center gap-2.5">
              <SvgLogo className="h-8 w-8" variant="header" />
              <span className="text-base font-medium tracking-wide">SH&SH</span>
            </NavLink>
          </div>
          <nav>
            <ul className="flex items-center gap-8">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors py-2.5 px-1"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <NavLink
                      href={item.href}
                      className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors py-2.5 px-1"
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
}
