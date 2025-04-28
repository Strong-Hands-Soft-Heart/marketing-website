import Image from "next/image"
import Link from "next/link"
import { AlchemicalLogo } from "@/components/alchemical-logo"
import { Beaker, Code, Headphones, BookOpen, Users, Handshake } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"

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
              <Link
                href="#philosophy"
                className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors"
              >
                Philosophy
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#contact-form"
                className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors"
              >
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

        <section id="services" className="py-24 bg-stone-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Crafts</h2>
              <p className="text-lg text-stone-700 max-w-2xl mx-auto">
                Diverse expressions of the same philosophy: strength in execution, care in approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <section id="contact-form" className="py-24 bg-stone-900 text-stone-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-8">Begin Your Journey</h2>
              <p className="text-lg text-stone-300 mb-6 leading-relaxed">
                Whether you're building a legacy, seeking guidance, or simply curious about our approach, we invite you
                to connect with us.
              </p>
            </div>
            <div className="bg-stone-800 p-8 md:p-12 rounded-sm">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <AlchemicalLogo className="h-8 w-8 text-stone-400" />
              <span className="text-sm font-medium tracking-wide text-stone-300">STRONG HANDS, SOFT HEART LLC</span>
            </div>
            <div className="flex gap-8 mb-6 md:mb-0">
              <Link href="#philosophy" className="text-sm hover:text-stone-300 transition-colors">
                Philosophy
              </Link>
              <Link href="#services" className="text-sm hover:text-stone-300 transition-colors">
                Services
              </Link>
              <Link href="#contact-form" className="text-sm hover:text-stone-300 transition-colors">
                Contact
              </Link>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} Strong Hands, Soft Heart LLC. All rights reserved.
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs text-stone-500">
            <Link href="/terms-of-service" className="hover:text-stone-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-stone-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/product-disclaimers" className="hover:text-stone-400 transition-colors">
              Product Disclaimers
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
