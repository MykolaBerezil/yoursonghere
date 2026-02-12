import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProcessSteps from '@/components/ProcessSteps'
import Occasions from '@/components/Occasions'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProcessSteps />
        <Occasions />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
