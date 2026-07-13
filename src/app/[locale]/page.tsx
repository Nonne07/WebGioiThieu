import HeroSection         from '../../components/sections/HeroSection'
import ServicesSection     from '../../components/sections/ServicesSection'
import ProjectsSection     from '../../components/sections/ProjectsSection'
import MarqueeTags         from '../../components/sections/MarqueeTags'
import TestimonialsSection from '../../components/sections/TestimonialsSection'
import ContactSection      from '../../components/sections/ContactSection'
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('nav.home') + ' | SERN Agency',
    description: t('footer.description'),
  };
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeTags />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
