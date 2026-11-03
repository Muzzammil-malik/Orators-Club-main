'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-1 py-1">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Orators' Club MJCET home"
          >
            <Image
              src="/logo-dark.png"
              alt=""
              width={40}
              height={40}
              priority
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
            <span className="font-nav text-[0.8rem] font-semibold tracking-wide leading-none">
              ORATORS&apos; CLUB
              <span className="block text-[0.6rem] font-normal tracking-[0.2em] text-muted-foreground mt-0.5">
                MJCET
              </span>
            </span>
          </a>

          <div className="hidden xl:flex items-center gap-0.5 rounded-full border border-white/10 bg-[#151713]/80 px-2 py-1.5 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.8)] backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                className="rounded-full px-3.5 py-1.5 font-nav text-[0.82rem] font-medium text-muted-foreground transition-colors duration-300 hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#join"
              onClick={(e) => { e.preventDefault(); handleNav('#join'); }}
              className="hidden sm:inline-flex font-nav text-[0.8rem] font-semibold items-center rounded-full bg-brand px-5 py-2 text-brand-foreground hover:bg-brand/90 transition-colors duration-300"
            >
              Join Us
            </a>
            <button
              onClick={() => setOpen(true)}
              className="xl:hidden flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="font-nav text-sm font-semibold tracking-wide">ORATORS&apos; CLUB MJCET</span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-col px-6 pt-10 gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                  className="font-serif text-3xl py-3 border-b border-border/50 text-foreground"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="#join"
              onClick={(e) => { e.preventDefault(); handleNav('#join'); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mx-6 mt-10 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3.5 font-nav font-semibold text-brand-foreground"
            >
              Join Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}