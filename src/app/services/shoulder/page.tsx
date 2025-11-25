import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ShoulderPage() {
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
              <div className="text-8xl mb-6">💪</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">טיפול בכאבי כתף ופציעות</h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">מהות הטיפול</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                כאבים והגבלות תנועה במפרק הכתף, דלקות וגידים, כתף קפואה, תסמונת צביטה.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">סוגי בעיות כתף שאנו מטפלים בהן</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>כתף קפואה (Frozen Shoulder)</li>
                <li>תסמונת צביטה (Impingement Syndrome)</li>
                <li>דלקת בגיד הסופרספינטוס</li>
                <li>קרע בשרירי הרוטטור קאף</li>
                <li>אי יציבות במפרק הכתף</li>
                <li>כאבי כתף כרוניים</li>
                <li>כאבים לאחר נפילה או פציעה</li>
                <li>הגבלות תנועה והרמת היד</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">סימפטומים נפוצים</h3>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside text-yellow-800 space-y-2">
                  <li>כאב חד או כואב במפרק הכתף</li>
                  <li>קושי בהרמת היד מעל הראש</li>
                  <li>כאב בלילה וקושי בשינה על הצד הפגוע</li>
                  <li>חוסר יציבות ותחושת &quot;יציאה מהמקום&quot;</li>
                  <li>חולשה בשרירי הכתף והזרוע</li>
                  <li>צריבה או הרדמה בזרוע</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">טכניקות טיפול מתמחות</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>עיסוי רקמות עמוק למערכת הכתף</li>
                <li>שחרור מיופסיאלי (Myofascial Release)</li>
                <li>מוביליזציה פאסיבית של מפרק הכתף</li>
                <li>טכניקות נקודות טריגר</li>
                <li>מתיחות ספציפיות לשרירי הרוטטור קאף</li>
                <li>תרגילי חיזוק מותאמים</li>
                <li>תרגילי יציבות וקואורדינציה</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">תהליך הטיפול המקצועי</h3>
              <div className="space-y-4 text-gray-600">
                <div className="border-r-4 border-purple-500 pr-4">
                  <h4 className="font-semibold">שלב 1: אבחון מדויק</h4>
                  <p>בדיקת טווח תנועה, בדיקות אורתופדיות מיוחדות, והערכת כוח שרירים</p>
                </div>
                <div className="border-r-4 border-purple-500 pr-4">
                  <h4 className="font-semibold">שלב 2: הפחתת כאב ודלקת</h4>
                  <p>עיסוי רפואי לשחרור מתח, שיפור זרימת דם והפחתת דלקת</p>
                </div>
                <div className="border-r-4 border-purple-500 pr-4">
                  <h4 className="font-semibold">שלב 3: שחזור טווח תנועה</h4>
                  <p>מוביליזציה עדינה ומתיחות מתקדמות לשחזור תנועתיות הכתף</p>
                </div>
                <div className="border-r-4 border-purple-500 pr-4">
                  <h4 className="font-semibold">שלב 4: חיזוק ויציבות</h4>
                  <p>תרגילי חיזוק מדורגים לשרירי הרוטטור קאף ויציבות הכתף</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">קבוצות יעד לטיפול</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>ספורטאים (שחייה, טניס, כדורסל)</li>
                <li>עובדים עם עבודת יד חוזרת</li>
                <li>מבוגרים עם בעיות ניווניות</li>
                <li>אנשים לאחר נפילה או תאונה</li>
                <li>מי שסובל מכאבי כתף כרוניים</li>
                <li>חולים לאחר ניתוח כתף</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">זמני החלמה צפויים</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">כאבים חדים</h4>
                  <p className="text-blue-700">2-4 שבועות</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">כתף קפואה</h4>
                  <p className="text-green-700">3-6 חודשים</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800">פציעות ספורט</h4>
                  <p className="text-yellow-700">4-8 שבועות</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">שיקום לאחר ניתוח</h4>
                  <p className="text-purple-700">3-4 חודשים</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">עובדות ומחקרים</h3>
                <p className="text-blue-700 mb-4">
                  מחקרים מראים כי שילוב של טיפול ידני ותרגילי חיזוק מקצר את זמן ההחלמה ב-40% 
                  בהשוואה לטיפול תרופתי בלבד. כ-85% מהמטופלים חווים שיפור משמעותי תוך 6-8 שבועות.
                </p>
                <ul className="list-disc list-inside text-blue-700 space-y-1">
                  <li>כתף קפואה משפיעה על 2-5% מהאוכלוסייה</li>
                  <li>נשים מעל גיל 40 נמצאות בסיכון גבוה יותר</li>
                  <li>טיפול מוקדם מונע החמרה של המצב</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">סובל מכאבי כתף?</h3>
              <p className="text-lg mb-6">אל תמתין - טיפול מוקדם הוא המפתח להחלמה מהירה</p>
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
  title: "טיפול בכאבי כתף ופציעות - מרפאת רונן",
  description: "טיפול מקצועי בכתף קפואה, תסמונת צביטה, פציעות רוטטור קאף ובעיות כתף. גישה מתמחה עם תוצאות מוכחות."
}
