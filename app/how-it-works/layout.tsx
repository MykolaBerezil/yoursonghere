import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Learn how to create your custom song in 4 easy steps. Share your story, we create magic, perfect it together, and treasure forever. Professional songwriting in 3 days.',
  openGraph: {
    title: 'How It Works | YourSongHere',
    description: 'From your story to a professionally recorded masterpiece in just 3 days. See how the process works.',
  },
}

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
