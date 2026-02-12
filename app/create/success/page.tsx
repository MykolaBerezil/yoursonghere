import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SuccessPage() {
  return (
    <>
      <Header />
      <main style={{padding: '6rem 0', textAlign: 'center'}}>
        <div className="container" style={{maxWidth: '700px'}}>
          <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🎉</div>
          <h1 style={{
            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem'
          }}>
            Order Confirmed!
          </h1>
          <p style={{fontSize: '1.25rem', color: '#666', marginBottom: '2rem'}}>
            Your $250 deposit has been received. Your custom song journey begins now!
          </p>

          <div style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
            padding: '2rem',
            borderRadius: '15px',
            marginBottom: '2rem',
            textAlign: 'left'
          }}>
            <h2 style={{color: '#8B5CF6', marginBottom: '1rem'}}>What Happens Next?</h2>
            <ol style={{color: '#666', lineHeight: '2'}}>
              <li><strong>Within 24 hours:</strong> Jeff will personally reach out to discuss your song</li>
              <li><strong>Day 1-2:</strong> Jeff creates your custom song in the studio</li>
              <li><strong>Day 3:</strong> You'll receive a preview to review</li>
              <li><strong>Revisions:</strong> Up to 3 rounds to perfect it (if needed)</li>
              <li><strong>Final Payment:</strong> Once approved, pay remaining $250</li>
              <li><strong>Delivery:</strong> Download your MP3, WAV files and lyric sheet!</li>
            </ol>
          </div>

          <div style={{
            background: '#f8f8f8',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <p style={{color: '#666', marginBottom: '0.5rem'}}>
              <strong>Check your email</strong> for order confirmation and next steps.
            </p>
            <p style={{color: '#999', fontSize: '0.9rem'}}>
              If you don't see it, check your spam folder.
            </p>
          </div>

          <Link href="/" className="btn btn-primary">
            Back to Homepage
          </Link>

          <p style={{marginTop: '2rem', color: '#999', fontSize: '0.9rem'}}>
            Questions? Email us at hello@yoursonghere.com
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
