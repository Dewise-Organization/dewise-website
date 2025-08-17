import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dewise-organization.github.io/dewise-website'),
  title: 'Dewise Foundation',
  description: 'Empowering underserved communities through education, clean energy, and climate action.',
  openGraph: {
    title: 'Dewise Foundation',
    description:
      'Empowering underserved communities through education, clean energy, and climate action.',
    images: ['/og-default.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dewise Foundation',
    description:
      'Empowering underserved communities through education, clean energy, and climate action.',
    images: ['/og-default.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}


