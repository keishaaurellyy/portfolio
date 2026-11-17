import type {Metadata} from 'next';
import './globals.css';
import {Providers} from './providers';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio',
};

export default function RootLayout({children}: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
