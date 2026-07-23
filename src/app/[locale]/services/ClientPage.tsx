"use client"
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ServicesSection from '@/components/sections/ServicesSection'
import ContactSection from '@/components/sections/ContactSection'

export default function ClientPage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <Navbar />
      <div className="pt-24 pb-12 bg-[#f8f8f8]">
        {/* We can reuse ServicesSection from the homepage */}
        <ServicesSection />
      </div>
      <ContactSection />
      <Footer />
    </main>
  )
}
