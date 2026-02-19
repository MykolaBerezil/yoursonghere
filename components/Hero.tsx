import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Turn Your Most Precious Moments Into Music</h1>
        <p>
          Professional custom songs for weddings, anniversaries, proposals, and every moment worth remembering.
          Written and recorded just for you.
        </p>
        <Link href="/create" className="btn btn-primary">
          Create Your Song
        </Link>
      </div>
    </section>
  )
}
