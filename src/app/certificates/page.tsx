'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// Certificate data with Hebrew names for each certificate
const certificates = [
  {
    id: 1,
    image: '/certificate-1.jpeg',
    title: 'תעודת עיסוי רפואי',
    description: 'הסמכה בעיסוי רפואי טיפולי'
  },
  {
    id: 2,
    image: '/certificate-2.jpeg',
    title: 'תעודת עיסוי תיאלנדי',
    description: 'הסמכה בעיסוי תיאלנדי מסורתי'
  },
  {
    id: 3,
    image: '/certificate-3.jpeg',
    title: 'תעודת טרפיה מנואלית',
    description: 'הסמכה בטרפיה מנואלית מתקדמת'
  },
  {
    id: 4,
    image: '/certificate-4.jpeg',
    title: 'תעודת רפלקסולוגיה',
    description: 'הסמכה ברפלקסולוגיה טיפולית'
  },
  {
    id: 5,
    image: '/certificate-5.jpeg',
    title: 'תעודת שיאצו',
    description: 'הסמכה בעיסוי שיאצו יפני'
  },
  {
    id: 6,
    image: '/certificate-6.jpeg',
    title: 'תעודת כוסות רוח',
    description: 'הסמכה בטיפול בכוסות רוח'
  }
]

export default function CertificatesPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" dir="rtl">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              תעודות והסמכות
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              הכשרות מקצועיות והסמכות בתחום הטיפול הפיזיותרפי ושיטות הטיפול הטבעיות
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCertificate(certificate.id)}
                >
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {certificate.description}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                      לחץ להגדלה 🔍
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal for enlarged certificate view */}
          {selectedCertificate && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <div className="relative max-w-4xl max-h-[90vh] w-full">
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 left-4 bg-white bg-opacity-20 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-30 transition-all z-10"
                >
                  ✕
                </button>
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={certificates.find(cert => cert.id === selectedCertificate)?.image || ''}
                    alt={certificates.find(cert => cert.id === selectedCertificate)?.title || ''}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Professional Qualifications List */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-right mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              התמחויות וכישורים מקצועיים
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
              <div className="flex items-center justify-end">
                <span>עיסוי רפואי</span>
                <span className="text-green-400 mr-2">✓</span>
              </div>
              <div className="flex items-center justify-end">
                <span>עיסוי תיאלנדי</span>
                <span className="text-green-400 mr-2">✓</span>
              </div>
              <div className="flex items-center justify-end">
                <span>עיסוי שוודי</span>
                <span className="text-green-400 mr-2">✓</span>
              </div>
              <div className="flex items-center justify-end">
                <span>עיסוי רקמות עמוק</span>
                <span className="text-green-400 mr-2">✓</span>
              </div>
              <div className="flex items-center justify-end">
                <span>טרפיה מנואלית</span>
                <span className="text-green-400 mr-2">✓</span>
              </div>
              <div className="flex items-center justify-end">
                <span>רפלקסולוגיה</span>
                <span className="text-green-400 mr-2">✓</span>
              </div>
              <div className="flex items-center justify-end">
                <span>כוסות רוח</span>
                <span className="text-green-400 mr-2">✓</span>
              </div>
              <div className="flex items-center justify-end">
                <span>אנטיצלוליט</span>
                <span className="text-green-400 mr-2">✓</span>
              </div>
              <div className="flex items-center justify-end">
                <span>שיאצו</span>
                <span className="text-green-400 mr-2">✓</span>
              </div>
              <div className="flex items-center justify-end">
                <span>לומי לומי</span>
                <span className="text-green-400 mr-2">✓</span>
              </div>
              <div className="flex items-center justify-end">
                <span>טריגר פוינט</span>
                <span className="text-green-400 mr-2">✓</span>
              </div>
            </div>
          </div>

          {/* Back to About Button */}
          <div className="text-center">
            <Link
              href="/#about"
              className="inline-flex items-center bg-white text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold"
            >
              חזרה לעמוד אודות
              <span className="mr-2">🔙</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
