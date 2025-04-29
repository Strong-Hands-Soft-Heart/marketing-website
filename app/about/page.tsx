import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackToTop } from '@/components/back-to-top';
import { ContactForm } from '@/components/contact-form';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Strong Hands, Soft Heart',
  description: 'Learn about the story, values, and people behind Strong Hands, Soft Heart.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-3xl animate-fade-in">
          <h1 className="text-4xl font-bold mb-12 text-center animate-slide-up">
            Who's Behind Strong Hands, Soft Heart?
          </h1>

          <section className="mb-16 text-center animate-slide-up animate-delay-100">
            <h2 className="text-2xl font-semibold mb-6">Founder Statement</h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-xl mb-4">I'm Antonio. I build things that last.</p>
              <p className="mb-4">
                Strong Hands, Soft Heart is my personal commitment — to family, to craft, and to
                legacy.
              </p>
              <p className="mb-8">
                This started as a solo vision and has become a living system powered by community.
              </p>

              <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-sm text-stone-600">Connect with me</p>
                  <div className="flex space-x-4">
                    <Link
                      href="https://antonio.builds.software"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-900 hover:text-stone-600 underline"
                    >
                      Personal Website
                    </Link>
                    <span className="text-stone-400">•</span>
                    <Link
                      href="https://www.linkedin.com/in/antoniwan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-900 hover:text-stone-600 underline"
                    >
                      LinkedIn
                    </Link>
                  </div>
                </div>

                <Link
                  href="#contact-form"
                  className="inline-block px-6 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition-colors"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-16 text-center animate-slide-up animate-delay-200">
            <h2 className="text-2xl font-semibold mb-6">What This Really Is</h2>
            <div className="space-y-4 max-w-2xl mx-auto text-center">
              <p className="text-lg">It's a workshop.</p>
              <p className="text-lg">It's a quiet rebellion against mass production.</p>
              <p className="text-lg">
                It's a studio where music, soap, code, and spirit all coexist.
              </p>
              <p className="text-lg">
                It's me, my friends, my kids, a few strangers who became allies — and you.
              </p>
            </div>
          </section>

          <section className="mb-16 text-center animate-slide-up animate-delay-300">
            <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
            <ul className="space-y-3 list-none max-w-md mx-auto">
              <li className="flex items-center justify-center">
                <span className="mr-2">🏆</span>
                <span className="text-lg">Quality over quantity</span>
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2">✨</span>
                <span className="text-lg">Sacred over sterile</span>
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2">💎</span>
                <span className="text-lg">Honesty over polish</span>
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2">🌱</span>
                <span className="text-lg">Local over scalable</span>
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2">🧘</span>
                <span className="text-lg">Presence over hype</span>
              </li>
            </ul>
          </section>
        </div>

        <section
          id="contact-form"
          className="py-16 md:py-24 bg-stone-800 text-white animate-slide-up animate-delay-400"
        >
          <div className="container mx-auto px-5 max-w-3xl">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
