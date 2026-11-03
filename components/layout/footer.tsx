import Image from 'next/image';
import { Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  mail: Mail,
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface pt-20 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-dark.png"
                alt=""
                width={48}
                height={48}
                className="h-11 w-11 shrink-0 rounded-full object-cover"
              />
              <span className="font-nav text-sm font-semibold tracking-wide leading-none">
                ORATORS&apos; CLUB
                <span className="block text-[0.65rem] font-normal tracking-[0.2em] text-muted-foreground mt-1">
                  MJCET · DEPT OF ENGLISH
                </span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed text-pretty max-w-sm">
              Empowering speakers with confidence, eloquence, and influence since 2003. A one-of-a-kind platform where engineering students master the art of expression.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <span className="font-nav text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-5">
              Navigate
            </span>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-nav text-sm text-foreground transition-colors hover:text-brand link-underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <span className="font-nav text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-5">
              Contact
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Department of English
              <br />
              Muffakham Jah College of Engineering &amp; Technology
              <br />
              Hyderabad, Telangana
            </p>
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map((s) => {
                const Icon = iconMap[s.icon] ?? Mail;
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-brand hover:text-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hairline mt-16 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-nav text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Orators&apos; Club, MJCET. All rights reserved.
          </p>
          <p className="font-nav text-xs text-muted-foreground tracking-wide">
            Department of English · Established 2003
          </p>
        </div>
      </div>
    </footer>
  );
}