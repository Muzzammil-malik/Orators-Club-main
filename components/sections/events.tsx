import Reveal from '@/components/motion/reveal';
import { Calendar, ArrowUpRight, Clock } from 'lucide-react';
import { EVENTS } from '@/lib/data';

const statusStyles: Record<string, string> = {
  upcoming: 'bg-brand text-brand-foreground',
  live: 'bg-red-500 text-white',
  past: 'bg-muted text-muted-foreground',
  tba: 'border border-border text-muted-foreground',
};

export default function Events() {
  return (
    <section id="events" className="relative section-pad bg-surface">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <Reveal>
            <span className="eyebrow block mb-4">Upcoming & Recent</span>
            <h2 className="display-text text-4xl md:text-5xl lg:text-6xl text-foreground text-balance max-w-xl">
              Events on the horizon.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground max-w-sm text-pretty">
              Registration links will appear here as each event is confirmed. Check back for the full calendar.
            </p>
          </Reveal>
        </div>

        <div className="space-y-px bg-border rounded-sm overflow-hidden border border-border">
          {EVENTS.map((evt, i) => (
            <Reveal key={evt.id} delay={0.08 * i}>
              <article className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 bg-background p-6 md:p-8 transition-colors duration-400 hover:bg-surface">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-brand" />
                    <span className="font-nav text-sm font-medium tracking-wide">{evt.date}</span>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground leading-tight">{evt.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty max-w-md">{evt.description}</p>
                </div>
                <div className="md:col-span-2 flex md:items-center">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-nav text-[0.7rem] font-semibold tracking-wide ${statusStyles[evt.status]}`}>
                    <Clock className="h-3 w-3" />
                    {evt.status.toUpperCase()}
                  </span>
                </div>
                <div className="md:col-span-2 flex md:items-center md:justify-end">
                  {evt.registrationUrl ? (
                    <a
                      href={evt.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-nav text-sm font-semibold text-foreground transition-colors hover:text-brand"
                    >
                      Register <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-nav text-sm text-muted-foreground/70">
                      Opens soon
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}