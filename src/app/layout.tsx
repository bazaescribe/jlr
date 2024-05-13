import './globals.css'
import './page.module.css';
import './templates.css';
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'José Luis Rosas Baza',
  description: 'Strategist, product designer and developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.png" />
        <meta name="theme-color" content="#F4F4F4" />
      </head>
      <body>{children}</body>
    </html>
  )
}
