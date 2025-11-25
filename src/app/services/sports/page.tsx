import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SportsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link 
              href="/#services" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
            >
              ← חזרה לדף הבית
            </Link>

            {/* Hero section */}
            <div className="text-center mb-12">
              <div className="text-8xl mb-6">⚽</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">טיפול בפציעות ספורט</h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">מהות הטיפול</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                טיפול מיוחד לספורטאים, טיפולי תחזוקה, מניעת פציעות, שיפור ביצועים ותאוששות מהירה.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">פציעות ספורט נפוצות</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border-r-4 border-red-600 pr-4">
                  <h4 className="font-semibold text-lg text-gray-800">פציעות חדות</h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>נקעים ברצועות</li>
                    <li>קרעים שריריים</li>
                    <li>שברי עצם מתח</li>
                    <li>פגיעות במפרקים</li>
                    <li>זעזוע מוח (ספורט מגע)</li>
                  </ul>
                </div>

                <div className="border-r-4 border-orange-600 pr-4">
                  <h4 className="font-semibold text-lg text-gray-800">פציעות מעומס</h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>דלקות גידים</li>
                    <li>שין ספלינט</li>
                    <li>מרפק טניס/גולף</li>
                    <li>כתף שחיין</li>
                    <li>ברך רץ</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">טיפול לפי סוגי ספורט</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl text-blue-800 mb-3">🏃‍♂️ ספורט אירובי (ריצה, רכיבה, שחייה)</h4>
                  <ul className="list-disc list-inside text-blue-700 space-y-1">
                    <li>טיפול בפציעות מעומס חוזר</li>
                    <li>שיפור כלכלת התנועה</li>
                    <li>אופטימיזציה של תנוחת ריצה/רכיבה</li>
                    <li>תוכניות תאוששות מואצת</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl text-green-800 mb-3">⚽ ספורט מגע (כדורגל, כדורסל, רוגבי)</h4>
                  <ul className="list-disc list-inside text-green-700 space-y-1">
                    <li>טיפול בפגיעות במפרקים</li>
                    <li>שיקום לאחר נקעים וקרעים</li>
                    <li>חיזוק מערכות יציבות</li>
                    <li>אימון תפקודי לחזרה לשדה</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl text-purple-800 mb-3">🎾 ספורט מחבט (טניס, בדמינטון, טניס שולחן)</h4>
                  <ul className="list-disc list-inside text-purple-700 space-y-1">
                    <li>טיפול במרפק טניס</li>
                    <li>פציעות כתף וזרוע</li>
                    <li>שיפור כוח ויציבות הליבה</li>
                    <li>אופטימיזציה של תנועת המחבט</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl text-yellow-800 mb-3">🏋️‍♂️ כושר וחדר כושר</h4>
                  <ul className="list-disc list-inside text-yellow-700 space-y-1">
                    <li>פציעות הרמת משקולות</li>
                    <li>כאבי גב תחתון</li>
                    <li>פגיעות בכתפיים</li>
                    <li>הדרכה לטכניקה נכונה</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">תהליך הטיפול הספורטיבי</h3>
              <div className="space-y-4 text-gray-600">
                <div className="bg-red-50 p-4 rounded-lg border-r-4 border-red-500">
                  <h4 className="font-semibold">🚨 שלב חירום (24-72 שעות)</h4>
                  <p>הפחתת נזק, שליטה בדלקת ובכאב, תמיכה ראשונית</p>
                  <div className="text-sm mt-2 font-mono">Protocol: RICE (Rest, Ice, Compression, Elevation)</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
                  <h4 className="font-semibold">🔄 שלב שיקום מוקדם (1-3 שבועות)</h4>
                  <p>החזרת טווח תנועה, עיסוי רפואי, מוביליזציה עדינה</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
                  <h4 className="font-semibold">💪 שלב חיזוק (3-8 שבועות)</h4>
                  <p>חיזוק מדורג, שיפור יציבות, התחלת תרגילי ספורט</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-500">
                  <h4 className="font-semibold">🏃‍♂️ שלב חזרה לספורט (6-12 שבועות)</h4>
                  <p>אימון תפקודי, תרגילי ספציפיים לספורט, הדרגה בעומסים</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">טכניקות טיפול מתקדמות</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800">עיסוי ספורטיבי</h4>
                  <p className="text-indigo-700 text-sm">טכניקות מיוחדות לספורטאים</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800">קינזיוטיפינג</h4>
                  <p className="text-pink-700 text-sm">תמיכה ושיפור ביצועים</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800">Dry Needling</h4>
                  <p className="text-teal-700 text-sm">שחרור נקודות טריגר</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800">PNF Stretching</h4>
                  <p className="text-amber-700 text-sm">מתיחות נוירו-שריריות</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">תוכניות מניעה וטיפולי תחזוקה</h3>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>הערכה תקופתית:</strong> בדיקות כוח, גמישות ויציבות</li>
                  <li><strong>תוכניות מתיחה:</strong> מותאמות לספורט הספציפי</li>
                  <li><strong>חיזוק מונע:</strong> תרגילי יציבות ופונקציה</li>
                  <li><strong>הדרכה בטכניקה:</strong> מניעת פציעות מעומס</li>
                  <li><strong>תאוששות פעילה:</strong> עיסוי ומתיחות לאחר פעילות</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">קריטריונים לחזרה לספורט</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="text-green-600 text-xl">✅</span>
                  <span className="text-gray-700">אין כאב בפעילות יומיומית</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="text-green-600 text-xl">✅</span>
                  <span className="text-gray-700">טווח תנועה מלא</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="text-green-600 text-xl">✅</span>
                  <span className="text-gray-700">כוח 90% מהצד הבריא</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="text-green-600 text-xl">✅</span>
                  <span className="text-gray-700">עמידה בבדיקות תפקודיות</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="text-green-600 text-xl">✅</span>
                  <span className="text-gray-700">ביטחון נפשי מלא</span>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">נתונים ומחקרים</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-700">
                  <div>
                    <h4 className="font-semibold">פציעות ספורט</h4>
                    <p className="text-sm">8.6 מיליון פציעות בשנה בארה&quot;ב</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">מניעה יעילה</h4>
                    <p className="text-sm">50% הפחתה בפציעות עם תוכנית מניעה</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">זמן החלמה ממוצע</h4>
                    <p className="text-sm">קל: 1-3 שבועות, בינוני: 4-8 שבועות</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">הצלחה בשיקום</h4>
                    <p className="text-sm">95% חזרה מלאה לספורט</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">ספורטאי הזקוק לטיפול מקצועי?</h3>
              <p className="text-lg mb-6">קבל שיקום מותאם וחזור לביצועים מרביים</p>
              <Link 
                href="/#contact" 
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition duration-300 text-lg inline-block"
              >
                ליצירת קשר עכשיו ➤
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export const metadata = {
  title: "טיפול בפציעות ספורט - מרפאת רונן",
  description: "שיקום ספורטיבי מקצועי, טיפול בפציעות ספורט, תוכניות מניעה ושיפור ביצועים. מומחיות בכל סוגי הספורט."
}
