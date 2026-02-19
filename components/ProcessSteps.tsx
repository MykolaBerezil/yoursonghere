export default function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: 'Share Your Story',
      description: 'Fill out our form with details about the moment, the people, and the memories that matter most.'
    },
    {
      number: 2,
      title: 'We Create Magic',
      description: 'Jeff personally writes and records your custom song in our professional studio.'
    },
    {
      number: 3,
      title: 'Treasure Forever',
      description: 'Receive your song as an MP3 file. Share, stream, and cherish forever.'
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
