import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YourSongHere - Custom Songs for Life\'s Special Moments',
  description: 'Professional custom songs for weddings, anniversaries, proposals, and every moment worth remembering. Created by Jeff Arthur Studios.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
