import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import MissionsSection from "@/components/missions-section"
import ServicesSection from "@/components/services-section"
import BrandBand from "@/components/brand-band"
import ExpertsSection from "@/components/experts-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <MissionsSection />
      <ServicesSection />
      <BrandBand />
      <ExpertsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </main>
  )
}
