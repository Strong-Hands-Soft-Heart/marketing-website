import { Hero } from '@/components/hero';
import { Philosophy } from '@/components/philosophy';
import { Symbol } from '@/components/symbol';
import { WhatWeDo } from '@/components/what-we-do';
import { navigationItems } from '@/config/navigation';
import { ContactForm } from '@/components/contact-form';
import { MobileNav } from '@/components/mobile-nav';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Strong Hands, Soft Heart</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <MobileNav />
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Symbol />
        <WhatWeDo />

        <section className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Begin Your Journey</h2>
            <p className="text-base md:text-lg text-stone-300 mb-4 md:mb-6 leading-relaxed">
              Whether you're building a legacy, seeking guidance, or simply curious about our
              approach, we invite you to connect with us.
            </p>
          </div>
          <div className="bg-stone-700 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-10 md:py-12">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Strong Hands, Soft Heart</h3>
              <p className="text-sm">
                Building enduring legacies through strength, care, and purpose.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-stone-300 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://wizards777.medium.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-300 transition-colors"
                  >
                    Medium Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://builds.software"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-300 transition-colors"
                  >
                    builds.software
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-800 text-sm text-center">
            <p>© {new Date().getFullYear()} Strong Hands, Soft Heart LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
