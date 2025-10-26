// scienceofdesign/app/layout.tsx
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
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#f43a09', // Brightly Orange Number 2
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Accessible skip link via CSS (no handlers in a Server Component) */}
        <a href="#main" className="skip-link">Skip to content</a>

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
