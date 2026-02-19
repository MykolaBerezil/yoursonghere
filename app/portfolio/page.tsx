import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PortfolioPage() {
  // Sample songs - audio files to be added in /public/portfolio/
  const songs = [
    {
      title: "Forever Starts Today",
      occasion: "Wedding First Dance",
      description: "A romantic acoustic song celebrating a couple's love story",
      audioFile: "/portfolio/song1.mp3" // To be added
    },
    {
      title: "50 Years of Love",
      occasion: "Anniversary Celebration",
      description: "A heartfelt tribute to decades of love and memories",
      audioFile: "/portfolio/song2.mp3" // To be added
    },
    {
      title: "Will You Marry Me?",
      occasion: "Marriage Proposal",
      description: "A romantic ballad created for a special proposal moment",
      audioFile: "/portfolio/song3.mp3" // To be added
    },
    {
      title: "Sweet Sixteen Dream",
      occasion: "Birthday Celebration",
      description: "An upbeat celebration of youth and dreams",
      audioFile: "/portfolio/song4.mp3" // To be added
    }
  ]

  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="page-title">Portfolio</h1>
          <p className="page-subtitle">
            Listen to examples of custom songs created for special occasions.
          </p>

          <div className="portfolio-grid">
            {songs.map((song, index) => (
              <div key={index} className="portfolio-card">
                <div className="song-icon">♪</div>
                <h3>{song.title}</h3>
                <p className="occasion-tag">{song.occasion}</p>
                <p className="song-story">{song.description}</p>
                <div className="audio-player">
                  <audio controls style={{width: '100%', marginTop: '1rem'}}>
                    <source src={song.audioFile} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <h2>Ready to Create Your Own?</h2>
            <p>Every song is unique, crafted specifically for your occasion and story.</p>
            <Link href="/create" className="btn btn-primary btn-large">
              Start Your Custom Song
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
