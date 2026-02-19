'use client'

import { FormData } from './OrderFormWizard'

interface Props {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

export default function Step2Story({ formData, updateFormData, nextStep, prevStep }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    nextStep()
  }

  const tones = ['Heartfelt & Romantic', 'Fun & Upbeat', 'Emotional & Touching', 'Funny & Lighthearted', 'Inspirational']

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{marginBottom: '2rem', color: '#333'}}>Tell Us Your Story</h2>
      <p style={{color: '#666', marginBottom: '2rem'}}>
        The more details you share, the more personal and meaningful your song will be!
      </p>

      <div style={{marginBottom: '1.5rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Key Memories & Moments
        </label>
        <textarea
          value={formData.memories}
          onChange={(e) => updateFormData({ memories: e.target.value })}
          placeholder="How did you meet? Favorite memories together? What makes them special?"
          required
          rows={5}
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem', fontFamily: 'inherit'}}
        />
      </div>

      <div style={{marginBottom: '1.5rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Inside Jokes & Personal Details
        </label>
        <textarea
          value={formData.insideJokes}
          onChange={(e) => updateFormData({ insideJokes: e.target.value })}
          placeholder="Nicknames, running jokes, quirks that make you smile"
          rows={3}
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem', fontFamily: 'inherit'}}
        />
      </div>

      <div style={{marginBottom: '1.5rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Personality & Character Traits
        </label>
        <textarea
          value={formData.personality}
          onChange={(e) => updateFormData({ personality: e.target.value })}
          placeholder="What makes them who they are? Hobbies, passions, what they're known for"
          rows={3}
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem', fontFamily: 'inherit'}}
        />
      </div>

      <div style={{marginBottom: '1.5rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Specific Details to Include
        </label>
        <textarea
          value={formData.specificDetails}
          onChange={(e) => updateFormData({ specificDetails: e.target.value })}
          placeholder="Any dates, places, names, or special moments you'd like mentioned in the song"
          rows={3}
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem', fontFamily: 'inherit'}}
        />
      </div>

      <div style={{marginBottom: '2rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Overall Tone
        </label>
        <select
          value={formData.tone}
          onChange={(e) => updateFormData({ tone: e.target.value })}
          required
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem'}}
        >
          <option value="">Select a tone...</option>
          {tones.map(tone => (
            <option key={tone} value={tone}>{tone}</option>
          ))}
        </select>
      </div>

      <div style={{display: 'flex', gap: '1rem'}}>
        <button type="button" onClick={prevStep} className="btn btn-secondary" style={{flex: 1}}>
          Back
        </button>
        <button type="submit" className="btn btn-primary" style={{flex: 1}}>
          Continue
        </button>
      </div>
    </form>
  )
}
