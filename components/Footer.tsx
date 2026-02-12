import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>YourSongHere</h3>
            <p>Professional custom songs for life's special moments.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About Jeff Arthur</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: hello@yoursonghere.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 YourSongHere / Jeff Arthur Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
