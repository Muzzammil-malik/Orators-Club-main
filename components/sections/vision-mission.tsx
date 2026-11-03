import Reveal from '@/components/motion/reveal';

const objectives = [
  { num: '01', title: 'Making Voices Heard', text: 'Empower individuals to express themselves effectively, regardless of their background or degree of expertise, and boost self-assurance.' },
  { num: '02', title: 'Enhancing Skills', text: 'Offer structured and engaging communicative activities such as public speaking, presentations, group discussions, and debates.' },
  { num: '03', title: 'Diversity and Inclusion', text: 'Cultivate a welcoming community where every individual is appreciated, respected, and heard.' },
  { num: '04', title: 'Lifelong Learning', text: 'Promote continuous growth through resources, workshops, and expert speakers.' },
  { num: '05', title: 'Driving Change', text: 'Encourage members to tackle societal challenges, champion causes, and inspire action.' },
  { num: '06', title: 'Cascading Knowledge', text: 'Create networking opportunities where members share ideas, collaborate, and support one another\'s development.' },
];

export default function VisionMission() {
  return (
    <section className="relative section-pad bg-surface">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Vision */}
          <div className="lg:border-r lg:border-border lg:pr-16">
            <Reveal>
              <span className="eyebrow block mb-6">Vision</span>
              <h2 className="display-text text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
                Empowering speakers with confidence, eloquence, and influence to drive positive change locally and globally.
              </h2>
            </Reveal>
          </div>

          {/* Mission */}
          <div>
            <Reveal>
              <span className="eyebrow block mb-6">Mission</span>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground text-pretty">
                Our goal at the Orators&apos; Club is to provide a conducive learning platform for individuals to hone their communication and public speaking abilities.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Objectives */}
        <div className="mt-20 lg:mt-28">
          <Reveal>
            <span className="eyebrow block mb-10">Our Core Objectives</span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {objectives.map((obj, i) => (
              <Reveal key={obj.num} delay={0.06 * i}>
                <div className="group relative bg-background p-8 lg:p-10 h-full transition-colors duration-500 hover:bg-surface">
                  <span className="font-serif text-sm text-brand/70 tabular-nums">{obj.num}</span>
                  <h3 className="mt-4 font-serif text-xl lg:text-2xl text-foreground">{obj.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-pretty">{obj.text}</p>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-brand transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}