export const CONSULTING_URL = 'https://consulting.stronghandssoftheart.com/' as const;

export const navigationItems = [
  { href: CONSULTING_URL, label: 'Consulting', external: true },
  { href: '/about', label: 'About', external: false },
  { href: '/#philosophy', label: 'Philosophy', external: false },
  { href: '/#what-we-do', label: 'What We Do', external: false },
  { href: '/#contact-form', label: 'Contact', external: false },
] as const;
