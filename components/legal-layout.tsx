import type React from "react"
import Link from "next/link"
import { AlchemicalLogo } from "@/components/alchemical-logo"
import { ArrowLeft } from "lucide-react"

interface LegalLayoutProps {
  children: React.ReactNode
  title: string
  lastUpdated: string
}

export function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
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

      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <Link href="/" className="inline-flex items-center text-stone-700 hover:text-stone-900 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-sm text-stone-500 mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose prose-stone max-w-none">{children}</div>
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
