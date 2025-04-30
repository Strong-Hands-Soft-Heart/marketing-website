import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'Strong Hands, Soft Heart LLC',
    template: '%s | Strong Hands, Soft Heart',
  },
  description:
    'Building enduring legacies through quiet strength and genuine care. Grounded in tradition, guided by compassion.',
  keywords: [
    'artisanal craftsmanship',
    'traditional methods',
    'sustainable practices',
    'handcrafted goods',
    'quality products',
    'ethical business',
    'heritage skills',
    'community values',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.stronghandssoftheart.com',
    siteName: 'Strong Hands, Soft Heart LLC',
    images: [
      {
        url: '/artisanal-hands.avif',
        width: 1200,
        height: 630,
        alt: 'Artisanal hands crafting with care and tradition',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@stronghands_softheart',
  },
};

export const pageMetadata: Record<string, Metadata> = {
  home: {
    title: 'Home',
    description:
      'Discover artisanal craftsmanship that combines strength and heart. Explore our handcrafted goods, learn about our philosophy, and join our journey of creating lasting legacies.',
    openGraph: {
      title: 'Strong Hands, Soft Heart LLC',
      description:
        'Discover artisanal craftsmanship that combines strength and heart. Explore our handcrafted goods and join our journey.',
    },
  },
  about: {
    title: 'About Us',
    description:
      'Meet the people behind Strong Hands, Soft Heart. Learn about our founder Antonio, our values, and our commitment to family, craft, and legacy.',
    openGraph: {
      title: 'About Us | Strong Hands, Soft Heart',
      description:
        'Meet the people behind Strong Hands, Soft Heart. Learn about our founder Antonio, our values, and our commitment to family, craft, and legacy.',
    },
  },
  logo: {
    title: 'Our Logo',
    description:
      'Discover the meaning and symbolism behind the Strong Hands, Soft Heart logo. Learn how our iconic symbol represents our values and craftsmanship.',
    openGraph: {
      title: 'Our Logo | Strong Hands, Soft Heart',
      description: 'Discover the meaning and symbolism behind the Strong Hands, Soft Heart logo.',
    },
  },
  'terms-of-service': {
    title: 'Terms of Service',
    description:
      'Read our terms of service and understand the legal agreements between Strong Hands, Soft Heart and our customers.',
    openGraph: {
      title: 'Terms of Service | Strong Hands, Soft Heart',
      description: 'Legal agreements and terms of service for Strong Hands, Soft Heart.',
    },
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    description:
      'Learn how Strong Hands, Soft Heart protects your privacy and handles your personal information.',
    openGraph: {
      title: 'Privacy Policy | Strong Hands, Soft Heart',
      description: 'Our commitment to protecting your privacy and personal information.',
    },
  },
  'product-disclaimers': {
    title: 'Product Disclaimers',
    description:
      'Important information about our products, including care instructions, warranties, and safety guidelines.',
    openGraph: {
      title: 'Product Disclaimers | Strong Hands, Soft Heart',
      description: 'Important product information, care instructions, and safety guidelines.',
    },
  },
};
