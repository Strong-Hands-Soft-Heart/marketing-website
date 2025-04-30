'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { SvgLogo } from '@/components/svg-logo';
import { navigationItems } from '@/config/navigation';
import { NavLink } from '@/components/nav-link';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2.5">
        <SvgLogo className="h-8 w-8" variant="header" />
        <span className="text-base font-medium tracking-wide">SH&SH</span>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button
            className="p-2 rounded-md hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed inset-0 z-50 flex flex-col">
            <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>

            <div className="container mx-auto px-5 py-6 flex justify-between items-center">
              <NavLink
                href="/"
                className="flex items-center gap-2.5"
                onClick={() => setOpen(false)}
              >
                <SvgLogo className="h-8 w-8 text-stone-100" variant="footer" />
                <span className="text-base font-medium tracking-wide text-stone-100">SH&SH</span>
              </NavLink>
              <Dialog.Close asChild>
                <button
                  className="p-2.5 text-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400 rounded-sm"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </Dialog.Close>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-medium text-stone-100 hover:text-stone-300 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="container mx-auto px-5 py-8 text-center">
              <p className="text-stone-400 text-sm">
                © {new Date().getFullYear()} Strong Hands, Soft Heart LLC
              </p>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
