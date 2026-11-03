import type {
  Activity,
  Announcement,
  ClubEvent,
  NavItem,
  SocialLink,
  Stat,
  TeamMember,
} from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Our Team', href: '#team' },
  { label: 'Announcements', href: '#announcements' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { id: 'members', label: 'Active Members', value: 50, suffix: '+' },
  { id: 'events', label: 'Events Conducted', value: 200, suffix: '+' },
  { id: 'wins', label: 'Major Wins', value: 12, suffix: '' },
  { id: 'workshops', label: 'Annual Workshops', value: 9, suffix: '' },
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'public-speaking',
    title: 'Public Speaking',
    description: 'Stage presence, persuasion, and the art of holding a room.',
    query: 'public speaker on stage spotlight',
  },
  {
    id: 'debates',
    title: 'Debates & Elocution',
    description: 'Structured argument, rebuttal, and eloquent delivery.',
    query: 'debate competition podium microphone',
  },
  {
    id: 'poster',
    title: 'Poster Making & Photography',
    description: 'Visual storytelling and creative expression off the stage.',
    query: 'poster making art workshop',
  },
  {
    id: 'elocution',
    title: 'Elocution',
    description: 'Articulation, clarity, and command over spoken language.',
    query: 'elocution public speaking microphone',
  },
  {
    id: 'essay',
    title: 'Essay & Creative Writing',
    description: 'The written word as a tool for thought and persuasion.',
    query: 'creative writing notebook pen',
  },
  {
    id: 'mock-interviews',
    title: 'Mock Interviews',
    description: 'Professional readiness through simulated panels.',
    query: 'job interview professional handshake',
  },
];

export const EVENTS: ClubEvent[] = [
  {
    id: 'evt-1',
    title: 'Event details to be announced',
    date: 'TBA',
    description:
      'Our next flagship event is being finalised. Check back soon for the full schedule and registration details.',
    status: 'tba',
    category: 'Featured',
  },
];

export const ANNOUNCEMENTS: Announcement[] = [
  { id: 'ann-1', text: 'Registrations for the 2025–26 core team open soon', date: '2025-11-01' },
  { id: 'ann-2', text: 'Intercollegiate Debate Championship — call for participants', date: '2025-10-28' },
  { id: 'ann-3', text: 'Weekly public speaking workshops every Thursday', date: '2025-10-25' },
  { id: 'ann-4', text: 'Photography contest submissions now being accepted', date: '2025-10-20' },
];

export const GOVERNING_BODY: TeamMember[] = [
  { id: 'gb-1', name: 'To be announced', designation: 'Chief Coordinator' },
  { id: 'gb-2', name: 'To be announced', designation: 'Associate Chief Coordinator' },
  { id: 'gb-3', name: 'To be announced', designation: 'Chief Representative' },
  { id: 'gb-4', name: 'To be announced', designation: 'Chief Representative' },
  { id: 'gb-5', name: 'To be announced', designation: 'Chief Strategist' },
  { id: 'gb-6', name: 'To be announced', designation: 'General Secretary' },
  { id: 'gb-7', name: 'To be announced', designation: 'General Secretary' },
];

export const EXECOM: TeamMember[] = [
  { id: 'ex-1', name: 'To be announced', designation: 'PR Execom' },
  { id: 'ex-2', name: 'To be announced', designation: 'HR Execom' },
  { id: 'ex-3', name: 'To be announced', designation: 'Operations Execom' },
  { id: 'ex-4', name: 'To be announced', designation: 'Media & Editing Execom' },
  { id: 'ex-5', name: 'To be announced', designation: 'Technical Execom' },
  { id: 'ex-6', name: 'To be announced', designation: 'Research Execom' },
  { id: 'ex-7', name: 'To be announced', designation: 'Documentation Execom' },
  { id: 'ex-8', name: 'To be announced', designation: 'Marketing Execom' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'ig', label: 'Instagram', href: '#', icon: 'instagram' },
  { id: 'li', label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { id: 'yt', label: 'YouTube', href: '#', icon: 'youtube' },
  { id: 'mail', label: 'Email', href: 'mailto:oratorsclub@mjcet.ac.in', icon: 'mail' },
];
