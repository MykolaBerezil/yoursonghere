import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Sample Custom Songs',
  description: 'Listen to sample custom songs created for weddings, proposals, anniversaries, and birthdays. Hear the quality and emotion in our professionally recorded music.',
  openGraph: {
    title: 'Portfolio | YourSongHere',
    description: 'Listen to sample custom songs we\'ve created for real clients. Wedding songs, proposal songs, and more.',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
