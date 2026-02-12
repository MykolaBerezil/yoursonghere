import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Jeff Arthur Studios',
  description: 'Meet Jeff Arthur, professional songwriter and musician creating custom songs for life\'s special moments. Learn about our mission to turn your memories into music.',
  openGraph: {
    title: 'About Us | YourSongHere',
    description: 'Professional custom songwriting by Jeff Arthur Studios. Turning your special moments into timeless music.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
