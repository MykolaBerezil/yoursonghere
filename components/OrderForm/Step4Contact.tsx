'use client'

import { FormData } from './OrderFormWizard'

interface Props {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

export default function Step4Contact({ formData, updateFormData, nextStep, prevStep }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{marginBottom: '2rem', color: '#333'}}>Your Contact Information</h2>
      <p style={{color: '#666', marginBottom: '2rem'}}>
        Jeff will personally reach out to discuss your song and answer any questions.
      </p>

      <div style={{marginBottom: '1.5rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Your Name
        </label>
        <input
          type="text"
          value={formData.customerName}
          onChange={(e) => updateFormData({ customerName: e.target.value })}
          placeholder="First and last name"
          required
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem'}}
        />
      </div>

      <div style={{marginBottom: '1.5rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Email Address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="your@email.com"
          required
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem'}}
        />
      </div>

      <div style={{marginBottom: '1.5rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          placeholder="(555) 123-4567"
          required
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem'}}
        />
      </div>

      <div style={{marginBottom: '2rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Best Time to Contact
        </label>
        <select
          value={formData.bestTimeToContact}
          onChange={(e) => updateFormData({ bestTimeToContact: e.target.value })}
          required
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem'}}
        >
          <option value="">Select a time...</option>
          <option value="Morning (8am-12pm)">Morning (8am-12pm)</option>
          <option value="Afternoon (12pm-5pm)">Afternoon (12pm-5pm)</option>
          <option value="Evening (5pm-8pm)">Evening (5pm-8pm)</option>
          <option value="Anytime">Anytime</option>
        </select>
      </div>

      <div style={{display: 'flex', gap: '1rem'}}>
        <button type="button" onClick={prevStep} className="btn btn-secondary" style={{flex: 1}}>
          Back
        </button>
        <button type="submit" className="btn btn-primary" style={{flex: 1}}>
          Continue to Payment
        </button>
      </div>
    </form>
  )
}
