// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To-Do List',
  description: 'Track your tasks elegantly with Next.js 14',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black dark:bg-zinc-900 dark:text-white`}>
      <Navbar />
        {children}
      </body>
    </html>
  )
}
