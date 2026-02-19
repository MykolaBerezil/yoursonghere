import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" className="logo" style={{display: 'flex', alignItems: 'center', gap: '0.3rem'}}>
            <Image src="/logo.png" alt="YourSongHere" width={56} height={56} style={{display: 'block'}} />
            <span style={{
              fontFamily: "'Quicksand', 'Nunito', sans-serif",
              fontWeight: '500',
              fontSize: '1.5rem',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>YourSongHere</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/about-jeff">About Jeff</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
          <Link href="/create" className="btn btn-primary">
            Create Your Song
          </Link>
        </nav>
      </div>
    </header>
  )
}
