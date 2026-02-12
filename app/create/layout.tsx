import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Your Custom Song',
  description: 'Order a professional custom song for your wedding, anniversary, proposal, or special occasion. Multi-step order form. $500 all-inclusive with 3-day turnaround.',
  openGraph: {
    title: 'Create Your Custom Song | YourSongHere',
    description: 'Order a professional custom song for your special moment. $500 all-inclusive.',
  },
}

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
