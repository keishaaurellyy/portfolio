import type {Metadata} from 'next';
// The theme's font stylesheet loads Inter 400 only; these are the heavier weights the type scale uses.
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/800.css';
import './globals.css';
import {Providers} from './providers';
import {SITE_DESCRIPTION, SITE_TITLE, SITE_URL} from '@/site';
import {HStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {canonical: '/'},
  openGraph: {type: 'website', url: '/', siteName: SITE_TITLE, title: SITE_TITLE, description: SITE_DESCRIPTION},
  twitter: {card: 'summary_large_image', title: SITE_TITLE, description: SITE_DESCRIPTION},
};

export default function RootLayout({children}: LayoutProps<'/'>) {
  return (
    <html lang="en">
      {/* Browser extensions (e.g. ColorZilla's cz-shortcut-listen) add attributes to body before React hydrates. */}
      <body suppressHydrationWarning>
        <Providers>
          {/* No site header: the page opens with the name and the Email me button, which a nav would only repeat. */}
          <main>{children}</main>
          <footer>
            <HStack hAlign="center" paddingBlock={8} paddingInline={6}>
              <Text type="supporting">© Keisha Aurelly</Text>
            </HStack>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
