import type {Metadata} from 'next';
// The theme's font stylesheet loads Inter 400 only; these are the heavier weights the type scale uses.
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/800.css';
import './globals.css';
import {Providers} from './providers';
import {SiteNav} from '@/components/SiteNav';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';

export const metadata: Metadata = {
  title: 'Keisha',
  description: 'Portfolio of Keisha',
};

export default function RootLayout({children}: LayoutProps<'/'>) {
  return (
    <html lang="en">
      {/* Browser extensions (e.g. ColorZilla's cz-shortcut-listen) add attributes to body before React hydrates. */}
      <body suppressHydrationWarning>
        <Providers>
          <header>
            {/* Same max width as the page content; 16px here plus the nav's own 8px lines its edges up with the 24px content gutter. */}
            <VStack hAlign="center">
              <VStack width="100%" maxWidth={1200} paddingInline={4}>
                <SiteNav />
              </VStack>
            </VStack>
          </header>
          <main>{children}</main>
          <footer>
            <HStack hAlign="center" paddingBlock={8} paddingInline={6}>
              <Text type="supporting">© Keisha</Text>
            </HStack>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
