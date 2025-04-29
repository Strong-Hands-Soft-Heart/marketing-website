'use client';

import Script from 'next/script';

export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Strong Hands, Soft Heart LLC',
    description:
      'Building enduring legacies through quiet strength and genuine care. Grounded in tradition, guided by compassion.',
    url: 'https://stronghands-softheart.com',
    logo: 'https://stronghands-softheart.com/icon-512.svg',
    sameAs: ['https://twitter.com/stronghands_softheart'],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
