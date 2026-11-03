'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { TeamMember } from '@/lib/types';

interface TeamCarouselProps {
  members: TeamMember[];
  eyebrow: string;
  title: string;
  accent?: boolean;
}

export default function TeamCarousel({ members, eyebrow, title, accent }: TeamCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  const itemWidth = 280;
  const gap = 20;
  const step = itemWidth + gap;

  const advance = useCallback(() => {
    setOffset((prev) => {
      const max = members.length * step;
      return Math.abs(prev) >= max - step ? 0 : prev - step;
    });
  }, [members.length, step]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(advance, 3500);
    return () => clearInterval(id);
  }, [paused, advance]);

  const goLeft = () => setOffset((p) => (p === 0 ? -(members.length - 1) * step : p + step));
  const goRight = () => advance();

  return (
    <div className={accent ? '' : ''}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="eyebrow block mb-3">{eyebrow}</span>
          <h3 className="display-text text-3xl md:text-4xl text-foreground">{title}</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={goLeft}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-brand hover:border-brand hover:text-brand-foreground"
            aria-label="Previous"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={goRight}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-brand hover:border-brand hover:text-brand-foreground"
            aria-label="Next"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden mask-fade-x"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          ref={trackRef}
          className="flex gap-5"
          animate={{ x: offset }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {[...members, ...members].map((m, i) => (
            <div
              key={`${m.id}-${i}`}
              className="shrink-0"
              style={{ width: itemWidth }}
            >
              <div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-surface border border-border">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-muted-foreground">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border">
                    <span className="font-serif text-2xl text-brand">
                      {m.designation.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <p className="font-nav text-[0.65rem] tracking-[0.2em] uppercase text-center px-6">
                    Member photograph
                    <br />
                    to be provided
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-4 pt-12">
                  <h4 className="font-serif text-lg text-foreground leading-tight">{m.name}</h4>
                  <p className="mt-1 font-nav text-xs tracking-wide text-brand">{m.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}