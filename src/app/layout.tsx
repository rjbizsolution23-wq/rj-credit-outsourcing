import type { Metadata, Viewport } from 'next'
import { Inter, Sora, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Toaster } from 'sonner'
import '@/app/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Rick Jefferson Supreme Credit Master AGI — B2B Outsourcing for CROs',
    template: '%s | Rick Jefferson Credit AGI',
  },
  description:
    'White-label credit repair processing for Credit Repair Organizations. Military-grade FCRA violation detection, attorney-level dispute letters, financial roadmaps — all under YOUR brand.',
  keywords: [
    'credit repair outsourcing', 'white label credit repair', 'CRO processing',
    'FCRA violation detection', 'dispute letters wholesale', 'B2B credit repair',
    'Rick Jefferson', 'credit repair AGI',
  ],
  authors: [{ name: 'Rick Jefferson', url: 'https://rickjeffersonsolutions.com' }],
  creator: 'Rick Jefferson Solutions',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://rickjeffersonsolutions.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Rick Jefferson Supreme Credit Master AGI — B2B Outsourcing for CROs',
    description: 'Scale your CRO with white-label credit repair processing. FCRA-certified. Attorney-level. 48-hour turnaround.',
    siteName: 'Rick Jefferson Credit AGI',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rick Jefferson Credit AGI — B2B CRO Outsourcing',
    description: 'White-label credit repair processing. Scale your CRO without scaling headcount.',
    creator: '@ricksolutions1',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#635bff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#13131f',
                border: '1px solid rgba(99,91,255,0.3)',
                color: '#e8e8f0',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
