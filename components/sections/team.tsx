import Reveal from '@/components/motion/reveal';
import TeamCarousel from './team-carousel';
import { GOVERNING_BODY, EXECOM } from '@/lib/data';

export default function Team() {
  return (
    <section id="team" className="relative section-pad bg-surface">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <span className="eyebrow block mb-4">The People</span>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-foreground text-balance max-w-2xl mx-auto">
              The voices behind the club.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-20 lg:space-y-28">
          <Reveal>
            <TeamCarousel
              members={GOVERNING_BODY}
              eyebrow="Leadership"
              title="Governing Body"
            />
          </Reveal>

          <Reveal>
            <TeamCarousel
              members={EXECOM}
              eyebrow="Operations"
              title="Executive Committee"
              accent
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}