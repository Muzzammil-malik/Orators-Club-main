'use client';

import { Megaphone, Dot } from 'lucide-react';
import { ANNOUNCEMENTS } from '@/lib/data';

export default function Announcements() {
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS, ...ANNOUNCEMENTS];

  return (
    <section id="announcements" className="relative border-y border-border bg-surface py-10 overflow-hidden">
      <div className="container-wide mb-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Megaphone className="h-4 w-4 text-brand" />
          <span className="font-nav text-xs tracking-[0.2em] uppercase">Announcements</span>
        </div>
      </div>
      <div className="relative mask-fade-x">
        <div className="animate-marquee marquee-track">
          {items.map((ann, i) => (
            <span key={`${ann.id}-${i}`} className="inline-flex items-center">
              <span className="font-serif text-xl md:text-2xl text-foreground px-8">
                {ann.text}
              </span>
              <Dot className="h-6 w-6 text-brand" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}