'use client';

import Reveal from '@/components/motion/reveal';
import { useCountUp } from '@/hooks/use-count-up';
import { STATS } from '@/lib/data';

function StatItem({ stat, index }: { stat: typeof STATS[number]; index: number }) {
  const { ref, value } = useCountUp(stat.value, 2200);

  return (
    <Reveal delay={0.12 * index}>
      <div className="text-center">
        <span ref={ref} className="block display-text text-5xl md:text-6xl lg:text-7xl text-foreground tabular-nums">
          {value}
          <span className="text-brand">{stat.suffix}</span>
        </span>
        <span className="mt-4 block font-nav text-xs md:text-sm tracking-[0.18em] uppercase text-muted-foreground">
          {stat.label}
        </span>
      </div>
    </Reveal>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-16 md:py-20 border-y border-border">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <StatItem key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}