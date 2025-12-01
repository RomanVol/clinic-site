import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  // Basic Meta Tags
  title: {
    default: "מרפאת רונן | מומחה לטיפול בכאבים ופציעות בראשון לציון",
    template: "%s | מרפאת רונן"
  },
  description: "רונן - מומחה לטיפול בכאבי גב, צוואר, כתף ופציעות ספורט בראשון לציון. 15+ שנות ניסיון, עיסוי רפואי, פיזיותרפיה מתקדמת, שיאצו, כוסות רוח. תוצאות מוכחות. התקשרו עכשיו: 052-553-3295",
  keywords: [
    "טיפול בכאבי גב",
    "טיפול בכאבי צוואר", 
    "פיזיותרפיה ראשון לציון",
    "עיסוי רפואי",
    "טיפול בכאבי כתף",
    "פציעות ספורט",
    "שיאצו",
    "כוסות רוח",
    "עיסוי שוודי",
    "טריגר פוינט",
    "טרפיה מנואלית",
    "טיפול בכאבי רגליים",
    "טיפול בכאבי ידיים",
    "מרפאה בראשון לציון",
    "רונן מעסה"
  ],
  authors: [{ name: "רונן" }],
  creator: "מרפאת רונן",
  publisher: "מרפאת רונן",
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://ronenmerape.co.il',
    siteName: 'מרפאת רונן',
    title: 'מרפאת רונן | מומחה לטיפול בכאבים ופציעות בראשון לציון',
    description: 'רונן - מומחה לטיפול בכאבי גב, צוואר, כתף ופציעות ספורט. 15+ שנות ניסיון, תוצאות מוכחות. התקשרו: 052-553-3295',
    images: [
      {
        url: 'https://ronenmerape.co.il/Ronen_Pic.png',
        width: 1200,
        height: 630,
        alt: 'רונן - מומחה לטיפול בכאבים ופציעות',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'מרפאת רונן | מומחה לטיפול בכאבים ופציעות',
    description: 'רונן - מומחה לטיפול בכאבי גב, צוואר, כתף ופציעות ספורט. 15+ שנות ניסיון.',
    images: ['https://ronenmerape.co.il/Ronen_Pic.png'],
  },

  // Verification (add your actual codes)
  verification: {
    google: 'q5J9HuOmmmAFT5xaswfTOV6DwcR0nAC--VGb5J5ljZM',
  },

  // Canonical URL
  metadataBase: new URL('https://ronenmerape.co.il'),
  alternates: {
    canonical: '/',
  },

  // Additional Meta
  category: 'health',
  classification: 'Medical Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* JSON-LD Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "מרפאת רונן",
              "alternateName": "Ronen Clinic",
              "description": "מומחה לטיפול בכאבים ופציעות, עיסוי רפואי, פיזיותרפיה, שיאצו, כוסות רוח",
              "url": "https://ronenmerape.co.il",
              "logo": "https://ronenmerape.co.il/Ronen_Pic.png",
              "image": "https://ronenmerape.co.il/Ronen_Pic.png",
              "telephone": "+972-52-553-3295",
              "email": "ronenmaga@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "אריה בן אליעזר 32",
                "addressLocality": "ראשון לציון",
                "addressRegion": "מרכז",
                "postalCode": "",
                "addressCountry": "IL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "31.9730",
                "longitude": "34.7925"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "19:00"
                }
              ],
              "priceRange": "₪₪",
              "paymentAccepted": ["Cash", "Credit Card"],
              "currenciesAccepted": "ILS",
              "areaServed": {
                "@type": "City",
                "name": "ראשון לציון"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100077433684507"
              ],
              "medicalSpecialty": [
                "Physical Therapy",
                "Sports Medicine",
                "Pain Management"
              ],
              "availableService": [
                {
                  "@type": "MedicalTherapy",
                  "name": "טיפול בכאבי גב",
                  "description": "טיפול מקצועי בכאבי גב תחתון ועליון"
                },
                {
                  "@type": "MedicalTherapy", 
                  "name": "טיפול בכאבי צוואר",
                  "description": "טיפול בכאבי צוואר וראש"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "פציעות ספורט",
                  "description": "טיפול בפציעות ספורט ושיקום"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "עיסוי שיאצו",
                  "description": "עיסוי שיאצו יפני מסורתי"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "כוסות רוח",
                  "description": "טיפול בכוסות רוח"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5"
              }
            })
          }}
        />
      </head>
      <body
        className={`${heebo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
