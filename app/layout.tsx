import type { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Science of Design by Christina Alchus',
  description: 'UX & Product Design leadership portfolio for complex, multi-product systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          <main style={{ maxWidth: 1120, margin: '0 auto', padding: '24px' }}>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
