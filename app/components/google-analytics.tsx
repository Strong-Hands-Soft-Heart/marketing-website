'use client';

import Script from 'next/script';

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B11WKDN29L"
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Failed to load Google Analytics script:', e);
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Analytics script loaded successfully');
        }}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B11WKDN29L', {
            debug_mode: true,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
