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

    // Build email body
    const emailBody = `
NEW CUSTOM SONG ORDER

OCCASION: ${formData.occasion}
RECIPIENT: ${formData.recipientName}
RELATIONSHIP: ${formData.relationship}
DATE NEEDED: ${formData.dateNeeded}

MEMORIES:
${formData.memories}

INSIDE JOKES:
${formData.insideJokes || 'Not provided'}

PERSONALITY:
${formData.personality || 'Not provided'}

SPECIFIC DETAILS:
${formData.specificDetails || 'Not provided'}

TONE: ${formData.tone}
GENRES: ${formData.genres?.join(', ') || 'Not specified'}
REFERENCE ARTISTS: ${formData.referenceArtists || 'Not provided'}
TEMPO: ${formData.tempo || 'Not specified'}

SPECIAL REQUESTS:
${formData.specialRequests || 'None'}

CONTACT INFO:
Name: ${formData.customerName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Best time to contact: ${formData.bestTimeToContact || 'Any time'}

PRICE: $500 ($250 deposit, $250 on delivery)
    `.trim()

    // Open email client
    const mailtoLink = `mailto:jinglejeff@gmail.com?subject=Custom Song Order - ${formData.recipientName}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink

    // Show success message
    setTimeout(() => {
      alert('Thank you! Your order details have been prepared. Please send the email to complete your order. We\'ll respond within 24 hours with payment details!')
      window.location.href = '/'
    }, 1000)
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
