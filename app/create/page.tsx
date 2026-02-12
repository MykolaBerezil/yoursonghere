'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OrderFormWizard from '@/components/OrderForm/OrderFormWizard'

export default function CreatePage() {
  return (
    <>
      <Header />
      <main style={{padding: '4rem 0', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)'}}>
        <div className="container" style={{maxWidth: '800px'}}>
          <h1 style={{textAlign: 'center', marginBottom: '2rem', color: '#8B5CF6'}}>Create Your Custom Song</h1>
          <OrderFormWizard />
        </div>
      </main>
      <Footer />
    </>
  )
}
