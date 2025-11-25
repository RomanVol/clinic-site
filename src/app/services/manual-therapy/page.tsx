import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ManualTherapyPage() {
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
              <div className="text-8xl mb-6">🤲</div>
              <h1 className="text-4xl font-bold text-white mb-4">תרפיה מנואלית</h1>
              <div className="w-24 h-1 bg-indigo-300 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              
              {/* Main Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">🔹 תרפיה מנואלית (Manual Therapy)</h2>
                <div className="bg-indigo-50 p-8 rounded-lg text-lg leading-relaxed text-gray-700">
                  <p className="mb-4">
                    <strong>תרפיה מנואלית היא שיטת טיפול ידנית מתקדמת</strong>, המתמקדת באבחון, טיפול ושיקום של מערכת השריר־שלד – כלומר שרירים, מפרקים, גידים, רצועות ורקמות חיבור.
                  </p>
                  <p className="mb-4">
                    המונח <strong>"מנואלית" פירושו "באמצעות הידיים"</strong>, והרעיון המרכזי הוא להשתמש במגע מדויק, תנועות, מתיחות ולחיצות על מנת להחזיר לגוף את התנועה התקינה, לשפר את היציבה ולהפחית כאב.
                  </p>
                </div>
              </div>

              {/* Treatment Techniques */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">טכניקות הטיפול</h2>
                <p className="text-lg text-gray-200 mb-6">הטיפול מבוצע על־ידי מטפל מוסמך, שמשלב טכניקות שונות כגון:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-indigo-200 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl ml-4">🔄</span>
                      <h3 className="text-xl font-bold text-gray-800">מוביליזציה (Mobilization)</h3>
                    </div>
                    <p className="text-gray-600">הנעה עדינה של מפרקים לשיפור טווחי תנועה</p>
                  </div>
                  
                  <div className="bg-white border-2 border-blue-200 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl ml-4">⚡</span>
                      <h3 className="text-xl font-bold text-gray-800">מניפולציה (Manipulation)</h3>
                    </div>
                    <p className="text-gray-600">תנועה מהירה ומבוקרת לשחרור חסימות מפרקיות</p>
                  </div>
                  
                  <div className="bg-white border-2 border-purple-200 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl ml-4">👋</span>
                      <h3 className="text-xl font-bold text-gray-800">עיסוי רקמות רכות</h3>
                    </div>
                    <p className="text-gray-600">לשחרור מתחים ועומסים מהשרירים</p>
                  </div>
                  
                  <div className="bg-white border-2 border-teal-200 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl ml-4">🤸</span>
                      <h3 className="text-xl font-bold text-gray-800">מתיחות</h3>
                    </div>
                    <p className="text-gray-600">לשיפור גמישות ושחרור לחץ מהמפרקים</p>
                  </div>
                </div>
              </div>

              {/* Treatment Goals */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">מטרות הטיפול</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <span className="text-blue-600 text-2xl ml-4">🔓</span>
                    <span className="text-lg text-gray-700">שחרור מגבלות בתנועה</span>
                  </div>
                  <div className="flex items-center bg-red-50 p-4 rounded-lg">
                    <span className="text-red-600 text-2xl ml-4">🚫</span>
                    <span className="text-lg text-gray-700">הפחתת כאב והורדת עומסים ממפרקים ושרירים</span>
                  </div>
                  <div className="flex items-center bg-green-50 p-4 rounded-lg">
                    <span className="text-green-600 text-2xl ml-4">🩸</span>
                    <span className="text-lg text-gray-700">שיפור זרימת הדם והחמצן לרקמות</span>
                  </div>
                  <div className="flex items-center bg-purple-50 p-4 rounded-lg">
                    <span className="text-purple-600 text-2xl ml-4">⚖️</span>
                    <span className="text-lg text-gray-700">החזרת תפקוד תקין ויציבה מאוזנת</span>
                  </div>
                  <div className="flex items-center bg-orange-50 p-4 rounded-lg md:col-span-2">
                    <span className="text-orange-600 text-2xl ml-4">🔄</span>
                    <span className="text-lg text-gray-700">תמיכה בשיקום לאחר פציעות</span>
                  </div>
                </div>
              </div>

              {/* Who Is It For */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">למי מתאימה התרפיה המנואלית?</h2>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-lg">
                  <p className="text-lg text-gray-700 mb-6">הטיפול מתאים במיוחד למי שסובל מ:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <span className="text-red-600 text-xl ml-3">🔴</span>
                      <span className="text-lg text-gray-700">כאבי גב וצוואר</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-600 text-xl ml-3">🔒</span>
                      <span className="text-lg text-gray-700">הגבלה בתנועה או נוקשות מפרקים</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 text-xl ml-3">🏃</span>
                      <span className="text-lg text-gray-700">פציעות ספורט</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-600 text-xl ml-3">💺</span>
                      <span className="text-lg text-gray-700">כאבים כתוצאה מיציבה לא נכונה או עבודה ממושכת בישיבה</span>
                    </div>
                    <div className="flex items-center md:col-span-2">
                      <span className="text-green-600 text-xl ml-3">💪</span>
                      <span className="text-lg text-gray-700">עומס שרירי מתמשך</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Treatment Philosophy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">פילוסופיית הטיפול</h2>
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 rounded-lg">
                  <p className="text-lg text-gray-200 leading-relaxed mb-4">
                    הטיפול מתבצע ברוגע, תוך הקשבה לגוף ולתגובות המטופל, ומשלב דיוק פיזי עם רגישות אנושית.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    <strong>המטרה היא לא רק להקל על הכאב</strong>, אלא לטפל בשורש הבעיה ולהחזיר לגוף את היכולת לנוע בחופשיות ובקלות.
                  </p>
                </div>
              </div>

              {/* Personal Experience */}
              <h3 className="text-xl font-semibold text-white mb-4">החוויה האישית שלי</h3>
              <div className="bg-slate-600 bg-opacity-50 p-6 rounded-lg mb-6">
                <p className="text-gray-100 italic leading-relaxed">
                  &quot;זה טיפול שמאפשר לי לעבוד בצורה יצירתית. לשלב טכניקות שונות, להתאים אותן למטופל ולראות תוצאות אמיתיות לאורך זמן.&quot;
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <blockquote className="text-blue-800 text-lg italic font-medium border-r-4 border-blue-400 pr-4">
                  &quot;Manual therapy combined with exercise improves mobility and reduces pain.&quot;
                </blockquote>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">רוצה לשפר תנועה ותפקוד?</h3>
              <p className="text-lg mb-6">קבל טיפול מנואלי מותאם אישית</p>
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
  title: "תרפיה מנואלית - מרפאת רונן",
  description: "תרפיה מנואלית מקצועי לשיפור תנועה ותפקוד. טכניקות ידניות מתקדמות לטיפול במפרקים ורקמות רכות."
}
