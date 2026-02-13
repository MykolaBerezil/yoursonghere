import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Jeff Arthur',
  description: 'From 1970s recording artist with Arthur, Hurley & Gottlieb to Clio Award-winning jingle master. Meet Jeff Arthur, creator of "Hey Hey Tampa Bay" and custom songs for life\'s special moments.',
  openGraph: {
    title: 'About Jeff Arthur | YourSongHere',
    description: 'Recording artist, Clio Award winner, and Tampa Bay\'s "King of Jingles" now creating custom songs for your special moments.',
  },
}

export default function AboutJeffPage() {
  return (
    <>
      <Header />
      <main style={{background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)'}}>
        {/* Hero Section */}
        <section style={{padding: '4rem 0 2rem', textAlign: 'center'}}>
          <div className="container">
            <h1 style={{fontSize: '3rem', marginBottom: '1rem', color: '#8B5CF6'}}>About Jeff Arthur</h1>
            <p style={{fontSize: '1.5rem', color: '#666', maxWidth: '800px', margin: '0 auto'}}>
              From Recording Artist to Jingle Legend to Your Personal Songwriter
            </p>
          </div>
        </section>

        {/* Early Years - Arthur, Hurley & Gottlieb */}
        <section style={{padding: '3rem 0', background: 'white'}}>
          <div className="container" style={{maxWidth: '1000px'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
              <div>
                <h2 style={{color: '#8B5CF6', marginBottom: '1.5rem'}}>The Early Years: Arthur, Hurley & Gottlieb</h2>
                <p style={{marginBottom: '1rem', lineHeight: '1.8'}}>
                  In the early 1970s, Jeff Arthur, Michael Hurley, and Neil Gottlieb were three University of South Florida students with a shared passion for music. Their talent caught the attention of legendary music executive Clive Davis, who signed them to Columbia Records.
                </p>
                <p style={{marginBottom: '1rem', lineHeight: '1.8'}}>
                  Their 1973 debut album featured the beautiful and joyful "Sunshine Ship," which became their signature song. The Time Magazine critic praised their second album, "Sunlight Shinin'" (1975, A&M Records), cementing their place in the folk-rock pantheon of the era.
                </p>
                <p style={{marginBottom: '1rem', lineHeight: '1.8'}}>
                  During this period, Jeff performed on <strong>The Mike Douglas Show</strong> and shared stages with legends like John Lennon and Van Morrison at Philharmonic Hall in New York. The trio recorded with an all-star cast of session musicians and toured nationally before pursuing solo ventures.
                </p>
              </div>
              <div style={{background: '#f8f8f8', padding: '2rem', borderRadius: '12px', textAlign: 'center'}}>
                <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', marginBottom: '1rem'}}>
                  <iframe
                    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                    src="https://www.youtube.com/embed/02jo6CI1aBw?rel=0&modestbranding=1"
                    title="Arthur, Hurley & Gottlieb on The Mike Douglas Show"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p style={{fontSize: '0.9rem', color: '#666', fontStyle: 'italic', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                  Watch: Arthur, Hurley & Gottlieb on The Mike Douglas Show
                </p>
                <p style={{fontSize: '0.85rem', color: '#999'}}>
                  The complete anthology (1970-1975) featuring "Sunshine Ship" is available on major streaming platforms.
                </p>
              </div>
            </div>
            
            {/* Arthur, Hurley & Gottlieb Album Art */}
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem'}}>
              <div style={{textAlign: 'center'}}>
                <img 
                  src="/arthur-hurley-gottlieb-studio.jpg" 
                  alt="Arthur, Hurley & Gottlieb publicity photo" 
                  style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}
                />
                <p style={{fontSize: '0.85rem', color: '#666', marginTop: '0.5rem', fontStyle: 'italic'}}>
                  Arthur, Hurley & Gottlieb: Jeffery Arthur (acoustic guitar, lead vocals), Michael Hurley (keyboard, bass, flute, vocals), Neal Gottlieb (violin, vocals)
                </p>
              </div>
              <div style={{textAlign: 'center'}}>
                <img 
                  src="/arthur-hurley-gottlieb-album.jpg" 
                  alt="Arthur, Hurley & Gottlieb Columbia Records album cover" 
                  style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}
                />
                <p style={{fontSize: '0.85rem', color: '#666', marginTop: '0.5rem', fontStyle: 'italic'}}>
                  Columbia Records album cover
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Jeff Arthur Productions */}
        <section style={{padding: '3rem 0'}}>
          <div className="container" style={{maxWidth: '1000px'}}>
            <h2 style={{color: '#8B5CF6', marginBottom: '1.5rem', textAlign: 'center'}}>Jeff Arthur Productions: The Jingle King</h2>
            
            <div style={{background: 'white', padding: '2rem', borderRadius: '12px', marginBottom: '2rem'}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                After his recording career, Jeff founded Jeff Arthur Productions in Clearwater, Florida, becoming one of the elite Clio Award-winning jingle houses in the United States. The St. Petersburg native transformed from touring musician into Tampa Bay's "King of Jingles."
              </p>
              
              <h3 style={{color: '#8B5CF6', marginBottom: '1rem'}}>Award-Winning Work</h3>
              <p style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
                Jeff's lobby walls are covered with awards, including <strong>multiple Clio Awards</strong> and <strong>Addy Awards</strong>. His work has been featured in campaigns for major national and regional brands.
              </p>

              <h3 style={{color: '#8B5CF6', marginBottom: '1rem'}}>Notable Clients Include:</h3>
              <ul style={{lineHeight: '2', marginBottom: '1.5rem', paddingLeft: '2rem'}}>
                <li><strong>Wendy's</strong> - National fast-food chain</li>
                <li><strong>Tampa Bay Buccaneers</strong> - "Hey Hey Tampa Bay" (1979-present)</li>
                <li><strong>Jiffy Lube</strong> - Auto service centers</li>
                <li><strong>La-Z-Boy</strong> - Furniture retailer</li>
                <li><strong>AMC Theaters</strong> - Movie theater chain</li>
                <li><strong>Anheuser-Busch</strong> - Beverage giant</li>
                <li><strong>Merrill Lynch</strong> - On-hold music</li>
                <li><strong>DeBartolo Corp</strong> - Shopping malls nationwide</li>
              </ul>
            </div>

            {/* Hey Hey Tampa Bay */}
            <div style={{background: 'linear-gradient(135deg, #FF6B35 0%, #D62828 100%)', padding: '2rem', borderRadius: '12px', color: 'white', marginBottom: '2rem'}}>
              <h3 style={{marginBottom: '1rem', fontSize: '1.8rem'}}>🏈 "Hey Hey Tampa Bay!"</h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center'}}>
                <div>
                  <p style={{lineHeight: '1.8', marginBottom: '1rem'}}>
                    In 1979, when the Tampa Bay Buccaneers burst into the NFL limelight during their first playoff season, Jeff Arthur created a fight song that took Tampa Bay by storm. Nearly 50 years later, fans still sing it whenever the Bucs score at home.
                  </p>
                  <p style={{lineHeight: '1.6', fontStyle: 'italic', fontSize: '1.05rem'}}>
                    "B-U-C-C-A-N-E-E-R-S, Go Bucs!<br/>
                    Hey, Hey, Tampa Bay!<br/>
                    The Bucs know how to shine!<br/>
                    Hey, Hey, Tampa Bay!<br/>
                    The Bucs know how to shine!<br/>
                    We're in trouble,<br/>
                    That's okay<br/>
                    We can pull it out!<br/>
                    Because we know we're on the top<br/>
                    We stand up<br/>
                    Stand up and shout!"
                  </p>
                </div>
                <div>
                  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', border: '3px solid white'}}>
                    <iframe
                      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                      src="https://www.youtube.com/embed/gF2grsWaAC0?rel=0&modestbranding=1"
                      title="Hey Hey Tampa Bay - Buccaneers Fight Song"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p style={{fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'center', opacity: 0.9}}>
                    One of countless re-recordings over the decades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Craft of Music */}
        <section style={{padding: '3rem 0', background: 'white'}}>
          <div className="container" style={{maxWidth: '800px'}}>
            <h2 style={{color: '#8B5CF6', marginBottom: '1.5rem', textAlign: 'center'}}>The Power of Music in Memory</h2>
            <blockquote style={{fontSize: '1.2rem', fontStyle: 'italic', padding: '2rem', background: '#f8f8f8', borderLeft: '4px solid #8B5CF6', margin: '0 0 2rem 0', lineHeight: '1.8'}}>
              "Words put to music are 400 times more memorable than the spoken word itself. You can't teach them a whole bunch of stuff about exactly what the new sandwich is going to be, but you can get them to remember 'two all-beef patties.'"
              <div style={{marginTop: '1rem', fontSize: '1rem', fontStyle: 'normal', color: '#666'}}>
                — Jeff Arthur
              </div>
            </blockquote>
            <p style={{lineHeight: '1.8', marginBottom: '1rem'}}>
              Academic studies over two decades have yielded a large body of evidence supporting the efficacy of music in memorability - showing a 33% increase in the memorability of advertising when set to music. Jeff has spent over 40 years mastering this craft.
            </p>
          </div>
        </section>

        {/* Family & Today */}
        <section style={{padding: '3rem 0'}}>
          <div className="container" style={{maxWidth: '1000px'}}>
            <h2 style={{color: '#8B5CF6', marginBottom: '2rem', textAlign: 'center'}}>Music Runs in the Family</h2>
            
            <div style={{background: 'white', padding: '2rem', borderRadius: '12px', marginBottom: '2rem'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
                <div>
                  <h3 style={{color: '#8B5CF6', marginBottom: '1rem'}}>Something Out West</h3>
                  <p style={{lineHeight: '1.8', marginBottom: '1rem'}}>
                    Jeff's son <strong>Andrew Arthur</strong> carries on the musical legacy as part of the duo <strong>Something Out West</strong> with Chet Hanks (son of Tom Hanks). Based in Nashville, the duo continues the Arthur tradition of compelling songwriting and performance.
                  </p>
                  <p style={{lineHeight: '1.8'}}>
                    Jeff frequently visits Nashville to spend time with Andrew and stay connected to the music scene that shaped his early career.
                  </p>
                </div>
                <div>
                  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
                    <iframe
                      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                      src="https://www.youtube.com/embed/DuKJsRDuE0c?rel=0&modestbranding=1"
                      title="Something Out West - You Better Run (feat. Tom Hanks cameo)"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p style={{fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginTop: '0.5rem', textAlign: 'center'}}>
                    Watch for a cameo by Tom Hanks!
                  </p>
                </div>
              </div>
            </div>

            <div style={{background: 'white', padding: '2rem', borderRadius: '12px'}}>
              <h2 style={{color: '#8B5CF6', marginBottom: '1.5rem'}}>Today: YourSongHere</h2>
              <p style={{lineHeight: '1.8', marginBottom: '1rem'}}>
                Now semi-retired from the jingle business, Jeff Arthur has come full circle. At his Clearwater studio, he's returned to his roots - creating personal, meaningful songs for individuals and their special moments.
              </p>
              <p style={{lineHeight: '1.8'}}>
                Drawing on decades of experience writing for Fortune 500 companies, performing with music legends, and creating thousands of memorable melodies, Jeff now offers something uniquely special: custom songs that capture your story, your love, your moment - forever.
              </p>
            </div>
          </div>
        </section>

        {/* Career Highlights Timeline */}
        <section style={{padding: '3rem 0', background: 'white'}}>
          <div className="container" style={{maxWidth: '1000px'}}>
            <h2 style={{color: '#8B5CF6', marginBottom: '2rem', textAlign: 'center'}}>Career Highlights</h2>
            <div style={{display: 'grid', gap: '1.5rem'}}>
              {[
                { year: 'Early 1970s', event: 'Formed Arthur, Hurley & Gottlieb at University of South Florida' },
                { year: '1973', event: 'Signed to Columbia Records by Clive Davis, released "Sunshine Ship"' },
                { year: '1970s', event: 'Performed on The Mike Douglas Show' },
                { year: '1970s', event: 'Shared stage with John Lennon and Van Morrison at Philharmonic Hall, NYC' },
                { year: '1975', event: 'Released second album on A&M Records, praised by Time Magazine' },
                { year: '1979', event: 'Created "Hey Hey Tampa Bay" for the Tampa Bay Buccaneers' },
                { year: '1980s-2000s', event: 'Won multiple Clio and Addy Awards for advertising work' },
                { year: '1989', event: 'Featured on cover of Maddux Report business magazine' },
                { year: '2000s', event: 'Became the largest producer of music for shopping malls in America' },
                { year: 'Present', event: 'Creating custom songs through YourSongHere' }
              ].map((item, idx) => (
                <div key={idx} style={{display: 'flex', gap: '2rem', padding: '1.5rem', background: '#f8f8f8', borderRadius: '8px'}}>
                  <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#8B5CF6', minWidth: '140px'}}>
                    {item.year}
                  </div>
                  <div style={{lineHeight: '1.6'}}>
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{padding: '4rem 0', textAlign: 'center', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)'}}>
          <div className="container" style={{maxWidth: '800px'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#8B5CF6'}}>
              Let Jeff Create Your Song
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8', color: '#666'}}>
              With decades of experience writing for everyone from the Buccaneers to Wendy's, from John Lennon's stage to Merrill Lynch's phone lines, Jeff Arthur brings a lifetime of musical mastery to your special moment.
            </p>
            <a href="/create" className="btn btn-primary" style={{fontSize: '1.2rem', padding: '1rem 2.5rem'}}>
              Create Your Custom Song
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
