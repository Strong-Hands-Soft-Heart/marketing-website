import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero relative min-h-[85vh] md:h-[80vh] flex items-center overflow-hidden py-16 md:py-24">
      <div
        className="absolute inset-0 z-0 bg-stone-100"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='none'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='6' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noise)'/></svg>")`,
          backgroundBlendMode: 'multiply',
          opacity: 0.9,
        }}
      ></div>
      <div className="container mx-auto px-5 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-stone-800">
            Strong Hands, Soft Heart
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-700 max-w-xl leading-relaxed">
            Timeless work. Earnest care. Fierce devotion.
            <br />
            We build enduring legacies — grounded in truth, shaped by strength, and carried with
            compassion.
          </p>
          <div className="mt-10">
            <Link
              href="#philosophy"
              className="inline-block border-2 border-stone-800 px-6 py-3 text-stone-800 font-medium tracking-wide hover:bg-stone-800 hover:text-white transition-colors rounded-md"
            >
              Discover the Philosophy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
