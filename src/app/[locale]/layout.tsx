import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';

export const metadata: Metadata = {
  title: "SERN | Web Development & Digital Automation Agency",
  description: "SERN is a premier agency specializing in B2B web development, digital automation, and SEO for Vietnamese businesses.",
  metadataBase: new URL('http://localhost:3000'),
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased font-sans bg-[#1b1b1b] min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
