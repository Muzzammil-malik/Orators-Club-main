import Reveal from '@/components/motion/reveal';
import { Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  mail: Mail,
};

export default function Connect() {
  return (
    <section id="contact" className="relative section-pad">
      <div className="container-prose text-center">
        <Reveal>
          <span className="eyebrow block mb-6">Connect With Us</span>
          <h2 className="display-text text-3xl md:text-5xl text-foreground text-balance">
            Follow our story. Join the conversation.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex items-center justify-center gap-4 md:gap-6">
            {SOCIAL_LINKS.map((s) => {
              const Icon = iconMap[s.icon] ?? Mail;
              return (
                <a
                  key={s.id}
                  href={s.href}
                  aria-label={s.label}
                  className="group flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-400 hover:border-brand hover:text-brand hover:shadow-[0_0_24px_-4px_hsl(var(--brand)/0.4)]"
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}