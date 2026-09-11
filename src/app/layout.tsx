import type { Metadata } from "next"
import { DM_Serif_Display, DM_Mono } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/context/LanguageProvider"

const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" })
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" })

const siteUrl = "https://your-domain.vercel.app"

export const metadata: Metadata = {
  title: "Nicolás Nievas | Backend & Fullstack Developer",
  description:
    "Portafolio de Nicolás Nievas, desarrollador Backend y Fullstack especializado en Java, Spring Boot, C#/.NET, React y Next.js.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Nicolás Nievas | Backend & Fullstack Developer",
    description:
      "APIs escalables, arquitecturas robustas e integraciones complejas. Java, Spring Boot, .NET, React y Next.js.",
    url: siteUrl,
    siteName: "Nicolás Nievas — Portfolio",
    locale: "es_ES",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${serif.variable} ${mono.variable} bg-[#EEEAE3] dark:bg-neutral-950 text-neutral-900 dark:text-stone-100 font-mono transition-colors duration-300`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}