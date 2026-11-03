'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Reveal from '@/components/motion/reveal';
import { GALLERY_IMAGES } from '@/lib/images';

const galleryLayout = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative section-pad">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <Reveal>
            <span className="eyebrow block mb-4">Moments</span>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-foreground text-balance max-w-xl">
              The club, in frames.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground max-w-sm text-pretty">
              A glimpse of our events, workshops, and the voices that fill our rooms.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[120px] md:auto-rows-[160px] lg:auto-rows-[180px] gap-3 lg:gap-4">
            {GALLERY_IMAGES.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-sm bg-surface border border-border ${galleryLayout[i % galleryLayout.length]}`}
                aria-label={`Gallery image ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              src={GALLERY_IMAGES[active]}
              alt={`Gallery image ${active + 1}`}
              className="max-h-[85vh] max-w-[90vw] rounded-sm object-contain"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}