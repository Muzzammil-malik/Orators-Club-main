'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from '@/components/motion/reveal';

const aboutParagraphs = [
  "Established in 2003 by the Department of English at MJCET and revived with fresh energy in 2009, the Orators' Club has grown into one of the most active and beloved student organisations on campus.",
  "It is a one-of-a-kind platform where engineering students step beyond equations and algorithms to master the art of expression — building oratory skill, communication finesse, and the soft skills that set leaders apart.",
  "From formal events like Debates, Group Discussions, Elocution, Essay Writing, Mock Interviews, and PowerPoint Presentations, to creative pursuits including Poster Making, Slogan Writing, Picture Perception, and Photography — the club offers something for every voice waiting to be heard. Members don't just build language and reasoning skills; they cultivate creative thinking, leadership, and civic responsibility. With numerous awards at intercollegiate and state-level competitions, joining the Orators' Club is the first step toward conquering stage fear, breaking self-doubt, and preparing yourself for the professional world.",
];

export default function About() {
  const [eventsExpanded, setEventsExpanded] = useState(false);

  return (
    <section id="about" className="relative section-pad">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow block mb-6">About the Club</span>
              <div className="display-text text-[5rem] md:text-[6rem] lg:text-[7rem] leading-none text-brand">
                2003
              </div>
              <div className="font-nav text-sm tracking-[0.2em] uppercase text-muted-foreground mt-3">
                Established
              </div>
              <div className="relative mt-8 aspect-square w-32 overflow-hidden rounded-2xl border border-border bg-black p-2 md:w-40">
                <Image
                  src="/logo-dark.png"
                  alt="Orators' Club MJCET logo"
                  fill
                  sizes="(min-width: 768px) 160px, 128px"
                  className="rounded-xl object-contain p-2"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 hidden lg:block">
                <a
                  href="#about-more"
                  className="link-underline font-nav text-sm font-medium text-foreground"
                >
                  Read More →
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="max-w-2xl space-y-6">
              {aboutParagraphs.map((para, i) => (
                <Reveal key={i} delay={0.1 * (i + 1)}>
                  <p
                    className={
                      i === 0
                        ? 'font-serif text-2xl md:text-3xl leading-[1.3] text-foreground text-balance'
                        : 'text-base md:text-lg text-muted-foreground leading-relaxed text-pretty'
                    }
                  >
                    {i === 2 ? (
                      <>
                        {para.slice(0, para.indexOf('waiting t') + 'waiting t'.length)}
                        {eventsExpanded ? (
                          <span id="about-events-more">{para.slice(para.indexOf('waiting t') + 'waiting t'.length)}</span>
                        ) : (
                          '…'
                        )}{' '}
                        <button
                          type="button"
                          aria-expanded={eventsExpanded}
                          aria-controls="about-events-more"
                          onClick={() => setEventsExpanded((expanded) => !expanded)}
                          className="link-underline font-nav text-sm font-medium text-foreground"
                        >
                          {eventsExpanded ? 'Read less' : 'Read more'}
                        </button>
                      </>
                    ) : (
                      para
                    )}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={0.5}>
                <a
                  href="#about-more"
                  className="lg:hidden link-underline font-nav text-sm font-medium text-foreground mt-4 inline-block"
                >
                  Read More →
                </a>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="hairline mt-20 lg:mt-28" />

        {/* Faculty Coordinator */}
        <div id="about-more" className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border bg-surface">
                <Image
                  src="/faculty.jpg"
                  alt="Faculty Coordinator Prof. Dr. Shabana Tahniyat"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="rounded-xl object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow block mb-6">Faculty Coordinator</span>
              <h3 className="display-text text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
                Prof. Dr. Shabana Tahniyat
              </h3>
              <p className="mt-4 font-nav text-sm tracking-wide text-muted-foreground">
                Associate Professor · Department of English · MJCET
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground text-pretty max-w-xl">
                With over 27 years of academic experience and a deep passion for English Language and Literature, Dr. Shabana Thayniath brings invaluable guidance, wisdom, and encouragement to Orators&apos; Club MJCET. As our Faculty Coordinator, she continues to inspire students to find their voices, refine their expression, and communicate with confidence. Her unwavering support and mentorship remain an integral part of our journey.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}