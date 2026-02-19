import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function FAQPage() {
  const faqs = [
    {
      question: "What musical styles can you create?",
      answer: "We can create songs in any genre or style - pop, rock, country, folk, ballad, R&B/Soul, blues, jazz, and more. Just let us know your preference in the order form."
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
      answer: "Any meaningful moment! We've created songs for weddings, anniversaries, proposals, birthdays, baby showers, graduations, corporate milestones, and more. If it matters to you, it's perfect for a song."
    },
    {
      question: "How do I provide the information for my song?",
      answer: "When you click 'Create Your Song,' you'll go through a simple questionnaire where you tell us about the occasion, the people involved, special memories, inside jokes, and your musical preferences. The more detail you provide, the more personalized your song will be."
    },
    {
      question: "What file format do I receive?",
      answer: "You'll receive a high-quality MP3 file that's perfect for streaming and sharing. The file is yours to download and keep forever."
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
      answer: "We're here to help! Email us at jinglejeff@gmail.com. We typically respond within 24 hours."
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
              We're happy to answer any questions you have. Email us at jinglejeff@gmail.com
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
