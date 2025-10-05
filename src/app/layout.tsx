import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alina Iarkeeva - Product Manager Portfolio',
  description: 'Product Manager with expertise in Product Management, Product Development, Stakeholder Management, Agile Methodologies, API, Fintech, and Payment Solutions. Based in Vancouver, Canada.',
  keywords: 'Product Management, Product Development, Stakeholder Management, Agile, Scrum, API, Fintech, Banking, Payments, ERP, CRM, Business analysis, Project Mnagaement, Vancouver, Canada',
  authors: [{ name: 'Alina Iarkeeva' }],
  openGraph: {
    title: 'Alina Iarkeeva - Product Manager Portfolio',
    description: 'Product Manager with expertise in Product Management, Product Development, Stakeholder Management, Agile Methodologies, API, Fintech, and Payment Solutions.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 