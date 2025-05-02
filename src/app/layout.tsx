import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/provider/ThemeProvider';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`scroll-smooth`} suppressHydrationWarning>
      <body className=" bg-white dark:bg-gray-900 dark:text-white min-h-screen text-black transition-colors duration-300">
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
