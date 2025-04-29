import Link from 'next/link';
import { SvgLogo } from '@/components/svg-logo';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-10 md:py-12">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2.5 mb-6">
            <SvgLogo className="h-8 w-8" variant="footer" />
            <span className="text-sm font-medium tracking-wide text-stone-300">
              STRONG HANDS, SOFT HEART LLC
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6">
            <Link href="/about" className="text-sm hover:text-stone-300 transition-colors py-2">
              About
            </Link>
            <Link
              href="#philosophy"
              className="text-sm hover:text-stone-300 transition-colors py-2"
            >
              Philosophy
            </Link>
            <Link
              href="#what-we-do"
              className="text-sm hover:text-stone-300 transition-colors py-2"
            >
              What We Do
            </Link>
            <Link
              href="#contact-form"
              className="text-sm hover:text-stone-300 transition-colors py-2"
            >
              Contact
            </Link>
            <Link href="/logo" className="text-sm hover:text-stone-300 transition-colors py-2">
              The SHSH Logo
            </Link>
          </div>
          <div className="text-sm text-center">
            © {new Date().getFullYear()} Strong Hands, Soft Heart LLC. All rights reserved.
          </div>
          <small className="text-xs text-center text-stone-500 mt-2">
            Made with strong hands and a soft heart in Puerto Rico 🇵🇷 and the U.S. 🇺🇸 — shared with
            the world.
          </small>
        </div>

        <div className="border-t border-stone-800 pt-6 md:pt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-stone-500">
          <Link href="/terms-of-service" className="hover:text-stone-400 transition-colors py-2">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:text-stone-400 transition-colors py-2">
            Privacy Policy
          </Link>
          <Link href="/product-disclaimers" className="hover:text-stone-400 transition-colors py-2">
            Product Disclaimers
          </Link>
        </div>
      </div>
    </footer>
  );
}
