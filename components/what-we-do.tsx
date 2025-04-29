import { Beaker, Code, Headphones, BookOpen, Users, Handshake } from 'lucide-react';
import { ServiceCard } from '@/components/service-card';

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-white relative animate-fade-in">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
            backgroundBlendMode: 'multiply',
            backgroundColor: 'rgba(245, 245, 244, 0.5)',
          }}
        ></div>
      </div>
      <div className="container mx-auto px-5 relative z-10">
        <div className="text-center mb-10 md:mb-16 animate-slide-up">
          <span className="inline-block mb-2 text-xs uppercase tracking-wider text-stone-500 border-b border-stone-300 pb-1">
            What We Do
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-stone-800">Our Crafts</h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto">
            Diverse expressions. One philosophy.
            <br />
            Strength in execution. Care in approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="animate-slide-up animate-delay-100">
            <ServiceCard
              title="Artisanal Skincare"
              description="Organic, cold-process soaps — crafted by hand, rooted in tradition. Each bar is a quiet act of care and craft."
              icon={Beaker}
              status="Soft launch: Late 2025"
            />
          </div>

          <div className="animate-slide-up animate-delay-200">
            <ServiceCard
              title="Music Production Collaborations"
              description="Heavy, emotional, sacred. Compositions forged in fire and friendship, balancing sonic force with emotional truth."
              icon={Headphones}
              status="Remote production in progress"
            />
          </div>

          <div className="animate-slide-up animate-delay-300">
            <ServiceCard
              title="Custom Programming"
              description="Software built with precision and principle. Combining technical excellence with intuitive design and ethical grounding."
              icon={Code}
              link={{
                url: 'https://builds.software',
                text: 'Visit builds.software',
              }}
            />
          </div>

          <ServiceCard
            title="Mentorship"
            description="For young men seeking purpose. Sacred, serious guidance rooted in accountability, strength, and compassion."
            icon={Users}
            link={{
              url: 'https://wizards777.medium.com/',
              text: 'Read about our mentorship model',
            }}
          />

          <ServiceCard
            title="Educational Content"
            description="Real knowledge. Clear words. Non-profit, rigorously crafted content to illuminate complex ideas — with both depth and accessibility."
            icon={BookOpen}
            link={{
              url: 'https://wizards777.medium.com/',
              text: 'Explore articles',
            }}
          />
          <ServiceCard
            title="Collaboration & Investment"
            description="Open to partners aligned in values and vision — mentorship, feedback, software builds, or purpose-led investment."
            icon={Handshake}
            link={{
              url: '#contact-form',
              text: 'Get in touch',
            }}
          />
        </div>
      </div>
    </section>
  );
}
