import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://usecanon.com'),
  title: {
    default: 'Canon | Technical GTM Readiness',
    template: '%s | Canon',
  },
  description:
    'Turn changing company context into role-specific ramp plans, meeting briefings, readiness actions, and verified progress.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
