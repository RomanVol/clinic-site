import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HandsPage() {
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
              <div className="text-8xl mb-6">✋</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">טיפול בכאבי ידיים ופציעות</h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">מהות הטיפול</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                מרפק טניס/גולף, תסמונת התעלה הקרפלית, כאבים בכף היד והאצבעות, הרדמות ביד.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">בעיות ידיים נפוצות שאנו מטפלים בהן</h3>
              
              <div className="space-y-6">
                <div className="border-r-4 border-red-500 pr-4">
                  <h4 className="font-semibold text-lg text-gray-800">מרפק</h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>מרפק טניס (Tennis Elbow)</li>
                    <li>מרפק גולף (Golfer&apos;s Elbow)</li>
                    <li>דלקת בגידי המרפק</li>
                    <li>כאבים בהושטת וכיפוף היד</li>
                    <li>תסמונת התעלה הקוביטלית</li>
                  </ul>
                </div>

                <div className="border-r-4 border-blue-500 pr-4">
                  <h4 className="font-semibold text-lg text-gray-800">פרק כף היד</h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>תסמונת התעלה הקרפלית</li>
                    <li>דלקת בגידי כף היד</li>
                    <li>כאבי פרק כף היד</li>
                    <li>הגבלת טווח תנועה</li>
                    <li>נפיחות וקשיחות</li>
                  </ul>
                </div>

                <div className="border-r-4 border-green-500 pr-4">
                  <h4 className="font-semibold text-lg text-gray-800">אצבעות וכף היד</h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>אצבע הדק (Trigger Finger)</li>
                    <li>דלקת פרקי האצבעות</li>
                    <li>כאבים באגודל</li>
                    <li>הרדמות וחוסר תחושה</li>
                    <li>חולשה באחיזה</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">סימפטומים שדורשים טיפול</h3>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside text-yellow-800 space-y-2">
                  <li>כאב המחמיר בפעילויות יומיומיות</li>
                  <li>הרדמות וחוסר תחושה באצבעות</li>
                  <li>חולשה באחיזה או בכיפוף האצבעות</li>
                  <li>כאב הבוקר וקשיחות</li>
                  <li>כאב המקיע מהצוואר לכיוון היד</li>
                  <li>נפיחות או עיבוי בכף היד</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">טכניקות טיפול מיוחדות</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>עיסוי רפואי לשרירי הזרוע והיד</li>
                <li>שחרור מיופסיאלי של רצועות היד</li>
                <li>מוביליזציה עדינה של מפרקי היד</li>
                <li>טכניקות שחרור עצבים</li>
                <li>מתיחות ספציפיות לגידי היד</li>
                <li>תרגילי חיזוק ויציבות</li>
                <li>אדוקציה ארגונומית</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">תהליך הטיפול המותאם</h3>
              <div className="space-y-4 text-gray-600">
                <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-indigo-500">
                  <h4 className="font-semibold">📋 הערכה ראשונית</h4>
                  <p>בדיקת כוח, תחושה, רפלקסים ובדיקות נוירולוגיות מיוחדות</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-r-4 border-red-500">
                  <h4 className="font-semibold">🩹 שלב הפחתת כאב</h4>
                  <p>עיסוי עדין, קור/חום טיפולי, טכניקות להפחתת דלקת</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
                  <h4 className="font-semibold">🔧 שחרור והתנועתיות</h4>
                  <p>מוביליזציה, מתיחות, שיפור טווח תנועה</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
                  <h4 className="font-semibold">💪 חיזוק ושיקום</h4>
                  <p>תרגילי חיזוק מדורגים, שיפור קואורדינציה</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-500">
                  <h4 className="font-semibold">🛡️ מניעה והדרכה</h4>
                  <p>הדרכה ארגונומית, תרגילי מניעה יומיים</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">קבוצות יעד עיקריות</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">💻 עובדי מחשב</h4>
                  <p className="text-blue-700 text-sm">תסמונת התעלה הקרפלית, מרפק מחשב</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">🔨 עובדים ידניים</h4>
                  <p className="text-green-700 text-sm">מרפק טניס, פציעות חוזרות</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">🎾 ספורטאים</h4>
                  <p className="text-purple-700 text-sm">פציעות מרפק, שיפור ביצועים</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800">👩‍⚕️ מקצועות בריאות</h4>
                  <p className="text-orange-700 text-sm">פציעות מעומס, עבודה חוזרת</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">הדרכה ארגונומית</h3>
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-indigo-800 mb-3">עמדת עבודה תקינה</h4>
                <ul className="list-disc list-inside text-indigo-700 space-y-1">
                  <li>גובה מסך המחשב - ברמת העיניים</li>
                  <li>זרועות במקביל לרצפה בעת הקלדה</li>
                  <li>רגליים שטוחות על הרצפה</li>
                  <li>הפסקות קצרות כל 30 דקות</li>
                  <li>תרגילי מתיחה במהלך היום</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">תוצאות הטיפול</h3>
              <div className="bg-green-50 p-6 rounded-lg">
                <ul className="list-disc list-inside text-green-700 space-y-2">
                  <li>הפחתת כאב משמעותית תוך 2-3 שבועות</li>
                  <li>שיפור כוח האחיזה והתפקוד היומיומי</li>
                  <li>חזרה לפעילות עבודה ללא הגבלות</li>
                  <li>מניעת הישנות הבעיה</li>
                  <li>שיפור איכות החיים והפרודוקטיביות</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">עובדות ונתונים</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-700">
                  <div>
                    <h4 className="font-semibold">תסמונת התעלה הקרפלית</h4>
                    <p className="text-sm">משפיעה על 3-6% מהמבוגרים</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">מרפק טניס</h4>
                    <p className="text-sm">1-3% מהאוכלוסייה מדי שנה</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">עובדי מחשב</h4>
                    <p className="text-sm">60% חווים כאבי יד ומרפק</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">הצלחת הטיפול</h4>
                    <p className="text-sm">85-95% שיפור ללא ניתוח</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">כאבי ידיים פוגעים בעבודה שלך?</h3>
              <p className="text-lg mb-6">קבל טיפול מקצועי וחזור לפעילות מלאה ללא כאב</p>
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
  title: "טיפול בכאבי ידיים ופציעות - מרפאת רונן",
  description: "טיפול מקצועי במרפק טניס, תסמונת התעלה הקרפלית, כאבי כף יד ואצבעות. פתרונות ארגונומיים ושיקום מותאם."
}
