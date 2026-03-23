import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Legal Tech Asociados | Abogados PQR y Multas Barranquilla',
  description: 'Firma legaltech en Barranquilla especializada en gestión de PQR servicios públicos (SSPD/CREG), multas de tránsito, derecho civil y familia. Consulta gratis 24h.',
  keywords: 'PQR servicios públicos Colombia, abogados SSPD Barranquilla, multas tránsito Atlántico, legaltech Colombia, abogados CREG, fotomultas Barranquilla',
  authors: [{ name: 'Legal Tech Asociados' }],
  creator: 'Legal Tech Asociados',
  publisher: 'Legal Tech Asociados',
  robots: 'index, follow',
  openGraph: {
    title: 'Legal Tech Asociados | Abogados PQR y Multas Barranquilla',
    description: 'Firma legaltech especializada en gestión de PQR servicios públicos, multas de tránsito y derecho civil en Barranquilla. Resuelve CREG/SSPD en 24h.',
    url: 'https://legaltechasociados.com',
    siteName: 'Legal Tech Asociados',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Tech Asociados | Abogados PQR y Multas Barranquilla',
    description: 'Firma legaltech especializada en gestión de PQR servicios públicos, multas de tránsito y derecho civil en Barranquilla.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4b3286',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Legal Tech Asociados",
              "description": "Firma legaltech especializada en gestión de PQR, multas de tránsito, derecho civil y familia en Barranquilla, Colombia",
              "url": "https://legaltechasociados.com",
              "telephone": "+57-300-123-4567",
              "email": "contacto@legaltech.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle 72 #54-35, Oficina 301",
                "addressLocality": "Barranquilla",
                "addressRegion": "Atlántico",
                "postalCode": "080001",
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.9685,
                "longitude": -74.7813
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "priceRange": "$$",
              "areaServed": ["Barranquilla", "Urumita", "Malambo", "Soledad", "Atlántico", "Colombia"],
              "knowsAbout": ["PQR", "SSPD", "CREG", "Multas de tránsito", "Derecho civil", "Derecho de familia"]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
