import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { StructuredData } from '@/app/components/structured-data';
import { GoogleAnalytics } from '@/app/components/google-analytics';
import { defaultMetadata } from './metadata';
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
  ...defaultMetadata,
  metadataBase: new URL('https://www.stronghandssoftheart.com'),
  alternates: {
    canonical: '/',
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
