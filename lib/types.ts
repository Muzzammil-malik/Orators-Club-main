export type EventStatus = 'upcoming' | 'live' | 'past' | 'tba';

export interface ClubEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  registrationUrl?: string;
  status: EventStatus;
  category: string;
}

export interface Announcement {
  id: string;
  text: string;
  date: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  query: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
