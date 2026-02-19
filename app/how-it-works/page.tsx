import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="page-title">How It Works</h1>
          <p className="page-subtitle">
            Creating your custom song is simple. Here's our proven 3-step process:
          </p>

          <div className="process-detail">
            <div className="process-step-detail">
              <div className="step-number">1</div>
              <h2>Share Your Story</h2>
              <p>
                Click "Create Your Song" and fill out our guided questionnaire. Tell us about the occasion,
                the person or people being celebrated, and share memories, inside jokes, and special details.
                The more you share, the more personal your song becomes.
              </p>
              <ul>
                <li>Who is the song for?</li>
                <li>What's the occasion?</li>
                <li>What memories should we include?</li>
                <li>What tone do you want? (Heartfelt, funny, romantic, upbeat)</li>
              </ul>
            </div>

            <div className="process-step-detail">
              <div className="step-number">2</div>
              <h2>We Create Your Song</h2>
              <p>
                Jeff Arthur Studios will personally craft an original song based on your story.
                Every song is written from scratch, professionally recorded in our studio, and produced
                to radio-quality standards.
              </p>
              <ul>
                <li>Professional songwriting and composition</li>
                <li>Studio recording with live instruments</li>
                <li>Professional mixing and mastering</li>
              </ul>
            </div>

            <div className="process-step-detail">
              <div className="step-number">3</div>
              <h2>Celebrate & Share</h2>
              <p>
                Receive your professional song as an MP3 file. Download, share, and enjoy your one-of-a-kind musical memory forever.
              </p>
              <ul>
                <li>High-quality MP3 file</li>
                <li>Unlimited downloads</li>
                <li>Full rights to share with family and friends</li>
              </ul>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/create" className="btn btn-primary btn-large">
              Start Your Song
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
