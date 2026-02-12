'use client'

import { FormData } from './OrderFormWizard'

interface Props {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
}

export default function Step1Occasion({ formData, updateFormData, nextStep }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    nextStep()
  }

  const occasions = [
    'Wedding', 'Anniversary', 'Birthday', 'Proposal', 'Baby Shower',
    'Graduation', 'Bar/Bat Mitzvah', 'Corporate Event', 'Memorial/Tribute', 'Other'
  ]

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{marginBottom: '2rem', color: '#333'}}>Tell Us About the Occasion</h2>
      
      <div style={{marginBottom: '1.5rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          What's the occasion?
        </label>
        <select
          value={formData.occasion}
          onChange={(e) => updateFormData({ occasion: e.target.value })}
          required
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem'}}
        >
          <option value="">Select an occasion...</option>
          {occasions.map(occ => (
            <option key={occ} value={occ}>{occ}</option>
          ))}
        </select>
      </div>

      <div style={{marginBottom: '1.5rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Who is this song for?
        </label>
        <input
          type="text"
          value={formData.recipientName}
          onChange={(e) => updateFormData({ recipientName: e.target.value })}
          placeholder="e.g., Sarah and Michael, Mom and Dad, Jennifer"
          required
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem'}}
        />
      </div>

      <div style={{marginBottom: '1.5rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Relationship (if multiple people)
        </label>
        <input
          type="text"
          value={formData.relationship}
          onChange={(e) => updateFormData({ relationship: e.target.value })}
          placeholder="e.g., engaged couple, married 25 years, siblings"
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem'}}
        />
      </div>

      <div style={{marginBottom: '2rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          When do you need it by? (optional)
        </label>
        <input
          type="date"
          value={formData.dateNeeded}
          onChange={(e) => updateFormData({ dateNeeded: e.target.value })}
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem'}}
        />
        <p style={{fontSize: '0.85rem', color: '#666', marginTop: '0.5rem'}}>
          Standard turnaround is 3 days. Rush delivery available for urgent requests.
        </p>
      </div>

      <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
        Continue
      </button>
    </form>
  )
}
