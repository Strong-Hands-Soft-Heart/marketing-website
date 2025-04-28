import Image from "next/image"
import Link from "next/link"
import { AlchemicalLogo } from "@/components/alchemical-logo"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      <header className="container mx-auto py-8 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <AlchemicalLogo className="h-10 w-10 text-stone-900" />
          <span className="text-lg font-medium tracking-wide">SHSH</span>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="#" className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors">
                Philosophy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <section className="hero relative h-[80vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-stone-200"
            style={{
              backgroundImage: 'url("/textures/grain.png")',
              backgroundBlendMode: "multiply",
              opacity: 0.3,
            }}
          ></div>
          <div className="container mx-auto px-4 md:px-6 z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Strong Hands,
                <br />
                Soft Heart
              </h1>
              <p className="text-xl md:text-2xl text-stone-700 max-w-xl leading-relaxed">
                Building enduring legacies through quiet strength and genuine care. Grounded in tradition, guided by
                compassion.
              </p>
              <div className="mt-12">
                <Link
                  href="#philosophy"
                  className="inline-block border-2 border-stone-900 px-8 py-3 text-stone-900 font-medium tracking-wide hover:bg-stone-900 hover:text-stone-50 transition-colors"
                >
                  Our Philosophy
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="philosophy" className="py-24 bg-stone-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">The Craftsman's Ethos</h2>
                <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                  Like the craftsman who shapes raw materials with calloused yet precise hands, we approach each
                  endeavor with both strength and sensitivity.
                </p>
                <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                  Our work is built to endure—like mountains that stand against time, like seeds that grow slowly but
                  with purpose and direction.
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  We believe in the balance of earth and air—grounded in reality while aspiring toward something
                  greater.
                </p>
              </div>
              <div className="relative h-80 md:h-96">
                <div className="absolute inset-0 bg-stone-300 rounded-lg overflow-hidden">
                  <Image
                    src="/earthy-wood-abstract.png"
                    alt="Abstract representation of craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <AlchemicalLogo className="h-16 w-16 mx-auto mb-8 text-stone-900" />
            <h2 className="text-3xl font-bold mb-6">Our Symbol</h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto leading-relaxed">
              The fusion of earth and air—strength and spirit—in our mark represents our fundamental belief: true power
              comes from balance. The geometric simplicity speaks to our commitment to essentials over excess.
            </p>
          </div>
        </section>

        <section className="py-24 bg-stone-900 text-stone-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Begin Your Journey</h2>
              <p className="text-lg text-stone-300 mb-12 leading-relaxed">
                Whether you're building a legacy, seeking guidance, or simply curious about our approach, we invite you
                to connect with us.
              </p>
              <Link
                href="#contact"
                className="inline-block border-2 border-stone-50 px-8 py-3 text-stone-50 font-medium tracking-wide hover:bg-stone-50 hover:text-stone-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <AlchemicalLogo className="h-8 w-8 text-stone-400" />
              <span className="text-sm font-medium tracking-wide text-stone-300">STRONG HANDS, SOFT HEART LLC</span>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} Strong Hands, Soft Heart LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
