import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Strong Hands, Soft Heart LLC',
  description: 'Building enduring legacies through quiet strength and genuine care. Grounded in tradition, guided by compassion.',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/shsh-square-logo-blackbg-footer.avif', type: 'image/avif' },
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/shsh-square-logo-blackbg-footer.avif', type: 'image/avif' }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
