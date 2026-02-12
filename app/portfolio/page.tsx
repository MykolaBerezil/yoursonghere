import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PortfolioPage() {
  const songs = [
    {
      title: "Forever Starts Today",
      occasion: "Wedding First Dance",
      story: "Michael and Sarah wanted a unique first dance song that told the story of how they met at a coffee shop in Seattle. The song weaves in references to their favorite rainy-day dates and their rescue dog Luna.",
      genre: "Acoustic Pop"
    },
    {
      title: "50 Years of Love",
      occasion: "50th Anniversary",
      story: "The Johnson family commissioned this song for their parents' golden anniversary. It chronicles their journey from high school sweethearts to grandparents of 7, including references to their beloved family cabin.",
      genre: "Folk/Country"
    },
    {
      title: "Will You Marry Me?",
      occasion: "Marriage Proposal",
      story: "James wanted to propose to Emma in a unique way. This romantic ballad incorporated the story of their travels together and was performed live during a surprise dinner.",
      genre: "Piano Ballad"
    },
    {
      title: "Sweet Sixteen Dream",
      occasion: "Birthday Celebration",
      story: "A proud father commissioned this upbeat pop anthem for his daughter's sweet sixteen, celebrating her accomplishments, dreams, and vibrant personality.",
      genre: "Pop"
    },
    {
      title: "Welcome Baby Grace",
      occasion: "Baby Shower",
      story: "Grandparents-to-be commissioned this gentle lullaby for their first grandchild, incorporating family traditions and hopes for the future.",
      genre: "Lullaby"
    },
    {
      title: "In Loving Memory",
      occasion: "Memorial Tribute",
      story: "A family wanted to honor their father's legacy with a song celebrating his life, values, and the joy he brought to everyone who knew him.",
      genre: "Contemporary Folk"
    }
  ]

  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="page-title">Portfolio</h1>
          <p className="page-subtitle">
            Every song tells a unique story. Here are a few examples of custom songs we've created
            for special occasions. (Sample audio coming soon!)
          </p>

          <div className="portfolio-grid">
            {songs.map((song, index) => (
              <div key={index} className="portfolio-card">
                <div className="song-icon">♪</div>
                <h3>{song.title}</h3>
                <p className="occasion-tag">{song.occasion}</p>
                <p className="song-story">{song.story}</p>
                <p className="genre-tag">Genre: {song.genre}</p>
                <div className="audio-placeholder">
                  🎵 Audio sample coming soon
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
