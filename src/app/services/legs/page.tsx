import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LegsPage() {
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
              <div className="text-8xl mb-6">🦵</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">טיפול בכאבי רגליים ופציעות</h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">מהות הטיפול</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                כאב והגבלות במפרק הירך, פציעות ברכיים, שין ספלינט, דלקת בגיד אכילס, נקע בקרסול.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">בעיות רגליים שאנו מטפלים בהן</h3>
              
              <div className="space-y-6">
                <div className="border-r-4 border-green-500 pr-4">
                  <h4 className="font-semibold text-lg text-gray-800">מפרק הירך</h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>כאבי ירך כרוניים</li>
                    <li>דלקת מפרק הירך</li>
                    <li>תסמונת ITB (Iliotibial Band)</li>
                    <li>הגבלת טווח תנועה במפרק</li>
                  </ul>
                </div>

                <div className="border-r-4 border-blue-500 pr-4">
                  <h4 className="font-semibold text-lg text-gray-800">מפרק הברך</h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>כאבי ברך מול וקדמיים</li>
                    <li>פגיעה ברצועות הברך</li>
                    <li>דלקת גיד הפטלה</li>
                    <li>מניסקוס קרוע או פגוע</li>
                    <li>ברך רץ (Runner&apos;s Knee)</li>
                  </ul>
                </div>

                <div className="border-r-4 border-purple-500 pr-4">
                  <h4 className="font-semibold text-lg text-gray-800">השוק והיחף</h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>שין ספלינט (Shin Splints)</li>
                    <li>כאבים בשרירי השוק</li>
                    <li>דלקת בגיד אכילס</li>
                    <li>קרע בשריר השוק</li>
                    <li>תסמונת תא (Compartment Syndrome)</li>
                  </ul>
                </div>

                <div className="border-r-4 border-orange-500 pr-4">
                  <h4 className="font-semibold text-lg text-gray-800">קרסול וכף רגל</h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>נקע בקרסול</li>
                    <li>דלקת רצועות הקרסול</li>
                    <li>כאבי כף רגל</li>
                    <li>דוקרן בעקב</li>
                    <li>דלקת הרצועה הפלנטרית</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">טכניקות טיפול מתקדמות</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>עיסוי ספורטיבי מותאם לכל אזור</li>
                <li>שחרור מיופסיאלי עמוק</li>
                <li>טכניקות קינזיוטיפינג</li>
                <li>מוביליזציה של מפרקים</li>
                <li>מתיחות דינמיות וסטטיות</li>
                <li>תרגילי חיזוק פונקציונלי</li>
                <li>אימון שיווי משקל וקואורדינציה</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">תהליך הטיפול הקליני</h3>
              <div className="space-y-4 text-gray-600">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">🔍 שלב ההערכה</h4>
                  <p>ניתוח הליכה, בדיקת כוח שרירים, הערכת יציבות ושיווי משקל</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold">🩹 שלב הטיפול הראשוני</h4>
                  <p>הפחתת כאב ודלקת, שחרור מתח שרירי, שיפור זרימת דם</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold">💪 שלב השיקום</h4>
                  <p>חיזוק מדורג, שיפור טווח תנועה וגמישות</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold">🏃‍♂️ שלב החזרה לפעילות</h4>
                  <p>אימון פונקציונלי, מניעת פציעות עתידיות</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">למי מתאים הטיפול?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">רצים ואתלטים</h4>
                  <p className="text-blue-700 text-sm">פציעות ספורט, שיפור ביצועים</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">עובדים בעמידה</h4>
                  <p className="text-green-700 text-sm">עייפות רגליים, כאבי כף רגל</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">מבוגרים</h4>
                  <p className="text-purple-700 text-sm">שיפור יציבות ומניעת נפילות</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800">לאחר פציעה</h4>
                  <p className="text-orange-700 text-sm">שיקום ושיבה לפעילות רגילה</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">תוצאות הטיפול</h3>
              <div className="bg-green-50 p-6 rounded-lg">
                <ul className="list-disc list-inside text-green-700 space-y-2">
                  <li>הפחתת כאב וחזרה לפעילות תוך 2-4 שבועות</li>
                  <li>שיפור כוח ויציבות הרגליים</li>
                  <li>מניעת פציעות עתידיות</li>
                  <li>שיפור ביצועים ספורטיביים</li>
                  <li>החזרת תחושת הביטחון בהליכה וריצה</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">סטטיסטיקות ועובדות</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-700">
                  <div>
                    <h4 className="font-semibold">פציעות ריצה</h4>
                    <p className="text-sm">79% מהרצים חווים פציעה בשנה</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">שין ספלינט</h4>
                    <p className="text-sm">35% מפציעות הריצה הנפוצות</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">הצלחת הטיפול</h4>
                    <p className="text-sm">90% שיפור בטיפול קונסרבטיבי</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">זמן החלמה</h4>
                    <p className="text-sm">ממוצע 4-6 שבועות</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">כאבי רגליים מפריעים לחיים שלך?</h3>
              <p className="text-lg mb-6">קבל טיפול מקצועי וחזור לפעילות מלאה</p>
              <Link 
                href="/#contact" 
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition duration-300 text-lg inline-block"
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
  title: "טיפול בכאבי רגליים ופציעות - מרפאת רונן",
  description: "טיפול מקצועי בכאבי ירך, ברכיים, שין ספלינט, דלקת גיד אכילס ונקע קרסול. שיקום ספורטיבי מותאם אישית."
}
