import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ShiatsuPage() {
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
              <div className="text-8xl mb-6">🧘‍♂️</div>
              <h1 className="text-4xl font-bold text-white mb-4">שיאצו</h1>
              <div className="w-24 h-1 bg-purple-300 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              
              {/* Main Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">🔹 שיאצו (Shiatsu)</h2>
                <div className="bg-purple-50 p-8 rounded-lg text-lg leading-relaxed text-gray-700">
                  <p className="mb-4">
                    <strong>שיאצו היא שיטת טיפול יפנית עתיקה</strong> המתמקדת ביצירת חיבור והקשבה עמוקה לגוף המטופל, במטרה להשיב לו את האיזון האנרגטי והפיזי.
                  </p>
                  <p className="mb-4">
                    זוהי <strong>שיטת טיפול יפנית המבוססת על חיבור, הקשבה למטופל והזרמת אנרגיה חדשה</strong>, חמצון דם והפחתה של מתחים.
                  </p>
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">איך הטיפול פועל?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white border-2 border-purple-200 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">👐</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">לחיצות עדינות</h3>
                    <p className="text-gray-600">
                      המטפל מפעיל לחיצות עדינות ומתמשכות לאורך ערוצי האנרגיה בגוף
                    </p>
                  </div>
                  <div className="bg-white border-2 border-indigo-200 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">🌊</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">מתיחות והרפיה</h3>
                    <p className="text-gray-600">
                      שילוב מתיחות ותנועות הרפיה לאורך המרידיאנים (ערוצי האנרגיה)
                    </p>
                  </div>
                  <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">הזרמת אנרגיה</h3>
                    <p className="text-gray-600">
                      המגע העמוק אך הרך מעודד הזרמת אנרגיה מחודשת ושחרור חסימות
                    </p>
                  </div>
                </div>
              </div>

              {/* Treatment Philosophy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">פילוסופיית הטיפול</h2>
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 rounded-lg">
                  <p className="text-lg text-gray-200 leading-relaxed">
                    במהלך הטיפול, המטפל מפעיל לחיצות עדינות ומתמשכות לאורך ערוצי האנרגיה בגוף (מרידיאנים), בשילוב מתיחות ותנועות הרפיה. 
                    המגע העמוק אך הרך מעודד את הגוף להזרמת אנרגיה מחודשת, לשחרור חסימות ולהפגת מתחים פיזיים ונפשיים.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">יתרונות הטיפול</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <span className="text-blue-600 text-2xl ml-4">😌</span>
                    <span className="text-lg text-gray-700">הפחתת מתחים וחרדות</span>
                  </div>
                  <div className="flex items-center bg-purple-50 p-4 rounded-lg">
                    <span className="text-purple-600 text-2xl ml-4">🌊</span>
                    <span className="text-lg text-gray-700">שיפור זרימת האנרגיה והדם בגוף</span>
                  </div>
                  <div className="flex items-center bg-green-50 p-4 rounded-lg">
                    <span className="text-green-600 text-2xl ml-4">🧘</span>
                    <span className="text-lg text-gray-700">הרפיית מערכת העצבים</span>
                  </div>
                  <div className="flex items-center bg-indigo-50 p-4 rounded-lg">
                    <span className="text-indigo-600 text-2xl ml-4">⚖️</span>
                    <span className="text-lg text-gray-700">איזון בין גוף לנפש</span>
                  </div>
                  <div className="flex items-center bg-teal-50 p-4 rounded-lg md:col-span-2">
                    <span className="text-teal-600 text-2xl ml-4">🕊️</span>
                    <span className="text-lg text-gray-700">תחושת שלווה, רוגע והתחדשות</span>
                  </div>
                </div>
              </div>

              {/* Treatment Experience */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">החוויה הטיפולית</h2>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    טיפול השיאצו הוא חוויה הוליסטית המשלבת מגע פיזי עדין עם עבודה אנרגטית עמוקה.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    המטופל חווה תחושת רוגע עמוקה, שחרור מתחים והרגשת התחדשות גופנית ונפשית.
                  </p>
                </div>
              </div>

              {/* Personal Experience */}
              <h3 className="text-xl font-semibold text-white mb-4">החוויה האישית שלי</h3>
              <div className="bg-slate-600 bg-opacity-50 p-6 rounded-lg mb-6">
                <p className="text-gray-100 italic leading-relaxed">
                  &quot;בטיפול שיאצו אני מרגיש שאני נכנס למרחב של שקט. זו עבודה עדינה שמביאה איזון גם לגוף וגם לנפש – לשנינו.&quot;
                </p>
              </div>

              {/* Who Is It For */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">למי מתאים?</h3>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>מי שמחפש טיפול עדין, מרגיע ובעל השפעה עמוקה על תחושת הרווחה הכללית</li>
                    <li>אנשים הסובלים ממתחים, חרדות או סטרס מצטבר</li>
                    <li>מי שמעוניין בטיפול הוליסטי המשלב גוף ונפש</li>
                    <li>אנשים המחפשים איזון אנרגטי ושלווה פנימית</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <blockquote className="text-blue-800 text-lg italic font-medium border-r-4 border-blue-400 pr-4">
                  &quot;Shiatsu may help reduce stress and improve overall wellbeing.&quot;
                </blockquote>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">מחפש איזון ושלווה פנימית?</h3>
              <p className="text-lg mb-6">גלה את כוח הטיפול היפני העתיק</p>
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
  title: "שיאצו - מרפאת רונן",
  description: "טיפול שיאצו יפני מסורתי לאיזון אנרגטי וטיפול הוליסטי. שחרור מתחים פיזיים ורגשיים."
}
