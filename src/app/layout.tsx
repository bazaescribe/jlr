import './globals.css'
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
        <meta name="theme-color" content="#EBFF00" /> 
        <link rel="icon" href="./favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
