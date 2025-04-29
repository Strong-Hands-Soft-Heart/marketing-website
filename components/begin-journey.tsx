import { ContactForm } from '@/components/contact-form';

export function BeginJourney() {
  return (
    <section id="contact-form" className="py-16 md:py-24 bg-stone-800 text-white">
      <div className="container mx-auto px-5">
        <ContactForm />
      </div>
    </section>
  );
}
