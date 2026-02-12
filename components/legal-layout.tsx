import type React from 'react';
import Link from 'next/link';
import { SvgLogo } from '@/components/svg-logo';
import { ArrowLeft } from 'lucide-react';
import { MobileNav } from '@/components/mobile-nav';
import { CONSULTING_URL } from '@/config/navigation';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated: string;
}

export function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      <div className="sticky top-0 z-50 bg-stone-800 text-white py-2 text-center">
        <Link
          href={CONSULTING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium tracking-wide hover:text-stone-200 transition-colors inline-flex items-center gap-2 justify-center"
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
              <Link href="/">
                <SvgLogo className="h-8 w-8 text-stone-800" variant="header" />
              </Link>
              <span className="text-base font-medium tracking-wide">SH&SH</span>
            </div>
            <nav>
              <ul className="flex gap-8">
                <li>
                  <Link
                    href="/#philosophy"
                    className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors py-2.5 px-1"
                  >
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#what-we-do"
                    className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors py-2.5 px-1"
                  >
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact-form"
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

      <main className="flex-1 container mx-auto px-5 py-10 md:py-16 animate-fade-in">
        <Link
          href="/"
          className="inline-flex items-center text-stone-700 hover:text-stone-900 mb-6 md:mb-8 animate-slide-up"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-sm animate-slide-up animate-delay-100">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-stone-800">{title}</h1>
          <p className="text-sm text-stone-500 mb-8 md:mb-10">Last Updated: {lastUpdated}</p>

          <div className="prose prose-stone prose-sm sm:prose-base max-w-none [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-xl [&>h2]:font-semibold [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>li]:mb-2">
            {children}
          </div>
        </div>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-10 md:py-12 mt-16 md:mt-24">
        <div className="container mx-auto px-5">
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2.5 mb-6">
              <SvgLogo className="h-8 w-8 text-stone-400" variant="footer" />
              <span className="text-sm font-medium tracking-wide text-stone-300">
                STRONG HANDS, SOFT HEART LLC
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6">
              <Link
                href="/#philosophy"
                className="text-sm hover:text-stone-300 transition-colors py-2"
              >
                Philosophy
              </Link>
              <Link
                href="/#what-we-do"
                className="text-sm hover:text-stone-300 transition-colors py-2"
              >
                What We Do
              </Link>
              <Link
                href="/#contact-form"
                className="text-sm hover:text-stone-300 transition-colors py-2"
              >
                Contact
              </Link>
            </div>
            <div className="text-sm text-center">
              © {new Date().getFullYear()} Strong Hands, Soft Heart LLC. All rights reserved.
            </div>
          </div>

          <div className="border-t border-stone-800 pt-6 md:pt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-stone-500">
            <Link href="/terms-of-service" className="hover:text-stone-400 transition-colors py-2">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-stone-400 transition-colors py-2">
              Privacy Policy
            </Link>
            <Link
              href="/product-disclaimers"
              className="hover:text-stone-400 transition-colors py-2"
            >
              Product Disclaimers
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
