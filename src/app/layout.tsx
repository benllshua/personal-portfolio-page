import { Metadata } from 'next';
import { ReactNode } from 'react';
import '../theme/globals.css';

interface Props {
  children: ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <html lang={'en'} dir={'ltr'}>
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'BenllShua Portfolio | Ben Shua',
  description:
    'I can bring your project from 0 to 100. By offering experience in all product build parts, from identifying & designing to development & deployment, including proper management skills.',
  viewport: {
    initialScale: 1,
    width: 'device-width',
  },
  icons: '/images/logo.png',
  authors: { name: 'Ben Shua', url: 'benllshua.com' },
  robots: 'index, follow',
  keywords: [
    'Ben',
    'BEN',
    'SHUA',
    'shua',
    'benllshua',
    'BenllShua',
    'בן',
    'שועה',
    'portfolio',
    'development',
    'team',
    'illustrations',
    'management',
    'design',
    'information',
    'skills',
    'portfolio',
  ],
};
