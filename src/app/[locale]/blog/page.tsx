import { getTranslations } from 'next-intl/server';
import ClientPage from './ClientPage';
import type { Metadata } from 'next';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: `${t('nav.blog')} | B2B Ecosystem`,
  };
}

export default function Page() {
  return <ClientPage />;
}
