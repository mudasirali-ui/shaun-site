import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HashScroll from '@/components/layout/HashScroll';
import ChatWidget from '@/components/ui/ChatWidget';
import { SITE } from '@/lib/siteData';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: 'website',
    locale: 'en_AU',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async />
      </head>
      <body>
        <div className="site-shell">
          <Header />
          <HashScroll />
          <main>{children}</main>
          <Footer />
        </div>
        <ChatWidget />
      </body>
    </html>
  );
}
