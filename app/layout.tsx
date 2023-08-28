import { Header } from "@/components/navigation/header"

import "./globals.css"

import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/react"

const sans = localFont({
  src: [
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-25Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-26ThIt.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-35XLt.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-36XLtIt.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-45Lt.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-46LtIt.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-55Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-56It.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-65Md.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-66MdIt.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-75Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-76BdIt.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-95Blk.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-96BlkIt.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
})
// // const sans = localFont({
// //   src: [
// //     {
// //       path: "../public/fonts/neue-haas-grotesk/text/NHaasGroteskTXPro-55Rg.woff2",
// //       weight: "400",
// //       style: "normal",
// //     },
// //     {
// //       path: "../public/fonts/neue-haas-grotesk/text/NHaasGroteskTXPro-56It.woff2",
// //       weight: "400",
// //       style: "italic",
// //     },
// //     {
// //       path: "../public/fonts/neue-haas-grotesk/text/NHaasGroteskTXPro-65Md.woff2",
// //       weight: "500",
// //       style: "normal",
// //     },
// //     {
// //       path: "../public/fonts/neue-haas-grotesk/text/NHaasGroteskTXPro-66MdIt.woff2",
// //       weight: "500",
// //       style: "italic",
// //     },
// //     {
// //       path: "../public/fonts/neue-haas-grotesk/text/NHaasGroteskTXPro-75Bd.woff2",
// //       weight: "700",
// //       style: "normal",
// //     },
// //     {
// //       path: "../public/fonts/neue-haas-grotesk/text/NHaasGroteskTXPro-76BdIt.woff2",
// //       weight: "700",
// //       style: "italic",
// //     },
// //   ],
// //   variable: "--font-sans",
// //   display: "swap",
// // });

const serif = localFont({
  src: [
    {
      path: "../public/fonts/voyage/voyage-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/voyage/voyage-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Juan Serrano Studio",
    template: "%s | Juan Serrano Studio",
  },
  description:
    "Muebles artesanos creados por Juan Serrano, carpintero y ebanista basado en Madrid.",
  openGraph: {
    title: "Juan Serrano Studio",
    description:
      "Muebles artesanos creados por Juan Serrano, carpintero y ebanista basado en Madrid.",

    url: "https://juanserrano.studio",
    siteName: "Juan Serrano Studio",
    images: [
      {
        url: "https://juanserrano.studio/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "es-ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/public/favicon/favicon.ico",
    shortcut: "/public/favicon/favicon.ico",
    apple: "/public/favicon/apple-touch-icon.png",
  },
  manifest: "/public/favicon/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Analytics />

      <body className={`${sans.variable} ${serif.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
