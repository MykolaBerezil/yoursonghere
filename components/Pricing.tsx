import Link from 'next/link'

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <h2>Investment</h2>
        <div className="pricing-card">
          <h3>Custom Song</h3>
          <div className="price">$500</div>
          <p style={{color: '#666', marginBottom: '2rem'}}>$250 deposit • $250 on delivery</p>
          <ul className="pricing-features">
            <li>One-of-a-kind original composition</li>
            <li>Professional studio recording</li>
            <li>3-day turnaround</li>
            <li>Personal consultation with Jeff</li>
            <li>Up to 3 revision rounds</li>
            <li>High-quality MP3 & WAV files</li>
            <li>Professional lyric sheet (PDF)</li>
            <li>Private streaming link</li>
            <li>Unlimited downloads</li>
            <li>Full commercial rights</li>
          </ul>
          <Link href="/create" className="btn btn-primary" style={{width: '100%', marginTop: '1rem'}}>
            Start Your Song
          </Link>
        </div>
      </div>
    </section>
  )
}
