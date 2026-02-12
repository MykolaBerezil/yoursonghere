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
            Creating your custom song is simple. Here's our proven 4-step process:
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
                to radio-quality standards. We'll reach out if we need any clarifications.
              </p>
              <ul>
                <li>Professional songwriting and composition</li>
                <li>Studio recording with live instruments</li>
                <li>Professional mixing and mastering</li>
                <li>Typical turnaround: 3 days</li>
              </ul>
            </div>

            <div className="process-step-detail">
              <div className="step-number">3</div>
              <h2>Review & Refine</h2>
              <p>
                We'll send you the first version of your song. Listen, enjoy, and let us know if you'd
                like any changes. Every custom song includes up to 3 rounds of revisions to ensure it's
                absolutely perfect.
              </p>
              <ul>
                <li>Receive your song via private streaming link</li>
                <li>Request changes to lyrics, melody, or arrangement</li>
                <li>3 revision rounds included</li>
                <li>Direct communication with Jeff</li>
              </ul>
            </div>

            <div className="process-step-detail">
              <div className="step-number">4</div>
              <h2>Celebrate & Share</h2>
              <p>
                Once you approve the final version, complete your payment and receive your professional
                song files. Download, share, and enjoy your one-of-a-kind musical memory forever.
              </p>
              <ul>
                <li>High-quality MP3 and WAV files</li>
                <li>Printed lyric sheet (PDF)</li>
                <li>Unlimited downloads</li>
                <li>Full rights to share with family and friends</li>
              </ul>
            </div>
          </div>

          <div className="pricing-info">
            <h2>Investment</h2>
            <p className="price-large">$500</p>
            <p>Pay $250 deposit to start, $250 when song is complete</p>
            <ul className="included-list">
              <li>Original custom composition</li>
              <li>Professional studio recording</li>
              <li>Up to 3 revision rounds</li>
              <li>MP3 + WAV files</li>
              <li>Lyric sheet</li>
              <li>3-day turnaround</li>
            </ul>
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
