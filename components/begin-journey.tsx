import { ContactForm } from '@/components/contact-form';

export function BeginJourney() {
  return (
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
  );
}
