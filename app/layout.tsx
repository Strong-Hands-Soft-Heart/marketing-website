import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { StructuredData } from '@/app/components/structured-data';
import { GoogleAnalytics } from '@/app/components/google-analytics';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: 'Strong Hands, Soft Heart LLC',
    template: '%s | Strong Hands, Soft Heart',
  },
  description:
    'Building enduring legacies through quiet strength and genuine care. Grounded in tradition, guided by compassion. Explore our artisanal craftsmanship, learn about our philosophy, and discover the meaning behind our iconic logo.',
  keywords: [
    'artisanal craftsmanship',
    'traditional methods',
    'sustainable practices',
    'handcrafted goods',
    'quality products',
    'ethical business',
    'heritage skills',
    'community values',
    'SH&SH logo',
    'brand identity',
    'artisanal philosophy',
    'craftsmanship legacy',
  ],
  authors: [{ name: 'Strong Hands, Soft Heart LLC' }],
  creator: 'Strong Hands, Soft Heart LLC',
  publisher: 'Strong Hands, Soft Heart LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.stronghandssoftheart.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.stronghandssoftheart.com',
    title: 'Strong Hands, Soft Heart LLC',
    description:
      'Building enduring legacies through quiet strength and genuine care. Grounded in tradition, guided by compassion. Explore our artisanal craftsmanship and discover the meaning behind our iconic logo.',
    siteName: 'Strong Hands, Soft Heart LLC',
    images: [
      {
        url: '/artisanal-hands.avif',
        width: 1200,
        height: 630,
        alt: 'Artisanal hands crafting with care and tradition',
      },
      {
        url: '/logo.svg',
        width: 512,
        height: 512,
        alt: 'Strong Hands, Soft Heart Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strong Hands, Soft Heart LLC',
    description:
      'Building enduring legacies through quiet strength and genuine care. Grounded in tradition, guided by compassion. Explore our artisanal craftsmanship and discover the meaning behind our iconic logo.',
    images: ['/artisanal-hands.avif', '/logo.svg'],
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
    google: 'G-B11WKDN29L',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-512.svg', type: 'image/svg+xml', sizes: '512x512' },
    ],
    apple: [{ url: '/favicon.svg', sizes: '512x512' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#000000',
      },
    ],
  },
  manifest: '/manifest.json',
  category: 'craftsmanship',
  applicationName: 'Strong Hands, Soft Heart LLC',
  appleWebApp: {
    capable: true,
    title: 'Strong Hands, Soft Heart LLC',
    statusBarStyle: 'default',
  },
  other: {
    version: '1.2.0',
    'last-modified': '2024-04-28',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <GoogleAnalytics />
      </head>
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
  );
}
