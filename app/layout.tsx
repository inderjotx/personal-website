import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextTheme from './_components/Provider/ThemeProvider'
import Navbar from './_components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <div>
          <NextTheme >
            <Navbar />
            <div className='mt-20 h-24' > 
              {children}
            </div>
          </NextTheme>
        </div>

      </body>
    </html>
  )
}
