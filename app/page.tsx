import Image from "next/image"
import Link from "next/link"
import { AlchemicalLogo } from "@/components/alchemical-logo"
import { Beaker, Code, Headphones, BookOpen, Users, Handshake } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
        <div className="container mx-auto py-3 px-5">
          {/* Mobile navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <AlchemicalLogo className="h-8 w-8 text-stone-800" />
              <span className="text-base font-medium tracking-wide">SHSH</span>
            </div>
            <nav>
              <ul className="flex gap-8">
                <li>
                  <Link
                    href="#philosophy"
                    className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors py-2.5 px-1"
                  >
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors py-2.5 px-1"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact-form"
                    className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors py-2.5 px-1"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="hero relative min-h-[85vh] md:h-[80vh] flex items-center overflow-hidden py-16 md:py-24">
          <div
            className="absolute inset-0 z-0 bg-stone-100"
            style={{
              backgroundImage: 'url("/textures/grain.png")',
              backgroundBlendMode: "multiply",
              opacity: 0.4,
            }}
          ></div>
          <div className="container mx-auto px-5 z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-stone-800">
                Strong Hands,
                <br />
                Soft Heart
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-stone-700 max-w-xl leading-relaxed">
                Building enduring legacies through quiet strength and genuine care. Grounded in tradition, guided by
                compassion.
              </p>
              <div className="mt-10">
                <Link
                  href="#philosophy"
                  className="inline-block border-2 border-stone-800 px-6 py-3 text-stone-800 font-medium tracking-wide hover:bg-stone-800 hover:text-white transition-colors rounded-md"
                >
                  Our Philosophy
                </Link>
              </div>
            </div>
          </div>
        </section>

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
                  Like the craftsman who shapes raw materials with calloused yet precise hands, we approach each
                  endeavor with both strength and sensitivity.
                </p>
                <p className="text-base md:text-lg text-stone-600 leading-relaxed">
                  Our work is built to endure—like mountains that stand against time, like seeds that grow slowly but
                  with purpose and direction.
                </p>
                <p className="text-base md:text-lg text-stone-600 leading-relaxed">
                  We believe in the balance of earth and air—grounded in reality while aspiring toward something
                  greater.
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

        <section className="py-16 md:py-24 bg-stone-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(0, 0, 0, 0.2) 0%, transparent 25%), radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.2) 0%, transparent 25%)",
                transform: "rotate(15deg) scale(2)",
              }}
            ></div>
          </div>
          <div className="container mx-auto px-5 relative z-10">
            <div className="bg-white py-12 px-6 md:py-16 md:px-10 rounded-lg shadow-md max-w-3xl mx-auto">
              <AlchemicalLogo className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6 md:mb-8 text-stone-800" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-stone-800">Our Symbol</h2>
              <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed text-center">
                The fusion of earth and air—strength and spirit—in our mark represents our fundamental belief: true
                power comes from balance. The geometric simplicity speaks to our commitment to essentials over excess.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                backgroundSize: "60px 60px",
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
                Diverse expressions of the same philosophy: strength in execution, care in approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <ServiceCard
                title="Artisanal Soap"
                description="Organic, non-GMO handcrafted soaps made with intention and care. Each bar embodies our commitment to purity and craftsmanship."
                icon={Beaker}
                status="Launching 2026"
              />

              <ServiceCard
                title="Heavy Metal Music"
                description="Powerful compositions that blend technical strength with emotional depth. Our sound carries both force and feeling."
                icon={Headphones}
                status="In production!"
              />

              <ServiceCard
                title="Custom Programming"
                description="Bespoke software solutions built with both technical excellence and human understanding. Robust architecture with intuitive interfaces."
                icon={Code}
                link={{
                  url: "https://builds.software",
                  text: "Visit builds.software",
                }}
              />

              <ServiceCard
                title="Mentorship"
                description="Guidance for young men navigating their path. Building character through wisdom shared, challenges faced, and potential realized."
                icon={Users}
                link={{
                  url: "https://wizards777.medium.com/",
                  text: "Read mentorship insights",
                }}
              />

              <ServiceCard
                title="Educational Content"
                description="Non-profit resources that illuminate complex topics with clarity and purpose. Knowledge shared with both rigor and accessibility."
                icon={BookOpen}
                link={{
                  url: "https://wizards777.medium.com/",
                  text: "Explore articles",
                }}
              />
              <ServiceCard
                title="Collaboration & Investment"
                description="Interested in investing in our ventures, seeking mentorship, product feedback, or web development expertise? I'm open to meaningful collaborations that align with our values."
                icon={Handshake}
                link={{
                  url: "#contact-form",
                  text: "Get in touch",
                }}
              />
            </div>
          </div>
        </section>

        <section id="contact-form" className="py-16 md:py-24 bg-stone-800 text-white">
          <div className="container mx-auto px-5">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Begin Your Journey</h2>
              <p className="text-base md:text-lg text-stone-300 mb-4 md:mb-6 leading-relaxed">
                Whether you're building a legacy, seeking guidance, or simply curious about our approach, we invite you
                to connect with us.
              </p>
            </div>
            <div className="bg-stone-700 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-10 md:py-12">
        <div className="container mx-auto px-5">
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2.5 mb-6">
              <AlchemicalLogo className="h-8 w-8 text-stone-400" />
              <span className="text-sm font-medium tracking-wide text-stone-300">STRONG HANDS, SOFT HEART LLC</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6">
              <Link href="#philosophy" className="text-sm hover:text-stone-300 transition-colors py-2">
                Philosophy
              </Link>
              <Link href="#services" className="text-sm hover:text-stone-300 transition-colors py-2">
                Services
              </Link>
              <Link href="#contact-form" className="text-sm hover:text-stone-300 transition-colors py-2">
                Contact
              </Link>
            </div>
            <div className="text-sm text-center">
              © {new Date().getFullYear()} Strong Hands, Soft Heart LLC. All rights reserved.
            </div>
          </div>

          <div className="border-t border-stone-800 pt-6 md:pt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-stone-500">
            <Link href="/terms-of-service" className="hover:text-stone-400 transition-colors py-2">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-stone-400 transition-colors py-2">
              Privacy Policy
            </Link>
            <Link href="/product-disclaimers" className="hover:text-stone-400 transition-colors py-2">
              Product Disclaimers
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
