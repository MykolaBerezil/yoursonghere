export default function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: 'Share Your Story',
      description: 'Tell us about the moment, the people, the memories that matter most.'
    },
    {
      number: 2,
      title: 'We Create Magic',
      description: 'Jeff personally writes and records your song in our professional studio in just 3 days.'
    },
    {
      number: 3,
      title: 'Perfect It Together',
      description: 'Up to 3 revisions included to ensure your song is absolutely perfect.'
    },
    {
      number: 4,
      title: 'Treasure Forever',
      description: 'Download your MP3 & WAV files plus lyric sheet. Share, stream, and cherish forever.'
    }
  ]

  return (
    <section id="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="process-steps">
          {steps.map(step => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
