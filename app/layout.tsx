import type { Metadata, Viewport } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

// --- SEO / Metadata ---
export const metadata: Metadata = {
  metadataBase: new URL('https://www.scienceofdesign.io'),
  title: {
    default: 'Science of Design by Christina Alchus',
    template: '%s · Science of Design',
  },
  description:
    'UX & Product Design leadership portfolio focused on modernizing complex, multi-product ecosystems with clear decision mechanisms and measurable outcomes.',
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Science of Design by Christina Alchus',
    description:
      'UX & Product Design leadership portfolio focused on modernizing complex, multi-product ecosystems.',
    siteName: 'Science of Design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Science of Design by Christina Alchus',
    description:
      'UX & Product Design leadership portfolio focused on modernizing complex systems.',
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  themeColor: '#f43a09', // Brightly Orange Number 2
  colorScheme: 'light',
};

// NOTE: Layout is a Server Component; Header/Footer are Client Components.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Accessible skip link */}
        <a
          href="#main"
          style={{
            position: 'absolute',
            left: -9999,
            top: 'auto',
            width: 1,
            height: 1,
            overflow: 'hidden',
          }}
          onFocus={(e) => {
            const el = e.currentTarget;
            el.style.left = '16px';
            el.style.top = '16px';
            el.style.width = 'auto';
            el.style.height = 'auto';
            el.style.zIndex = '9999';
            el.style.padding = '8px 12px';
            el.style.background = '#fff';
            el.style.border = '1px solid #e5e7eb';
            el.style.borderRadius = '8px';
          }}
          onBlur={(e) => {
            const el = e.currentTarget;
            el.style.left = '-9999px';
            el.style.top = 'auto';
            el.style.width = '1px';
            el.style.height = '1px';
          }}
        >
          Skip to content
        </a>

        <ThemeRegistry>
          <Header />
          <main id="main" style={{ maxWidth: 1120, margin: '0 auto', padding: '24px' }}>
            {children}
          </main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
