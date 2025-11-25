import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BackPainPage() {
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
              <div className="text-8xl mb-6">🦴</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">טיפול בפציעות וכאבי גב</h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">מהות הטיפול</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                טיפול מקצועי וממוקד בכאבי גב וחוליות, תוך שילוב טכניקות מתקדמות של פיזיותרפיה ועיסוי רפואי לשחרור מתח והקלה על כאב.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">סוגי בעיות גב שאנו מטפלים בהן</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>כאבי גב תחתון (Lumbar pain)</li>
                <li>כאבי גב עליון ובין השכמות</li>
                <li>בעיות דיסק וחוליות</li>
                <li>פריצת דיסק וצריבה לרגל</li>
                <li>איסיאלגיה (כאב עצב הסיאטיק)</li>
                <li>קשיחות וירידה בטווח תנועה</li>
                <li>כאבים לאחר פעילות גופנית</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">טכניקות טיפול מתקדמות</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>עיסוי רקמות עמוק (Deep Tissue Massage)</li>
                <li>טכניקות שחרור נקודות טריגר</li>
                <li>מיילופפגיה רפואית</li>
                <li>מתיחות ופשטות מותאמות</li>
                <li>מנואלית תרפיה</li>
                <li>תרגילי חיזוק ויציבות</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">תהליך הטיפול</h3>
              <div className="space-y-4 text-gray-600">
                <div className="border-r-4 border-blue-500 pr-4">
                  <h4 className="font-semibold">שלב 1: הערכה וחקירה</h4>
                  <p>בדיקה מקיפה של היסטוריה רפואית, תנוחה, טווח תנועה ואיתור מקור הכאב</p>
                </div>
                <div className="border-r-4 border-blue-500 pr-4">
                  <h4 className="font-semibold">שלב 2: טיפול ידני</h4>
                  <p>שילוב טכניקות עיסוי רפואי ומנואלית תרפיה לשחרור מתח ושיפור זרימת דם</p>
                </div>
                <div className="border-r-4 border-blue-500 pr-4">
                  <h4 className="font-semibold">שלב 3: חיזוק ושיקום</h4>
                  <p>תרגילי חיזוק ליציבות הגב, שיפור התנוחה ומניעת הישנות הבעיה</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">למי מתאים הטיפול?</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>עובדי משרד עם תנוחת ישיבה ממושכת</li>
                <li>פועלים עם עבודה פיזית כבדה</li>
                <li>ספורטאים עם פציעות גב</li>
                <li>נשים בהריון וכאבי גב</li>
                <li>מבוגרים עם בעיות ניווניות</li>
                <li>כל מי שסובל מכאבי גב כרוניים או חדים</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">תוצאות צפויות</h3>
              <div className="bg-green-50 p-6 rounded-lg">
                <ul className="list-disc list-inside text-green-700 space-y-2">
                  <li>הפחתת כאב משמעותית כבר מהטיפול הראשון</li>
                  <li>שיפור טווח תנועה וגמישות</li>
                  <li>חזרה לפעילות יומיומית ללא מגבלות</li>
                  <li>שיפור איכות השינה</li>
                  <li>חיזוק שרירי הגב והבטן ליציבות מרבית</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">מחקרים מדעיים</h3>
                <p className="text-blue-700">
                  מחקרים רחבי היקף מראים כי שילוב של עיסוי רקמות עמוק ותרגילי חיזוק מפחית כאבי גב 
                  ב-70% מהמקרים תוך 6-8 שבועות טיפול. המחקרים מדגישים את החשיבות של גישה הוליסטית המשלבת 
                  טיפול ידני עם חיזוק פעיל.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">מוכן להיפטר מכאבי הגב?</h3>
              <p className="text-lg mb-6">התחל את המסע שלך לחיים ללא כאב עוד היום</p>
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
  title: "טיפול בכאבי גב ופציעות - מרפאת רונן",
  description: "טיפול מקצועי בכאבי גב, פריצת דיסק, איסיאלגיה וכאבי חוליות. גישה הוליסטית משולבת עם תוצאות מוכחות."
}
