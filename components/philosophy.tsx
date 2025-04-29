import Image from 'next/image';

export function Philosophy() {
  return (
    <section id="philosophy" className="py-16 md:py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-200 via-stone-400 to-stone-200"></div>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="content-spacing">
            <span className="inline-block mb-2 text-xs uppercase tracking-wider text-stone-500 border-b border-stone-300 pb-1">
              Our Philosophy
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800">The Craftsman's Ethos</h2>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed">
              Like a craftsman shaping raw materials with calloused yet precise hands, we approach
              each endeavor with both strength and sensitivity.
            </p>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed">
              Our work is built to endure — like mountains that weather time or seeds that grow with
              patience and purpose.
            </p>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed">
              We believe in the balance of earth and air — grounded in reality while aspiring toward
              something greater.
            </p>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 mt-6 md:mt-0 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/earthy-wood-abstract.png"
              alt="Abstract representation of craftsmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
