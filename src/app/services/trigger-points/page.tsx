import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TriggerPointsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link 
              href="/#services" 
              className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8"
            >
              ← חזרה לדף הבית
            </Link>

            {/* Hero section */}
            <div className="text-center mb-12">
              <div className="text-8xl mb-6">🎯</div>
              <h1 className="text-4xl font-bold text-white mb-4">טיפול בנקודות טריגר</h1>
              <p className="text-xl text-gray-300 mb-4">(Trigger Points Therapy)</p>
              <div className="w-24 h-1 bg-orange-300 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              
              {/* Main Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">מה זה טיפול בנקודות טריגר?</h2>
                <div className="bg-blue-50 p-8 rounded-lg text-lg leading-relaxed text-gray-700">
                  <p className="mb-4">
                    טיפול נקודות טריגר הוא <strong>שיטת טיפול ידנית ממוקדת</strong>, המיועדת לשחרור שרירים תפוסים, הפחתת כאבים ושיפור טווחי תנועה.
                  </p>
                  <p className="mb-4">
                    שיטת טיפול זו <strong>משחררת שרירים מכווצים</strong>, משפרת זרימת דם, חמצן ונוטריינטים לשריר, מפיגה כאב ומגדילה טווחי תנועה.
                  </p>
                  <p>
                    הטיפול מתבצע בעזרת <strong>לחיצות ממוקדות על נקודות עומס ומתח בשריר</strong>, המעודדות את השריר להשתחרר ולחזור למצבו הטבעי.
                  </p>
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">איך זה עובד?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">זיהוי נקודות טריגר</h3>
                    <p className="text-gray-600">
                      המטפל מזהה את נקודות הטריגר – אזורים רגישים שבהם קיים כיווץ מתמשך
                    </p>
                  </div>
                  <div className="bg-white border-2 border-green-200 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">👋</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">לחץ מדויק ומבוקר</h3>
                    <p className="text-gray-600">
                      באמצעות לחץ מדויק, מבוקר וקצוב, נוצר גירוי שמוביל לשחרור השריר
                    </p>
                  </div>
                  <div className="bg-white border-2 border-purple-200 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">⚖️</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">החזרה לאיזון</h3>
                    <p className="text-gray-600">
                      הגוף חוזר בהדרגה לאיזון תנועתי ולתחושת קלילות
                    </p>
                  </div>
                </div>
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    במהלך הטיפול המטפל מזהה את נקודות הטריגר – אזורים רגישים שבהם קיים כיווץ מתמשך. באמצעות לחץ מדויק, מבוקר וקצוב, נוצר גירוי שמוביל לשחרור השריר, לשיפור זרימת הדם ולהתחדשות הרקמות. כך הגוף חוזר בהדרגה לאיזון תנועתי ולתחושת קלילות.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">יתרונות הטיפול</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-green-50 p-4 rounded-lg">
                    <span className="text-green-600 text-2xl ml-4">💪</span>
                    <span className="text-lg text-gray-700">שחרור שרירים מכווצים ונוקשים</span>
                  </div>
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <span className="text-blue-600 text-2xl ml-4">🩸</span>
                    <span className="text-lg text-gray-700">שיפור זרימת הדם, אספקת חמצן וחומרי הזנה לשריר</span>
                  </div>
                  <div className="flex items-center bg-red-50 p-4 rounded-lg">
                    <span className="text-red-600 text-2xl ml-4">🚫</span>
                    <span className="text-lg text-gray-700">הפחתת כאב מקומי והקרנתי (בגב, בצוואר, בכתפיים וכו')</span>
                  </div>
                  <div className="flex items-center bg-purple-50 p-4 rounded-lg">
                    <span className="text-purple-600 text-2xl ml-4">🤸</span>
                    <span className="text-lg text-gray-700">הגדלת טווחי תנועה וגמישות</span>
                  </div>
                  <div className="flex items-center bg-yellow-50 p-4 rounded-lg md:col-span-2">
                    <span className="text-yellow-600 text-2xl ml-4">😌</span>
                    <span className="text-lg text-gray-700">תחושת רוגע כללית ושיפור ברווחה הפיזית והנפשית</span>
                  </div>
                </div>
              </div>

              {/* Who Is It For */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">למי מתאים?</h2>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg">
                  <p className="text-lg text-gray-700 mb-6">הטיפול מומלץ במיוחד לסובלים מ:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <span className="text-red-600 text-xl ml-3">🔴</span>
                      <span className="text-lg text-gray-700">כאבי גב, צוואר וכתפיים</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 text-xl ml-3">🤕</span>
                      <span className="text-lg text-gray-700">כאבי ראש ממקור שרירי</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-600 text-xl ml-3">😰</span>
                      <span className="text-lg text-gray-700">עומס פיזי או מתח רגשי מצטבר</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 text-xl ml-3">🏃</span>
                      <span className="text-lg text-gray-700">פציעות ספורט או ישיבה ממושכת מול מחשב</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Experience */}
              <h3 className="text-xl font-semibold text-white mb-4">החוויה האישית שלי</h3>
              <div className="bg-slate-600 bg-opacity-50 p-6 rounded-lg mb-6">
                <p className="text-gray-100 italic leading-relaxed">
                  &quot;יש בזה משהו כמעט כמו לפתור חידה. למצוא את הנקודה הנכונה ולראות איך הכאב משתחרר – זו תחושה מספקת גם בשבילי.&quot;
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <blockquote className="text-blue-800 text-lg italic font-medium border-r-4 border-blue-400 pr-4">
                  &quot;Trigger point therapy reduces headache duration and intensity.&quot;
                </blockquote>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">סובל מכאבים נקודתיים?</h3>
              <p className="text-lg mb-6">קבל טיפול מדויק לשחרור הכאב</p>
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
  title: "טיפול בנקודות טריגר - מרפאת רונן",
  description: "טיפול מקצועי בנקודות טריגר לשחרור שרירים תפוסים, הפחתת כאבים ושיפור טווחי תנועה. שיטת טיפול ידנית ממוקדת לכאבי ראש, צוואר וגב.",
  keywords: "טריגר פוינטס, נקודות טריגר, כאבי שרירים, כאבי גב, כאבי צוואר, כאבי כתפיים, עיסוי טיפולי, רונן"
}
