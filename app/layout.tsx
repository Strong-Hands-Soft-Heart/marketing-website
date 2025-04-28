import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'Strong Hands, Soft Heart LLC',
    template: '%s | Strong Hands, Soft Heart'
  },
  description: 'Building enduring legacies through quiet strength and genuine care. Grounded in tradition, guided by compassion.',
  keywords: ['artisanal craftsmanship', 'traditional methods', 'sustainable practices', 'handcrafted goods', 'quality products', 'ethical business', 'heritage skills', 'community values'],
  authors: [{ name: 'Strong Hands, Soft Heart LLC' }],
  creator: 'Strong Hands, Soft Heart LLC',
  publisher: 'Strong Hands, Soft Heart LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stronghands-softheart.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stronghands-softheart.com',
    title: 'Strong Hands, Soft Heart LLC',
    description: 'Building enduring legacies through quiet strength and genuine care. Grounded in tradition, guided by compassion.',
    siteName: 'Strong Hands, Soft Heart LLC',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Strong Hands, Soft Heart LLC - Traditional craftsmanship meets modern values',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strong Hands, Soft Heart LLC',
    description: 'Building enduring legacies through quiet strength and genuine care. Grounded in tradition, guided by compassion.',
    images: ['/twitter-image.png'],
    creator: '@stronghands_softheart',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  manifest: '/manifest.json',
  category: 'craftsmanship',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
