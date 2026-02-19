'use client'

import { FormData } from './OrderFormWizard'

interface Props {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

export default function Step3Musical({ formData, updateFormData, nextStep, prevStep }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    nextStep()
  }

  const genres = [
    'Pop', 'Rock', 'Country', 'Folk', 'Jazz', 'R&B/Soul',
    'Blues', 'Singer-Songwriter'
  ]

  const handleGenreToggle = (genre: string) => {
    const current = formData.genres || []
    if (current.includes(genre)) {
      updateFormData({ genres: current.filter(g => g !== genre) })
    } else {
      updateFormData({ genres: [...current, genre] })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{marginBottom: '2rem', color: '#333'}}>Musical Preferences</h2>

      <div style={{marginBottom: '1.5rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Preferred Genre(s) <span style={{color: '#999', fontWeight: 'normal'}}>(select all that apply)</span>
        </label>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.75rem'}}>
          {genres.map(genre => (
            <label key={genre} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.75rem',
              borderRadius: '8px',
              border: '2px solid',
              borderColor: formData.genres?.includes(genre) ? '#8B5CF6' : '#e0e0e0',
              background: formData.genres?.includes(genre) ? 'rgba(139, 92, 246, 0.1)' : 'white',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <input
                type="checkbox"
                checked={formData.genres?.includes(genre) || false}
                onChange={() => handleGenreToggle(genre)}
                style={{marginRight: '0.5rem'}}
              />
              {genre}
            </label>
          ))}
        </div>
      </div>

      <div style={{marginBottom: '2rem'}}>
        <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>
          Tempo Preference
        </label>
        <select
          value={formData.tempo}
          onChange={(e) => updateFormData({ tempo: e.target.value })}
          required
          style={{width: '100%', padding: '0.75rem', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '1rem'}}
        >
          <option value="">Select tempo...</option>
          <option value="Slow">Slow</option>
          <option value="Medium">Medium</option>
          <option value="Fast">Fast</option>
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
