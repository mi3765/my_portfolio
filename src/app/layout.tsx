import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'

export const roboto = Roboto_Flex({
  weight: ["300", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
