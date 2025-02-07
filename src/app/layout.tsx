import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import PlausibleProvider from 'next-plausible'

import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Deepseek-Hub aggregates the most valuable Deepseek-related information',
  description: 'Open source dynamic website without database, built with Next.js and GitHub API',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlausibleProvider domain="deepseek-hub.site">
          <Layout>{children}</Layout>
        </PlausibleProvider>
      </body>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5306879059555308"
     crossOrigin="anonymous">
     </script>
    </html>
  )
}