'use client'

import { useState } from 'react'
import { FormData } from './OrderFormWizard'

interface Props {
  formData: FormData
  prevStep: () => void
}

export default function Step5Payment({ formData, prevStep }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send order')
      }

      alert('Thank you! Your order has been submitted. Jeff will contact you within 24 hours with payment details!')
      window.location.href = '/'
    } catch (error) {
      console.error('Error submitting order:', error)
      alert('There was an error submitting your order. Please email jinglejeff@gmail.com directly or try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{marginBottom: '2rem', color: '#333'}}>Review & Submit</h2>

      {/* Order Summary */}
      <div style={{background: '#f8f8f8', padding: '2rem', borderRadius: '12px', marginBottom: '2rem'}}>
        <h3 style={{marginBottom: '1rem', color: '#8B5CF6'}}>Order Summary</h3>
        
        <div style={{marginBottom: '1rem'}}>
          <strong>Occasion:</strong> {formData.occasion}
        </div>
        <div style={{marginBottom: '1rem'}}>
          <strong>For:</strong> {formData.recipientName} ({formData.relationship})
        </div>
        <div style={{marginBottom: '1rem'}}>
          <strong>Date Needed:</strong> {formData.dateNeeded}
        </div>
        <div style={{marginBottom: '1rem'}}>
          <strong>Tone:</strong> {formData.tone}
        </div>
        <div style={{marginBottom: '1rem'}}>
          <strong>Genre(s):</strong> {formData.genres?.join(', ') || 'Not specified'}
        </div>
        <div style={{marginBottom: '1rem'}}>
          <strong>Your Name:</strong> {formData.customerName}
        </div>
        <div style={{marginBottom: '1rem'}}>
          <strong>Email:</strong> {formData.email}
        </div>
      </div>

      {/* Pricing Breakdown */}
      <div style={{background: 'white', border: '2px solid #8B5CF6', padding: '2rem', borderRadius: '12px', marginBottom: '2rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
          <span>Custom Song</span>
          <strong>$500</strong>
        </div>
        <div style={{borderTop: '1px solid #e0e0e0', paddingTop: '1rem', marginTop: '1rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
            <span>Deposit (50%):</span>
            <strong style={{color: '#8B5CF6', fontSize: '1.5rem'}}>$250</strong>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666'}}>
            <span>Balance (due on delivery):</span>
            <span>$250</span>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div style={{marginBottom: '2rem', padding: '1.5rem', background: 'rgba(139, 92, 246, 0.05)', borderRadius: '12px'}}>
        <h4 style={{marginBottom: '1rem', color: '#333'}}>What's Included:</h4>
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          <li style={{padding: '0.5rem 0', color: '#666'}}>✓ Professional studio recording</li>
          <li style={{padding: '0.5rem 0', color: '#666'}}>✓ 3-day turnaround</li>
          <li style={{padding: '0.5rem 0', color: '#666'}}>✓ Personal consultation with Jeff</li>
          <li style={{padding: '0.5rem 0', color: '#666'}}>✓ Up to 3 revision rounds</li>
          <li style={{padding: '0.5rem 0', color: '#666'}}>✓ MP3 & WAV files</li>
          <li style={{padding: '0.5rem 0', color: '#666'}}>✓ Professional lyric sheet (PDF)</li>
        </ul>
      </div>

      <div style={{display: 'flex', gap: '1rem'}}>
        <button type="button" onClick={prevStep} className="btn btn-secondary" style={{flex: 1}} disabled={isSubmitting}>
          Back
        </button>
        <button type="submit" className="btn btn-primary" style={{flex: 1}} disabled={isSubmitting}>
          {isSubmitting ? 'Preparing...' : 'Submit Order'}
        </button>
      </div>

      <p style={{textAlign: 'center', fontSize: '0.85rem', color: '#999', marginTop: '1rem'}}>
        We'll send you payment details via email
      </p>
    </form>
  )
}
