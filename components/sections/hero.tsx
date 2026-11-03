'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Orb from '@/components/ui/orb';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative flex min-h-screen items-center justify-center overflow-hidden spotlight"
    >
      <div className="hero-visual pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(12, 12, 10, 0.3), rgba(12, 12, 10, 0.52)), url('/golden-debate-stage.png')",
          }}
        />
        <Orb
          colors={['#10b981', '#84cc16', '#063b3a']}
          hoverIntensity={1}
          trail={1}
          rotateOnHover
          followCursor
          wobble={1.5}
          speed={0.8}
          backgroundColor="transparent"
          className="hero-orb"
        />
      </div>

      <div className="hero-content container-wide relative z-10 pt-32 pb-24 flex flex-col items-center text-center">
        <motion.span
          className="hero-department eyebrow block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Department of English · MJCET · Est. 2003
        </motion.span>

        <h1 className="hero-title display-text mt-10 text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] text-balance">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Where Voices Rise.
          </motion.span>
          <motion.span
            className="block italic text-brand"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            Leaders Are Born.
          </motion.span>
        </h1>

        <motion.p
          className="hero-subtitle mt-10 max-w-xl text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Empowering speakers with confidence, eloquence, and influence.
        </motion.p>

        <motion.div
          className="hero-actions mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#join"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-nav text-sm font-semibold text-brand-foreground transition-all duration-300 hover:gap-3 hover:bg-brand/90"
          >
            Join the Club
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#events"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-nav text-sm font-semibold text-foreground transition-all duration-300 hover:border-brand hover:text-brand"
          >
            Explore Events
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span className="font-nav text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-brand to-transparent" />
      </motion.div>
    </section>
  );
}