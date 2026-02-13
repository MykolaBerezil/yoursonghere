import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yoursonghere.com'),
  title: {
    default: 'YourSongHere - Custom Songs for Life\'s Special Moments',
    template: '%s | YourSongHere'
  },
  description: 'Professional custom songs for weddings, anniversaries, proposals, birthdays, and every special moment. Original songs written & recorded by Jeff Arthur Studios in just 3 days. $500 all-inclusive.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  keywords: [
    'custom songs',
    'personalized songs',
    'wedding songs',
    'anniversary songs',
    'proposal songs',
    'birthday songs',
    'Jeff Arthur Studios',
    'custom music',
    'original songs',
    'professional songwriting',
    'custom wedding song',
    'personalized music gift',
    'song for special occasion'
  ],
  authors: [{ name: 'Jeff Arthur Studios' }],
  creator: 'Jeff Arthur Studios',
  publisher: 'YourSongHere',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.yoursonghere.com',
    title: 'YourSongHere - Custom Songs for Life\'s Special Moments',
    description: 'Professional custom songs for weddings, anniversaries, proposals & more. Original music written & recorded in 3 days. $500 all-inclusive.',
    siteName: 'YourSongHere',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YourSongHere - Custom Songs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourSongHere - Custom Songs for Life\'s Special Moments',
    description: 'Professional custom songs for weddings, anniversaries, proposals & more. $500 all-inclusive.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Add when you set up Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&family=Nunito:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://www.yoursonghere.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'YourSongHere',
              description: 'Professional custom song writing and recording service for weddings, anniversaries, proposals, and special occasions.',
              url: 'https://www.yoursonghere.com',
              telephone: '+1-555-123-4567',
              email: 'jinglejeff@gmail.com',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Clearwater',
                addressRegion: 'FL',
                postalCode: '33762',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 27.9659,
                longitude: -82.8001,
              },
              areaServed: {
                '@type': 'Country',
                name: 'United States',
              },
              offers: {
                '@type': 'Offer',
                price: '500',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                validFrom: '2026-02-01',
                description: 'Custom song writing and professional studio recording service',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '47',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
