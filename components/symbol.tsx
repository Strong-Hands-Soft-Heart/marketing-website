import { SvgLogo } from './svg-logo';

export function Symbol() {
  return (
    <section className="py-16 md:py-24 bg-stone-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(0, 0, 0, 0.2) 0%, transparent 25%), radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.2) 0%, transparent 25%)',
            transform: 'rotate(15deg) scale(2)',
          }}
        ></div>
      </div>
      <div className="container mx-auto px-5 relative z-10">
        <div className="bg-white py-12 px-6 md:py-16 md:px-10 rounded-lg shadow-md max-w-3xl mx-auto">
          <SvgLogo className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6 md:mb-8" variant="site" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-stone-800">
            Our Symbol
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed text-center">
            Earth and air — strength and spirit.
          </p>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed text-center">
            Our mark embodies the balance between grounded skill and elevated intention. Geometric
            simplicity, enduring power.
          </p>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed text-center">
            We commit to essentials over excess, permanence over trends.
          </p>
        </div>
      </div>
    </section>
  );
}
