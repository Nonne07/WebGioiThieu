import { getTranslations } from 'next-intl/server';
import ClientPage from './ClientPage';
import { serviceDetails } from '../../../../data/serviceDetails';
import type { Metadata } from 'next';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale });
  const service = serviceDetails.find(s => s.slug === slug);

  if (!service) {
    return {
      title: t('servicePage.notFound'),
    };
  }

  // Get the localized title from locales json or fallback to English id
  const serviceTitle = t(`services.${service.id}.title`);
  const serviceDesc = t(`services.${service.id}.description`);

  return {
    title: `${serviceTitle} | B2B Ecosystem`,
    description: serviceDesc,
    openGraph: {
      title: `${serviceTitle} | B2B Ecosystem`,
      description: serviceDesc,
    }
  };
}

export default function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  return <ClientPage params={params} />;
}
