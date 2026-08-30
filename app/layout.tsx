import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IGNITE 2026 | Gulzar Group of Institutes',
  description: 'A 24-hour innovation hackathon by Gulzar Group of Institutes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
