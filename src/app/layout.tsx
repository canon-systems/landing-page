import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://usecanon.com'),
  title: {
    default: 'Canon | Customer Conversation Readiness',
    template: '%s | Canon',
  },
  description:
    'Turn product changes and customer context into meeting prep, follow-up actions, and faster ramp for customer-facing technical teams.',
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
