'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium')
  const [darkMode, setDarkMode] = useState(false)

  // Load saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
    } else if (savedTheme === 'light') {
      setDarkMode(false)
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(prefersDark)
    }
  }, [])

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement
    
    // Font size settings
    root.classList.remove('text-small', 'text-medium', 'text-large')
    root.classList.add(`text-${fontSize}`)
    
    // Dark/Light mode setting
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [fontSize, darkMode])

  const resetAccessibility = () => {
    setFontSize('medium')
  }

  return (
    <>
      {/* Accessibility Toolbar - Simplified */}
      <div className="bg-stone-100 dark:bg-gray-800 border-b border-stone-200 dark:border-gray-700 py-1.5 px-4 transition-colors duration-300">
        <div className="container mx-auto flex justify-between items-center text-sm">
          {/* Left: Font Size Controls - A+ → Reset → A- */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setFontSize('large')}
              className={`w-8 h-8 rounded flex items-center justify-center font-bold transition-colors ${
                fontSize === 'large' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white dark:bg-gray-700 text-stone-700 dark:text-gray-200 hover:bg-stone-200 dark:hover:bg-gray-600 border border-stone-300 dark:border-gray-600'
              }`}
              aria-label="הגדל טקסט"
              title="הגדל טקסט"
            >
              A+
            </button>
            <button
              onClick={resetAccessibility}
              className="w-8 h-8 rounded flex items-center justify-center font-medium bg-white dark:bg-gray-700 text-stone-700 dark:text-gray-200 hover:bg-stone-200 dark:hover:bg-gray-600 border border-stone-300 dark:border-gray-600 transition-colors"
              aria-label="אפס הגדרות נגישות"
              title="אפס הגדרות"
            >
              ↺
            </button>
            <button
              onClick={() => setFontSize('small')}
              className={`w-8 h-8 rounded flex items-center justify-center font-bold transition-colors ${
                fontSize === 'small' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white dark:bg-gray-700 text-stone-700 dark:text-gray-200 hover:bg-stone-200 dark:hover:bg-gray-600 border border-stone-300 dark:border-gray-600'
              }`}
              aria-label="הקטן טקסט"
              title="הקטן טקסט"
            >
              A-
            </button>
          </div>

          {/* Right: Dark/Light Toggle + Label */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
                darkMode 
                  ? 'bg-yellow-400 text-gray-900' 
                  : 'bg-gray-800 text-yellow-400'
              }`}
              aria-label={darkMode ? 'עבור למצב בהיר' : 'עבור למצב כהה'}
              title={darkMode ? 'מצב בהיר' : 'מצב כהה'}
            >
              {darkMode ? (
                // Sun icon for light mode
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
                </svg>
              )}
            </button>
            <span className="text-stone-600 dark:text-gray-300 font-medium text-xs">נגישות</span>
          </div>
        </div>
      </div>

      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:right-4 focus:bg-green-600 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:z-50"
      >
        דלג לתוכן הראשי
      </a>

      <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="text-4xl font-black text-blue-600 dark:text-blue-400" aria-label="מרפאת רונן - דף הבית">
              הקליניקה של רונן
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8" aria-label="ניווט ראשי">
              <Link href="/#hero" className="text-xl font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                בית
              </Link>
              <Link href="/#services" className="text-xl font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                טיפולים
              </Link>
              <Link href="/#about" className="text-xl font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                אודות
              </Link>
              <Link href="/#testimonials" className="text-xl font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                המלצות
              </Link>
              <Link href="/#contact" className="text-xl font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                צור קשר
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
              <div className="text-lg font-bold text-gray-600 dark:text-gray-300">
                <a href="tel:052-553-3295" className="block hover:text-blue-600 dark:hover:text-blue-400" aria-label="התקשר: 052-553-3295">
                  <span aria-hidden="true">📞</span> 052-553-3295
                </a>
                <a href="mailto:ronenmaga@gmail.com" className="block hover:text-blue-600 dark:hover:text-blue-400" aria-label="שלח אימייל: ronenmaga@gmail.com">
                  <span aria-hidden="true">📧</span> ronenmaga@gmail.com
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 dark:text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav id="mobile-menu" className="md:hidden py-4 border-t dark:border-gray-700" aria-label="ניווט נייד">
              <div className="flex flex-col space-y-3">
                <Link href="/#hero" className="text-lg font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2" onClick={() => setIsMenuOpen(false)}>
                  בית
                </Link>
                <Link href="/#services" className="text-lg font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2" onClick={() => setIsMenuOpen(false)}>
                  טיפולים
                </Link>
                <Link href="/#about" className="text-lg font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2" onClick={() => setIsMenuOpen(false)}>
                  אודות
                </Link>
                <Link href="/#testimonials" className="text-lg font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2" onClick={() => setIsMenuOpen(false)}>
                  המלצות
                </Link>
                <Link href="/#contact" className="text-lg font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2" onClick={() => setIsMenuOpen(false)}>
                  צור קשר
                </Link>
                <div className="text-base font-bold text-gray-600 dark:text-gray-300 pt-4 border-t dark:border-gray-700">
                  <a href="tel:052-553-3295" className="block py-1" aria-label="התקשר: 052-553-3295">
                    <span aria-hidden="true">📞</span> 052-553-3295
                  </a>
                  <a href="mailto:ronenmaga@gmail.com" className="block py-1" aria-label="שלח אימייל: ronenmaga@gmail.com">
                    <span aria-hidden="true">📧</span> ronenmaga@gmail.com
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
