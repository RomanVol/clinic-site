'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false)
  const [fontSize, setFontSize] = useState('medium')
  const [highContrast, setHighContrast] = useState(false)

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement
    
    // Font size settings
    root.classList.remove('text-small', 'text-medium', 'text-large')
    root.classList.add(`text-${fontSize}`)
    
    // High contrast setting
    if (highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
  }, [fontSize, highContrast])

  const increaseFontSize = () => {
    if (fontSize === 'medium') setFontSize('large')
    else if (fontSize === 'small') setFontSize('medium')
  }

  const decreaseFontSize = () => {
    if (fontSize === 'medium') setFontSize('small')
    else if (fontSize === 'large') setFontSize('medium')
  }

  const resetAccessibility = () => {
    setFontSize('medium')
    setHighContrast(false)
  }

  return (
    <>
      {/* Accessibility Toolbar */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">נגישות:</span>
              
              {/* Font Size Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={decreaseFontSize}
                  className="px-2 py-1 text-sm bg-black text-white hover:bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  aria-label="הקטן טקסט"
                  disabled={fontSize === 'small'}
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSize('medium')}
                  className="px-2 py-1 text-sm bg-black text-white hover:bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  aria-label="טקסט רגיל"
                >
                  A
                </button>
                <button
                  onClick={increaseFontSize}
                  className="px-2 py-1 text-sm bg-black text-white hover:bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  aria-label="הגדל טקסט"
                  disabled={fontSize === 'large'}
                >
                  A+
                </button>
              </div>

              {/* High Contrast Toggle */}
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`px-3 py-1 text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  highContrast 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
                }`}
                aria-label={highContrast ? 'בטל ניגודיות גבוהה' : 'הפעל ניגודיות גבוהה'}
              >
                {highContrast ? '🌞 ניגודיות רגילה' : '🌓 ניגודיות גבוהה'}
              </button>

              {/* Reset Button */}
              <button
                onClick={resetAccessibility}
                className="px-3 py-1 text-sm bg-black text-white hover:bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                aria-label="אפס הגדרות נגישות"
              >
                ↺ אפס
              </button>
            </div>

            {/* Skip to main content link */}
            <a
              href="#hero"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
            >
              דלג לתוכן הראשי
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-4xl font-black text-blue-600">
              <Link href="/">הקליניקה של רונן</Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/#hero" className="text-xl font-bold text-gray-700 hover:text-blue-600 transition duration-300">
              בית
            </Link>
            <Link href="/#services" className="text-xl font-bold text-gray-700 hover:text-blue-600 transition duration-300">
              טיפולים
            </Link>
            <Link href="/#about" className="text-xl font-bold text-gray-700 hover:text-blue-600 transition duration-300">
              אודות
            </Link>
            <Link href="/#testimonials" className="text-xl font-bold text-gray-700 hover:text-blue-600 transition duration-300">
              המלצות
            </Link>
            <Link href="/#contact" className="text-xl font-bold text-gray-700 hover:text-blue-600 transition duration-300">
              צור קשר
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            <div className="text-lg font-bold text-gray-600">
              <div>📞 052-553-3295</div>
              <div>📧 ronenmaga@gmail.com</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link href="/#hero" className="text-lg font-bold text-gray-700 hover:text-blue-600 py-2">
                בית
              </Link>
              <Link href="/#services" className="text-lg font-bold text-gray-700 hover:text-blue-600 py-2">
                טיפולים
              </Link>
              <Link href="/#about" className="text-lg font-bold text-gray-700 hover:text-blue-600 py-2">
                אודות
              </Link>
              <Link href="/#testimonials" className="text-lg font-bold text-gray-700 hover:text-blue-600 py-2">
                המלצות
              </Link>
              <Link href="/#contact" className="text-lg font-bold text-gray-700 hover:text-blue-600 py-2">
                צור קשר
              </Link>
              <div className="text-base font-bold text-gray-600 pt-4">
                <div>📞 052-553-3295</div>
                <div>📧 ronenmaga@gmail.com</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  )
}
