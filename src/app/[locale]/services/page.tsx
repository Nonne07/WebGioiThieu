import { setRequestLocale } from 'next-intl/server';
import ClientPage from './ClientPage';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'vi' }];
}

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <ClientPage />;
}
