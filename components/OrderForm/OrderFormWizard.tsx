'use client'

import { useState } from 'react'
import Step1Occasion from './Step1Occasion'
import Step2Story from './Step2Story'
import Step3Musical from './Step3Musical'
import Step4Contact from './Step4Contact'
import Step5Payment from './Step5Payment'

export interface FormData {
  // Step 1
  occasion: string
  recipientName: string
  relationship: string
  dateNeeded: string
  // Step 2
  memories: string
  insideJokes: string
  personality: string
  specificDetails: string
  tone: string
  // Step 3
  genres: string[]
  referenceArtists: string
  tempo: string
  specialRequests: string
  // Step 4
  customerName: string
  email: string
  phone: string
  bestTimeToContact: string
}

export default function OrderFormWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    occasion: '',
    recipientName: '',
    relationship: '',
    dateNeeded: '',
    memories: '',
    insideJokes: '',
    personality: '',
    specificDetails: '',
    tone: '',
    genres: [],
    referenceArtists: '',
    tempo: '',
    specialRequests: '',
    customerName: '',
    email: '',
    phone: '',
    bestTimeToContact: ''
  })

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Occasion formData={formData} updateFormData={updateFormData} nextStep={nextStep} />
      case 2:
        return <Step2Story formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
      case 3:
        return <Step3Musical formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
      case 4:
        return <Step4Contact formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
      case 5:
        return <Step5Payment formData={formData} prevStep={prevStep} />
      default:
        return null
    }
  }

  return (
    <div style={{background: 'white', padding: '3rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
      {/* Progress Bar */}
      <div style={{marginBottom: '3rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
          {[1, 2, 3, 4, 5].map(step => (
            <div key={step} style={{
              flex: 1,
              height: '4px',
              background: step <= currentStep ? 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)' : '#e0e0e0',
              marginRight: step < 5 ? '0.5rem' : '0',
              borderRadius: '2px'
            }} />
          ))}
        </div>
        <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem'}}>
          Step {currentStep} of 5
        </p>
      </div>

      {/* Current Step */}
      {renderStep()}
    </div>
  )
}
