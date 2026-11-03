import {
  ACTIVITIES,
  ANNOUNCEMENTS,
  EVENTS,
  EXECOM,
  GOVERNING_BODY,
  SOCIAL_LINKS,
  STATS,
} from './data';
import type {
  Activity,
  Announcement,
  ClubEvent,
  SocialLink,
  Stat,
  TeamMember,
} from './types';

export async function getEvents(): Promise<ClubEvent[]> {
  return EVENTS;
}

export async function getAnnouncements(): Promise<Announcement[]> {
  return ANNOUNCEMENTS;
}

export async function getActivities(): Promise<Activity[]> {
  return ACTIVITIES;
}

export async function getStats(): Promise<Stat[]> {
  return STATS;
}

export async function getGoverningBody(): Promise<TeamMember[]> {
  return GOVERNING_BODY;
}

export async function getExecom(): Promise<TeamMember[]> {
  return EXECOM;
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  return SOCIAL_LINKS;
}
