'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/motion/reveal';

export default function FinalCTA() {
  return (
    <section id="join" className="relative section-pad overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 55% 65% at 50% 60%, hsl(var(--brand) / 0.16), transparent 70%), radial-gradient(ellipse 30% 40% at 50% 100%, hsl(var(--brand) / 0.08), transparent 60%)',
        }}
      />

      <div className="container-wide text-center">
        <Reveal>
          <span className="eyebrow block mb-8">The Grand Finale</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display-text text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] text-foreground text-balance mx-auto max-w-5xl">
            Ready to{' '}
            <span className="italic text-brand">dominate</span>
            <br />
            the stage?
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground text-pretty max-w-xl mx-auto">
            Find your voice. Own the spotlight. Become part of something bigger.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#membership"
              className="group relative inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-nav text-sm font-semibold text-brand-foreground transition-all duration-400 hover:scale-[1.03]"
            >
              APPLY FOR MEMBERSHIP
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#core-team"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-nav text-sm font-semibold text-foreground transition-all duration-400 hover:border-brand hover:text-brand hover:scale-[1.03]"
            >
              JOIN THE CORE TEAM
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}