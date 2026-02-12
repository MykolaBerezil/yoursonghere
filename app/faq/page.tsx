import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function FAQPage() {
  const faqs = [
    {
      question: "How long does it take to create a custom song?",
      answer: "Our typical turnaround is 3 days from deposit to first draft. Rush delivery options are available for an additional fee if you need your song faster."
    },
    {
      question: "What's included in the $500 price?",
      answer: "You receive a professionally written, recorded, mixed, and mastered original song (3+ minutes), high-quality MP3 and WAV files, a printed lyric sheet, and up to 3 rounds of revisions. The $500 is split into a $250 deposit when you order, and $250 when the song is complete."
    },
    {
      question: "Can I request revisions?",
      answer: "Absolutely! Every custom song includes up to 3 rounds of revisions. We want you to be completely thrilled with your song, so we'll work with you to make any necessary adjustments to lyrics, melody, or arrangement."
    },
    {
      question: "What if I don't like the song?",
      answer: "This is extremely rare because we work closely with you throughout the process. However, with 3 revision rounds included, we have plenty of opportunity to ensure you love the final result. We're committed to creating something you'll treasure."
    },
    {
      question: "What musical styles can you create?",
      answer: "We can create songs in any genre or style - pop, rock, country, folk, ballad, hip-hop, classical, jazz, and more. Just let us know your preference in the order form, or suggest a reference artist/song for the style you're envisioning."
    },
    {
      question: "Do I need to provide lyrics?",
      answer: "No! Our songwriters will craft original lyrics based on the stories, memories, and details you share. However, if you have specific phrases or lines you'd like included, we're happy to incorporate them."
    },
    {
      question: "Can I use the song commercially?",
      answer: "The standard package is for personal use (weddings, parties, gifts, social media). If you need commercial usage rights (business promotions, public performances, selling copies), please contact us for commercial licensing options."
    },
    {
      question: "What occasions work well for custom songs?",
      answer: "Any meaningful moment! We've created songs for weddings, anniversaries, proposals, birthdays, bar/bat mitzvahs, baby showers, graduations, retirements, corporate milestones, memorial tributes, and more. If it matters to you, it's perfect for a song."
    },
    {
      question: "How do I provide the information for my song?",
      answer: "When you click 'Create Your Song,' you'll go through a simple 5-step questionnaire where you tell us about the occasion, the people involved, special memories, inside jokes, and your musical preferences. The more detail you provide, the more personalized your song will be."
    },
    {
      question: "When do I make payment?",
      answer: "You pay a $250 deposit when you place your order to begin the songwriting process. The remaining $250 is due when your song is complete and you're ready to receive your final files."
    },
    {
      question: "What file formats do I receive?",
      answer: "You'll receive high-quality MP3 files (perfect for streaming and sharing) and WAV files (uncompressed, studio-quality audio). You'll also get a PDF lyric sheet. All files are yours to download and keep forever."
    },
    {
      question: "Can I surprise someone with a custom song?",
      answer: "Absolutely! Many of our clients commission songs as surprise gifts. We can work with you discreetly and deliver the song via private link so you can share it at just the right moment."
    },
    {
      question: "Do you perform the song live?",
      answer: "While our standard package is a studio recording, live performance options may be available depending on location and timing. Contact us to discuss special performance requests."
    },
    {
      question: "What if I have more questions?",
      answer: "We're here to help! Email us at northbynome@gmail.com or use the contact form. We typically respond within 24 hours."
    }
  ]

  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="page-subtitle">
            Everything you need to know about creating your custom song
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <h2>Still Have Questions?</h2>
            <p>
              We're happy to answer any questions you have. Email us at northbynome@gmail.com
              or start your order and we'll be in touch within 24 hours.
            </p>
            <Link href="/create" className="btn btn-primary btn-large">
              Create Your Song
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
