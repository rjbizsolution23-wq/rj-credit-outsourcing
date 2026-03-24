import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Pricing from '@/components/sections/Pricing'
import ROICalculator from '@/components/sections/ROICalculator'
import Process from '@/components/sections/Process'
import FAQ from '@/components/sections/FAQ'
import LeadCapture from '@/components/sections/LeadCapture'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'B2B White-Label Credit Repair Outsourcing for CROs',
  description:
    'Rick Jefferson\'s Supreme Credit Master AGI delivers FCRA violation analysis, attorney-level dispute letters, and 10-point financial roadmaps under your brand. Starting at $22/file.',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <ROICalculator />
        <Process />
        <FAQ />
        <LeadCapture />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
