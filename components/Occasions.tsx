export default function Occasions() {
  const occasions = [
    { icon: '💍', title: 'Weddings', description: 'First dance, ceremony entrance, or surprise gift' },
    { icon: '💕', title: 'Anniversaries', description: 'Celebrate your journey together' },
    { icon: '🎂', title: 'Birthdays', description: 'Make their special day unforgettable' },
    { icon: '💎', title: 'Proposals', description: 'Pop the question with a song' },
    { icon: '👶', title: 'Baby Showers', description: 'Welcome the newest family member' },
    { icon: '🎓', title: 'Graduations', description: 'Honor their achievement' },
    { icon: '🏢', title: 'Corporate Milestones', description: 'Celebrate company achievements' },
  ]

  return (
    <section id="occasions">
      <div className="container">
        <h2>Perfect For Every Occasion</h2>
        <div className="occasions-grid">
          {occasions.map((occasion, index) => (
            <div key={index} className="occasion-card">
              <div className="occasion-icon">{occasion.icon}</div>
              <h3>{occasion.title}</h3>
              <p>{occasion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
