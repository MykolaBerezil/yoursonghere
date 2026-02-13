import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" className="logo" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <Image src="/logo.png" alt="YourSongHere" width={40} height={40} style={{display: 'block'}} />
            <span>YourSongHere</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/about">About</Link></li>
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
