'use client'

import { useState } from 'react'
import type { FormData as OrderFormData } from './OrderFormWizard'

interface Props {
  formData: OrderFormData
  prevStep: () => void
}

export default function Step5Payment({ formData, prevStep }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formBody = new FormData()
      
      // FormSubmit.co special fields
      formBody.append('_subject', `Custom Song Order - ${formData.recipientName}`)
      formBody.append('_captcha', 'false')
      formBody.append('_template', 'table')
      
      // Order details
      formBody.append('Occasion', formData.occasion)
      formBody.append('Recipient Name', formData.recipientName)
      formBody.append('Relationship', formData.relationship)
      formBody.append('Date Needed', formData.dateNeeded)
      formBody.append('Memories', formData.memories)
      formBody.append('Inside Jokes', formData.insideJokes || 'Not provided')
      formBody.append('Personality', formData.personality || 'Not provided')
      formBody.append('Specific Details', formData.specificDetails || 'Not provided')
      formBody.append('Tone', formData.tone)
      formBody.append('Genres', formData.genres?.join(', ') || 'Not specified')
      formBody.append('Tempo', formData.tempo || 'Not specified')
      formBody.append('Customer Name', formData.customerName)
      formBody.append('Customer Email', formData.email)
      formBody.append('Phone', formData.phone || 'Not provided')
      formBody.append('Best Time to Contact', formData.bestTimeToContact || 'Any time')

      const response = await fetch('https://formsubmit.co/jinglejeff@gmail.com', {
        method: 'POST',
        body: formBody
      })

      if (!response.ok) {
        throw new Error('Failed to send order')
      }

      alert('Thank you! Your order has been submitted. Jeff will contact you within 24 hours!')
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

      <div style={{display: 'flex', gap: '1rem'}}>
        <button type="button" onClick={prevStep} className="btn btn-secondary" style={{flex: 1}} disabled={isSubmitting}>
          Back
        </button>
        <button type="submit" className="btn btn-primary" style={{flex: 1}} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Order'}
        </button>
      </div>

      <p style={{textAlign: 'center', fontSize: '0.85rem', color: '#999', marginTop: '1rem'}}>
        We'll contact you to finalize your order
      </p>
    </form>
  )
}
