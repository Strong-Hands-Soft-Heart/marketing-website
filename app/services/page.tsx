import Link from "next/link"
import Image from "next/image"
import { Beaker, Code, Headphones, BookOpen, Users, ArrowLeft } from "lucide-react"
import { AlchemicalLogo } from "@/components/alchemical-logo"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="container mx-auto py-8 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href="/">
            <AlchemicalLogo className="h-10 w-10 text-stone-900" />
          </Link>
          <span className="text-lg font-medium tracking-wide">SHSH</span>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link
                href="/#philosophy"
                className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors"
              >
                Philosophy
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#contact-form"
                className="text-sm uppercase tracking-wider hover:text-stone-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12">
        <Link href="/" className="inline-flex items-center text-stone-700 hover:text-stone-900 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-12">Our Services</h1>

        <div className="space-y-24">
          {/* Artisanal Soap */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center bg-stone-200 p-4 rounded-sm mb-6">
                <Beaker className="h-8 w-8 text-stone-700" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Artisanal Soap</h2>
              <div className="inline-block bg-stone-200 text-stone-700 text-sm font-medium px-3 py-1 rounded-sm mb-6">
                Launching 2026
              </div>
              <p className="text-lg text-stone-700 mb-4 leading-relaxed">
                Our handcrafted soaps embody our philosophy of strength and care. Made with organic, non-GMO
                ingredients, each bar represents our commitment to purity and craftsmanship.
              </p>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                We approach soapmaking as an ancient art form—combining scientific precision with artisanal care. The
                result is not just a cleansing product, but an experience that honors both body and earth.
              </p>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium uppercase tracking-wider text-stone-500">Features:</span>
                <ul className="list-disc list-inside space-y-2 text-stone-700">
                  <li>100% organic ingredients</li>
                  <li>Non-GMO formulations</li>
                  <li>Sustainable packaging</li>
                  <li>Small-batch production</li>
                  <li>Traditional cold-process method</li>
                </ul>
              </div>
            </div>
            <div className="relative h-80 md:h-96 bg-stone-200 rounded-sm overflow-hidden">
              <Image src="/herbal-soap-display.png" alt="Handcrafted artisanal soap" fill className="object-cover" />
            </div>
          </section>

          {/* Heavy Metal Music */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-80 md:h-96 bg-stone-200 rounded-sm overflow-hidden">
              <Image src="/studio-metal-session.png" alt="Heavy metal music production" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center bg-stone-200 p-4 rounded-sm mb-6">
                <Headphones className="h-8 w-8 text-stone-700" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Heavy Metal Music</h2>
              <div className="inline-block bg-stone-200 text-stone-700 text-sm font-medium px-3 py-1 rounded-sm mb-6">
                In production!
              </div>
              <p className="text-lg text-stone-700 mb-4 leading-relaxed">
                Our musical expression channels raw power through technical precision and emotional depth. We create
                heavy metal that resonates with both force and feeling.
              </p>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Like the blacksmith who forges metal with both strength and finesse, our compositions balance intensity
                with nuance, heaviness with harmony.
              </p>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium uppercase tracking-wider text-stone-500">Approach:</span>
                <ul className="list-disc list-inside space-y-2 text-stone-700">
                  <li>Collaborative composition process</li>
                  <li>Technical proficiency with emotional authenticity</li>
                  <li>Thematic exploration of endurance and resilience</li>
                  <li>Independent production and distribution</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Custom Programming */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center bg-stone-200 p-4 rounded-sm mb-6">
                <Code className="h-8 w-8 text-stone-700" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Custom Programming</h2>
              <p className="text-lg text-stone-700 mb-4 leading-relaxed">
                Through{" "}
                <a
                  href="https://builds.software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-stone-900 hover:underline inline-flex items-center"
                >
                  builds.software
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
                , we craft bespoke digital solutions that combine robust architecture with intuitive interfaces.
              </p>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Our approach to software development mirrors our overall philosophy—building with both technical
                excellence and human understanding. We create digital tools that endure and adapt, just as a
                well-crafted physical tool serves generations.
              </p>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium uppercase tracking-wider text-stone-500">Services:</span>
                <ul className="list-disc list-inside space-y-2 text-stone-700">
                  <li>Custom web application development</li>
                  <li>Legacy system modernization</li>
                  <li>API design and integration</li>
                  <li>Technical consultation and architecture</li>
                  <li>Maintenance and evolution of existing systems</li>
                </ul>
              </div>
            </div>
            <div className="relative h-80 md:h-96 bg-stone-200 rounded-sm overflow-hidden">
              <Image src="/minimal-code-desk.png" alt="Custom programming services" fill className="object-cover" />
            </div>
          </section>

          {/* Mentorship */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-80 md:h-96 bg-stone-200 rounded-sm overflow-hidden">
              <Image src="/lakeside-wisdom.png" alt="Mentorship for young men" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center bg-stone-200 p-4 rounded-sm mb-6">
                <Users className="h-8 w-8 text-stone-700" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Mentorship</h2>
              <p className="text-lg text-stone-700 mb-4 leading-relaxed">
                We provide guidance for young men navigating their path to adulthood and purpose. Our mentorship builds
                character through shared wisdom, faced challenges, and realized potential.
              </p>
              <div className="mb-6">
                <a
                  href="https://wizards777.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-stone-300 bg-stone-100 text-stone-800 rounded-sm hover:bg-stone-200 transition-colors"
                >
                  Read mentorship insights on our blog
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Like the master craftsman who teaches an apprentice not just techniques but ways of seeing and being,
                our mentorship focuses on both practical skills and foundational principles.
              </p>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium uppercase tracking-wider text-stone-500">Focus Areas:</span>
                <ul className="list-disc list-inside space-y-2 text-stone-700">
                  <li>Personal responsibility and agency</li>
                  <li>Skill development and craftsmanship</li>
                  <li>Emotional resilience and regulation</li>
                  <li>Purpose discovery and pursuit</li>
                  <li>Community engagement and contribution</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Educational Content */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center bg-stone-200 p-4 rounded-sm mb-6">
                <BookOpen className="h-8 w-8 text-stone-700" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Educational Content</h2>
              <p className="text-lg text-stone-700 mb-4 leading-relaxed">
                We create non-profit educational resources that illuminate complex topics with clarity and purpose. Our
                content shares knowledge with both intellectual rigor and accessible presentation.
              </p>
              <div className="mb-6">
                <a
                  href="https://wizards777.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-stone-300 bg-stone-100 text-stone-800 rounded-sm hover:bg-stone-200 transition-colors"
                >
                  Explore our articles on Medium
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Like the scholar who translates ancient wisdom for contemporary understanding, we bridge gaps between
                specialized knowledge and practical application.
              </p>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium uppercase tracking-wider text-stone-500">Content Types:</span>
                <ul className="list-disc list-inside space-y-2 text-stone-700">
                  <li>In-depth written guides and essays</li>
                  <li>Instructional videos and demonstrations</li>
                  <li>Interactive learning resources</li>
                  <li>Community workshops and discussions</li>
                  <li>Open-source educational materials</li>
                </ul>
              </div>
            </div>
            <div className="relative h-80 md:h-96 bg-stone-200 rounded-sm overflow-hidden">
              <Image
                src="/handwritten-notes-open-book.png"
                alt="Educational content creation"
                fill
                className="object-cover"
              />
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <AlchemicalLogo className="h-8 w-8 text-stone-400" />
              <span className="text-sm font-medium tracking-wide text-stone-300">STRONG HANDS, SOFT HEART LLC</span>
            </div>
            <div className="flex gap-8 mb-6 md:mb-0">
              <Link href="/#philosophy" className="text-sm hover:text-stone-300 transition-colors">
                Philosophy
              </Link>
              <Link href="/#services" className="text-sm hover:text-stone-300 transition-colors">
                Services
              </Link>
              <Link href="/#contact-form" className="text-sm hover:text-stone-300 transition-colors">
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
