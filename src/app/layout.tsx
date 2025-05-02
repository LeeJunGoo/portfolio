import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { cookies } from 'next/headers';
import './globals.css';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value; // 'light' | 'dark' | undefined

  return (
    <html lang="ko" className={`scroll-smooth ${theme === 'dark' ? 'dark' : ''}`}>
      <body className=" bg-white dark:bg-gray-900 dark:text-white min-h-screen text-black transition-colors duration-300">
        <Header theme={theme} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
