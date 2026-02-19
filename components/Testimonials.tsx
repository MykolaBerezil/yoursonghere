export default function Testimonials() {
  const testimonials = [
    {
      text: "Jeff captured our entire love story in 3 minutes. My wife cried happy tears when I played it at our reception. This isn't just a song - it's our heirloom.",
      author: "Michael Chen",
      occasion: "Wedding Anniversary"
    },
    {
      text: "I proposed with a custom song Jeff wrote about our first date, our inside jokes, everything that makes us *us*. She said yes before I even got on one knee!",
      author: "David Rodriguez",
      occasion: "Proposal"
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.author.charAt(0)}</div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.occasion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
