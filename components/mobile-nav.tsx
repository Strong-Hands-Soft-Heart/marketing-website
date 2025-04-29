'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SvgLogo } from '@/components/svg-logo';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/config/navigation';

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
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-full left-0 w-full bg-white border-b border-stone-200 shadow-md">
        <ul className="py-4">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-5 py-2 text-sm uppercase tracking-wider hover:text-stone-600 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
