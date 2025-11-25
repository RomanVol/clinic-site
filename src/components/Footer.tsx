export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">מרפאת  רונן</h3>
            <p className="text-gray-300 leading-relaxed">
              מומחה לטיפול, מניעה והפגת כאבים בפציעות אורתופדיות ופציעות ספורט.
              טיפול הוליסטי עם תוצאות מוכחות.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#hero" className="text-gray-300 hover:text-white transition duration-300">
                  בית
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-300 hover:text-white transition duration-300">
                  טיפולים
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-white transition duration-300">
                  אודות
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-gray-300 hover:text-white transition duration-300">
                  המלצות
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-white transition duration-300">
                  צור קשר
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">טיפולים</h4>
            <ul className="space-y-2 text-gray-300">
              <li>כאבי ראש וצוואר</li>
              <li>כאבי גב ועמוד שדרה</li>
              <li>פציעות כתף</li>
              <li>כאבי רגליים</li>
              <li>פציעות ידיים</li>
              <li>פציעות ספורט</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">פרטי התקשרות</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <span className="ml-2">📞</span>
                <span>052-553-3295</span>
              </div>
              <div className="flex items-center">
                <span className="ml-2">📧</span>
                <span>ronenmaga@gmail.com</span>
              </div>
              <div className="flex items-start">
                <span className="ml-2">📍</span>
                <span>רח׳ אריה בן אליעזר 32, ראשון לציון</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">עקבו אחרינו</h5>
              <div className="flex space-x-4 space-x-reverse">
                <a href="https://www.facebook.com/profile.php?id=100077433684507&mibextid=wwXIfr&rdid=VkWjCAOaTgwELswf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16VF7rXbby%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition duration-300">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    <path fill="white" d="M16.671 15.543l.532-3.47h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.513V4.996s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.642H7.078v3.47h3.047v8.385a12.118 12.118 0 003.75 0v-8.385h2.796z"/>
                  </svg>
                </a>
                <a href="#" className="text-2xl hover:text-red-400 transition duration-300">
                  📺
                </a>
                <a href="#" className="text-2xl hover:text-blue-300 transition duration-300">
                  💼
                </a>
                <a href="#" className="text-2xl hover:text-pink-400 transition duration-300">
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © 2024 מרפאת  רונן. כל הזכויות שמורות.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/terms" className="text-gray-300 hover:text-white text-sm transition duration-300">
                תנאי שימוש
              </a>
              <a href="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition duration-300">
                מדיניות פרטיות
              </a>
            </div>
          </div>
        </div>

        {/* Professional Disclaimer */}
        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>הערה מקצועית:</strong> המידע באתר זה מיועד למטרות חינוכיות בלבד ואינו מהווה תחליף לייעוץ רפואי מקצועי.
            יש להתייעץ עם רופא או מטפל מוסמך לפני תחילת כל טיפול. תוצאות הטיפול עשויות להשתנות ממטופל למטופל.
          </p>
        </div>
      </div>
    </footer>
  )
}
