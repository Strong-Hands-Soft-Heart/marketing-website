'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SvgLogo } from '@/components/svg-logo';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes or on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <span className="text-base font-medium tracking-wide">SHSH</span>
      </div>
      <div className="flex items-center">
        <button
          className="p-2 rounded-md hover:bg-stone-100 transition-colors"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu overlay with improved transitions */}
      <div
        className={cn(
          'fixed inset-0 z-[100] bg-black/80 backdrop-blur flex flex-col transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="container mx-auto px-5 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
            <SvgLogo className="h-8 w-8 text-stone-100" variant="footer" />
            <span className="text-base font-medium tracking-wide text-stone-100">SHSH</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2.5 text-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400 rounded-sm"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-5">
          <ul className="space-y-10 text-center text-white">
            <li>
              <Link
                href="/#what-we-do"
                className="text-2xl font-medium text-stone-100 hover:text-stone-300 transition-colors py-2.5 block"
                onClick={() => setIsOpen(false)}
              >
                What We Do
              </Link>
            </li>
            <li>
              <Link
                href="/#contact-form"
                className="text-2xl font-medium text-stone-100 hover:text-stone-300 transition-colors py-2.5 block"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="container mx-auto px-5 py-8 text-center">
          <p className="text-stone-400 text-sm">
            © {new Date().getFullYear()} Strong Hands, Soft Heart LLC
          </p>
        </div>
      </div>
    </nav>
  );
}
