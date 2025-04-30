import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SvgLogo } from '@/components/svg-logo';
import { MobileNav } from '@/components/mobile-nav';
import { BackToTop } from '@/components/back-to-top';
import { Hero } from '@/components/hero';
import { Philosophy } from '@/components/philosophy';
import { Symbol } from '@/components/symbol';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatWeDo } from '@/components/what-we-do';
import { BeginJourney } from '@/components/begin-journey';
import { pageMetadata } from './metadata';

export const metadata: Metadata = pageMetadata.home;

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Symbol />
        <WhatWeDo />
        <BeginJourney />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
