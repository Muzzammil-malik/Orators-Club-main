'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/motion/reveal';
import { ACTIVITIES } from '@/lib/data';
import { ACTIVITY_IMAGES } from '@/lib/images';

export default function Activities() {
  return (
    <section className="relative section-pad">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <Reveal>
            <span className="eyebrow block mb-4">What We Do</span>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-foreground text-balance max-w-xl">
              Activities that shape every voice.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground max-w-sm text-pretty">
              From the stage to the page, our members build skill through practice, performance, and creative expression.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {ACTIVITIES.map((act, i) => (
            <Reveal key={act.id} delay={0.08 * (i % 3)}>
              <motion.article
                className={`group relative overflow-hidden rounded-sm bg-surface border border-border ${
                  i === 0 ? 'md:col-span-2 md:row-span-1' : ''
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={ACTIVITY_IMAGES[act.id]}
                    alt={act.title}
                    className="h-full w-full object-cover grayscale-[0.3] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-foreground leading-tight">{act.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty max-w-xs">
                        {act.description}
                      </p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:bg-brand group-hover:border-brand group-hover:text-brand-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}