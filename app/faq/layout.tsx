import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Common questions about custom songs: pricing, turnaround time, revisions, musical styles, occasions, and payment. Get answers about our $500 custom song service.',
  openGraph: {
    title: 'FAQ | YourSongHere',
    description: 'Everything you need to know about ordering custom songs. Pricing, process, and more.',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
