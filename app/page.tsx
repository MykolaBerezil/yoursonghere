import Link from 'next/link'

export default function Home() {
  return (
    <div className="splash-page">
      {/* Animated background */}
      <div className="splash-bg">
        <div className="splash-orb splash-orb-1" />
        <div className="splash-orb splash-orb-2" />
        <div className="splash-orb splash-orb-3" />
        <div className="splash-grid" />
      </div>

      <div className="splash-content">
        {/* Logo / Brand */}
        <div className="splash-brand">
          <h1 className="splash-logo">YourSongHere</h1>
          <p className="splash-tagline">Music that moves people</p>
        </div>

        {/* Two option cards */}
        <div className="splash-cards">
          <a
            href="https://jinglemine.com"
            className="splash-card splash-card-jingle"
          >
            <div className="splash-card-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
                <path d="M18 20v8l8-4-8-4z" fill="currentColor" />
                <path d="M4 16h40" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="38" cy="12" r="2" fill="currentColor" />
                <circle cx="32" cy="12" r="2" fill="currentColor" />
              </svg>
            </div>
            <h2 className="splash-card-title">Get a Jingle<br />for Your Business</h2>
            <p className="splash-card-desc">
              Catchy, professional jingles that put your brand on repeat
            </p>
            <span className="splash-card-cta">
              Explore Jingles
              <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
          </a>

          <Link
            href="/songs"
            className="splash-card splash-card-song"
          >
            <div className="splash-card-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 6v28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="22" cy="34" r="8" stroke="currentColor" strokeWidth="2.5" />
                <path d="M32 6l8 4v8l-8-4V6z" fill="currentColor" opacity="0.6" />
                <path d="M10 20h8M10 26h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="splash-card-title">Get a Personalized<br />Song</h2>
            <p className="splash-card-desc">
              Original songs crafted for weddings, birthdays & life's big moments
            </p>
            <span className="splash-card-cta">
              Start Your Song
              <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </div>

        <footer className="splash-footer">
          <p>&copy; {new Date().getFullYear()} YourSongHere &middot; Jeff Arthur Studios</p>
        </footer>
      </div>
    </div>
  )
}
