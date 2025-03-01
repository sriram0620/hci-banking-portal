import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SBI Online Banking",
  description: "Secure and convenient online banking services by SBI",
    generator: 'hci-banking-portal.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-background">
          <Sidebar />
          <div className="flex-1 md:ml-64">
            <main className="p-4 md:p-6">{children}</main>
            <MobileNavigation />
          </div>
        </div>
      </body>
    </html>
  )
}



import './globals.css'