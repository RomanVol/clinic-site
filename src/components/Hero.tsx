'use client'

import { useState } from 'react'

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section id="hero" className="bg-white text-amber-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-amber-800">
           רונן - מתמחה בטיפול בכאבים ופציעות
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-amber-700">
          טיפול מקצועי בכאבי גב, צוואר, כתף ופציעות ספורט. פיזיותרפיה מתקדמת עם תוצאות מוכחות
        </p>
        
        {/* Free Guide CTA - Similar to target site */}
        <div className="bg-gradient-to-r from-yellow-100 to-cream-50 text-amber-800 p-6 rounded-lg max-w-4xl mx-auto mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-amber-900">
            🎁 קבל מדריך חינם - 5 טכניקות פשוטות להקלה מיידית בכאבי שרירים
          </h2>
          <p className="mb-4 text-amber-700">מדריך מקצועי עם טכניקות מוכחות להקלה בכאבים מכף רגל ועד צוואר</p>
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="inline-block bg-gradient-to-r from-orange-200 to-cream-100 text-orange-800 px-8 py-3 rounded-lg font-bold hover:from-orange-100 hover:to-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            לחץ כאן לקבלת המדריך החינמי ➤
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-green-200 to-cream-100 text-green-800 px-8 py-4 rounded-lg font-bold hover:from-green-100 hover:to-white transition-all duration-300 text-lg shadow-md hover:shadow-lg"
          >
            📞 לתיאום טיפול
          </a>
          <a 
            href="#services" 
            className="bg-gradient-to-r from-cream-50 to-white border-2 border-green-200 text-green-700 px-8 py-4 rounded-lg font-bold hover:from-green-50 hover:to-cream-50 hover:border-green-300 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
          >
            👨‍⚕️ למד על הטיפולים
          </a>.
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-800">15+</div>
            <div className="text-lg text-amber-700">שנות ניסיון</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-800">5000+</div>
            <div className="text-lg text-amber-700">מטופלים מרוצים</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-800">95%</div>
            <div className="text-lg text-amber-700">שיפור בכאב</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/shorts/yum8pWH2dZ4?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
