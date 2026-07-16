import { siGmail, siGooglecalendar } from 'simple-icons';

import { cn } from '@/lib/utils';

const SLACK_PATH =
  'M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z';

export type IntegrationProvider = 'slack' | 'granola' | 'gmail' | 'google_calendar' | 'outlook';

interface IntegrationLogosProps {
  size?: number;
  provider: IntegrationProvider;
  className?: string;
}

const simpleIconMap = {
  gmail: siGmail,
  google_calendar: siGooglecalendar,
} as const;

export function IntegrationLogos({ size = 24, provider, className }: IntegrationLogosProps) {
  if (provider === 'slack') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="Slack" className={cn('text-current', className)}>
        <title>Slack</title>
        <path d={SLACK_PATH} fill="currentColor" />
      </svg>
    );
  }

  if (provider === 'granola') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="Granola" className={cn('text-current', className)}>
        <title>Granola</title>
        <rect x="2" y="2" width="20" height="20" rx="6" fill="currentColor" opacity="0.16" />
        <path d="M16.9 8.2a6 6 0 1 0 .1 7.4v-4h-5.1v2.3h2.5a3.2 3.2 0 1 1 .2-4.1l2.3-1.6Z" fill="currentColor" />
      </svg>
    );
  }

  if (provider === 'outlook') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="Outlook Calendar" className={cn('text-current', className)}>
        <title>Outlook Calendar</title>
        <rect x="3" y="4" width="13" height="16" rx="2.5" fill="currentColor" opacity="0.18" />
        <path d="M9.5 7.2c-2.3 0-3.8 1.8-3.8 4.8s1.5 4.8 3.8 4.8 3.8-1.8 3.8-4.8-1.5-4.8-3.8-4.8Zm0 2.2c.9 0 1.4.9 1.4 2.6s-.5 2.6-1.4 2.6-1.4-.9-1.4-2.6.5-2.6 1.4-2.6Z" fill="currentColor" />
        <path d="m14 8 7-1v10l-7-1.2V8Z" fill="currentColor" />
      </svg>
    );
  }

  const icon = simpleIconMap[provider];

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label={icon.title} className={cn('text-current', className)}>
      <title>{icon.title}</title>
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
