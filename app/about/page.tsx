import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="page-title">About Jeff Arthur Studios</h1>
          
          <div className="about-content">
            <div className="about-section">
              <h2>Our Story</h2>
              <p>
                Jeff Arthur Studios was founded on a simple belief: every meaningful moment in life
                deserves to be celebrated with music. What started as a passion for songwriting has
                grown into a specialized service helping people commemorate their most important
                occasions with custom, professional songs.
              </p>
              <p>
                We've had the privilege of creating songs for weddings, anniversaries, proposals,
                birthdays, memorials, and countless other special moments. Each song is a collaboration
                between our team and our clients, ensuring that every lyric, melody, and note reflects
                the unique story being told.
              </p>
            </div>

            <div className="about-section">
              <h2>The Jeff Arthur Difference</h2>
              <ul className="features-list">
                <li>
                  <strong>100% Original Composition:</strong> Every song is written from scratch specifically
                  for you. No templates, no generic lyrics.
                </li>
                <li>
                  <strong>Professional Studio Quality:</strong> All songs are recorded, mixed, and mastered
                  in our professional studio to radio-quality standards.
                </li>
                <li>
                  <strong>Personal Touch:</strong> Direct communication with Jeff throughout the process.
                  We listen, we collaborate, we create.
                </li>
                <li>
                  <strong>Unlimited Revisions:</strong> Up to 3 revision rounds included to ensure your
                  song is exactly what you envisioned.
                </li>
                <li>
                  <strong>Fast Turnaround:</strong> Typical delivery in 3 days, with rush options available.
                </li>
              </ul>
            </div>

            <div className="about-section">
              <h2>What You'll Receive</h2>
              <p>
                When you commission a custom song from Jeff Arthur Studios, you receive:
              </p>
              <ul className="deliverables-list">
                <li>Professional studio-recorded song (3+ minutes)</li>
                <li>High-quality MP3 and WAV files</li>
                <li>Professionally printed lyric sheet (PDF)</li>
                <li>Unlimited downloads and sharing rights</li>
                <li>A timeless musical memory that lasts forever</li>
              </ul>
            </div>

            <div className="about-section">
              <h2>Perfect For Any Occasion</h2>
              <p>
                We've created custom songs for weddings, anniversaries, birthdays, proposals, 
                bar/bat mitzvahs, baby showers, graduations, corporate events, memorials, and more.
                If there's a moment worth celebrating, there's a song waiting to be written.
              </p>
            </div>

            <div className="cta-section">
              <h2>Let's Create Something Special</h2>
              <p>
                Ready to turn your story into a song? The process is simple and the result is magical.
              </p>
              <Link href="/create" className="btn btn-primary btn-large">
                Create Your Song
              </Link>
              <Link href="/how-it-works" className="btn btn-secondary btn-large">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
