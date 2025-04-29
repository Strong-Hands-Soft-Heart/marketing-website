import { Beaker, Code, Headphones, BookOpen, Users, Handshake } from 'lucide-react';
import { ServiceCard } from '@/components/service-card';

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-white relative">
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
            Diverse expressions. One philosophy.
            <br />
            Strength in execution. Care in approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            title="Artisanal Skincare"
            description="Organic, cold-process soaps — crafted by hand, rooted in tradition. Each bar is a quiet act of care and craft."
            icon={Beaker}
            status="Soft launch: Late 2025"
          />

          <ServiceCard
            title="Music Production Collaborations"
            description="Heavy, emotional, sacred. Compositions forged in fire and friendship, balancing sonic force with emotional truth."
            icon={Headphones}
            status="Remote production in progress"
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
  );
}
