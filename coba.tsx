"use client"

import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"
import { useRouter } from "next/router"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"

import { siteConfig } from "@/config/site"
import variants, { withExit } from "@/lib/animation/variants"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

const onExitComplete = () => window.scrollTo(0, 0)
const v = withExit(variants)

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "Blog", "CakraDarma", "Portofolio,", "Personal Web"],
  authors: [
    {
      name: "CakraDarma",
      url: "https://cakradarma.id",
    },
  ],
  creator: "CakraDarma",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@CakraDarma",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { asPath, pathname } = useRouter()
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background  font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LazyMotion features={domAnimation}>
            <AnimatePresence
              initial={false}
              onExitComplete={onExitComplete}
              mode="wait"
            >
              <AnimatePresence
                initial={false}
                onExitComplete={onExitComplete}
                mode="wait"
              >
                <m.div
                  id="skip-content"
                  key={asPath.concat(asPath)}
                  variants={v}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={cn(
                    asPath === "/resume" && "mx-auto w-11/12 max-w-3xl"
                  )}
                >
                  {children}
                </m.div>
              </AnimatePresence>
            </AnimatePresence>
            <Analytics />
            <Toaster />
            <TailwindIndicator />
          </LazyMotion>
        </ThemeProvider>
      </body>
    </html>
  )
}
