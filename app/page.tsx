import Image from 'next/image';
import Link from 'next/link';
import { SvgLogo } from '@/components/svg-logo';
import { Beaker, Code, Headphones, BookOpen, Users, Handshake } from 'lucide-react';
import { ServiceCard } from '@/components/service-card';
import { ContactForm } from '@/components/contact-form';
import { MobileNav } from '@/components/mobile-nav';
import { BackToTop } from '@/components/back-to-top';
import { Hero } from '@/components/hero';
import { Philosophy } from '@/components/philosophy';
import { Symbol } from '@/components/symbol';
import { navigationItems } from '@/config/navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
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
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors py-2.5 px-1"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Symbol />

        <section id="services" className="py-16 md:py-24 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                backgroundSize: '60px 60px',
              }}
            ></div>
          </div>
          <div className="container mx-auto px-5 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block mb-2 text-xs uppercase tracking-wider text-stone-500 border-b border-stone-300 pb-1">
                What We Do
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-stone-800">Our Crafts</h2>
              <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto">
                Diverse expressions of the same philosophy: strength in execution, care in approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <ServiceCard
                title="Artisanal Soap"
                description="Organic, non-GMO handcrafted soaps made with intention and care. Each bar embodies our commitment to purity and craftsmanship."
                icon={Beaker}
                status="Launching 2026"
              />

              <ServiceCard
                title="Heavy Metal Music"
                description="Powerful compositions that blend technical strength with emotional depth. Our sound carries both force and feeling."
                icon={Headphones}
                status="In production!"
              />

              <ServiceCard
                title="Custom Programming"
                description="Bespoke software solutions built with both technical excellence and human understanding. Robust architecture with intuitive interfaces."
                icon={Code}
                link={{
                  url: 'https://builds.software',
                  text: 'Visit builds.software',
                }}
              />

              <ServiceCard
                title="Mentorship"
                description="Guidance for young men navigating their path. Building character through wisdom shared, challenges faced, and potential realized."
                icon={Users}
                link={{
                  url: 'https://wizards777.medium.com/',
                  text: 'Read mentorship insights',
                }}
              />

              <ServiceCard
                title="Educational Content"
                description="Non-profit resources that illuminate complex topics with clarity and purpose. Knowledge shared with both rigor and accessibility."
                icon={BookOpen}
                link={{
                  url: 'https://wizards777.medium.com/',
                  text: 'Explore articles',
                }}
              />
              <ServiceCard
                title="Collaboration & Investment"
                description="Interested in investing in our ventures, seeking mentorship, product feedback, or web development expertise? I'm open to meaningful collaborations that align with our values."
                icon={Handshake}
                link={{
                  url: '#contact-form',
                  text: 'Get in touch',
                }}
              />
            </div>
          </div>
        </section>

        <section id="contact-form" className="py-16 md:py-24 bg-stone-800 text-white">
          <div className="container mx-auto px-5">
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
          </div>
        </section>
      </main>

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
              <Link
                href="#philosophy"
                className="text-sm hover:text-stone-300 transition-colors py-2"
              >
                Philosophy
              </Link>
              <Link
                href="#services"
                className="text-sm hover:text-stone-300 transition-colors py-2"
              >
                Services
              </Link>
              <Link
                href="#contact-form"
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
      <BackToTop />
    </div>
  );
}
