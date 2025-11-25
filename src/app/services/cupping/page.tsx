import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CuppingPage() {
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
              <div className="text-8xl mb-6">🏺</div>
              <h1 className="text-4xl font-bold text-white mb-4">כוסות רוח</h1>
              <div className="w-24 h-1 bg-teal-300 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              
              {/* Main Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">🔹 כוסות רוח (Cupping Therapy)</h2>
                <div className="bg-teal-50 p-8 rounded-lg text-lg leading-relaxed text-gray-700">
                  <p className="mb-4">
                    <strong>כוסות רוח היא שיטה שמגיעה מהרפואה הסינית העתיקה</strong>, המבוססת על עקרונות של זרימת אנרגיה (צ'י) ושחרור חסימות בגוף.
                  </p>
                  <p className="mb-4">
                    ישנן כוסות רוח מעץ, מזכוכית או מפלסטיק, ובמהלך הטיפול נוצר תת־לחץ בחלל הכוס, היוצר יניקה עדינה של העור והרקמות.
                  </p>
                  <p>
                    כך הגוף מגיב בהגברת זרימת הדם לאזור המטופל, מה שמסייע לדלקות להחלים מהר יותר, לשחרר מתחים ולהמריץ את חילוף החומרים.
                  </p>
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">איך זה עובד?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white border-2 border-teal-200 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">🏺</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">הנחת הכוסות</h3>
                    <p className="text-gray-600">
                      כוסות מעץ, זכוכית או פלסטיק מונחות על העור באזורים הבעייתיים
                    </p>
                  </div>
                  <div className="bg-white border-2 border-cyan-200 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">🌀</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">יצירת תת-לחץ</h3>
                    <p className="text-gray-600">
                      נוצר תת-לחץ בחלל הכוס, היוצר יניקה עדינה של העור והרקמות
                    </p>
                  </div>
                  <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">💨</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">הגברת זרימת דם</h3>
                    <p className="text-gray-600">
                      הגוף מגיב בהגברת זרימת הדם והמרצת חילוף החומרים
                    </p>
                  </div>
                </div>
              </div>

              {/* Treatment Purpose */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">מטרות הטיפול</h2>
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 rounded-lg">
                  <p className="text-lg text-gray-200 leading-relaxed mb-4">
                    הטיפול בכוסות רוח משמש לשחרור שרירים תפוסים, להפחתת כאבים, לשיפור זרימת דם ולחיזוק מערכת החיסון.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    לעיתים נותרות לאחר הטיפול סימנים על העור — אלו עדויות טבעיות לזרימת דם מוגברת ולתהליך ניקוי וריפוי שמתרחש בגוף.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">יתרונות כוסות רוח</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-green-50 p-4 rounded-lg">
                    <span className="text-green-600 text-2xl ml-4">⚡</span>
                    <span className="text-lg text-gray-700">האצת תהליכי ריפוי</span>
                  </div>
                  <div className="flex items-center bg-red-50 p-4 rounded-lg">
                    <span className="text-red-600 text-2xl ml-4">🚫</span>
                    <span className="text-lg text-gray-700">הקלה בכאבים ודלקות</span>
                  </div>
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <span className="text-blue-600 text-2xl ml-4">🩸</span>
                    <span className="text-lg text-gray-700">שיפור זרימת הדם והאנרגיה</span>
                  </div>
                  <div className="flex items-center bg-purple-50 p-4 rounded-lg">
                    <span className="text-purple-600 text-2xl ml-4">🛡️</span>
                    <span className="text-lg text-gray-700">חיזוק מערכת החיסון</span>
                  </div>
                  <div className="flex items-center bg-teal-50 p-4 rounded-lg md:col-span-2">
                    <span className="text-teal-600 text-2xl ml-4">✨</span>
                    <span className="text-lg text-gray-700">תחושת ניקוי ושחרור פנימי</span>
                  </div>
                </div>
              </div>

              {/* Personal Experience */}
              <h3 className="text-xl font-semibold text-white mb-4">החוויה האישית שלי</h3>
              <div className="bg-slate-600 bg-opacity-50 p-6 rounded-lg mb-6">
                <p className="text-gray-100 italic leading-relaxed">
                  &quot;אני אוהב לראות איך החשדנות הראשונית של המטופל מתחלפת בהקלה מוחשית. החיבור למסורת ריפוי עתיקה מרגש אותי בכל פעם מחדש.&quot;
                </p>
              </div>

              {/* Who Is It For */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">למי מתאים?</h3>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>מי שסובל מכאבים כרוניים או שרירים תפוסים</li>
                    <li>אנשים המחפשים שיטת ריפוי טבעית ועתיקה</li>
                    <li>מי שרוצה לשפר את זרימת הדם ולחזק את מערכת החיסון</li>
                    <li>אנשים המעוניינים בטיפול הוליסטי המשלב גוף ונפש</li>
                  </ul>
                </div>
              </div>

              {/* Important Note about Marks */}
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2">הסבר על סימנים בעור</h4>
                <p className="text-yellow-700 text-sm">
                  הטיפול עלול להשאיר סימנים עגולים על העור למספר ימים. זהו דבר רגיל ולא מזיק, והסימנים נעלמים מעצמם. 
                  הסימנים הם עדות לזרימת דם מוגברת ולתהליך הריפוי הטבעי של הגוף.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <blockquote className="text-blue-800 text-lg italic font-medium border-r-4 border-blue-400 pr-4">
                  &quot;Cupping therapy can improve blood flow and muscle relaxation.&quot;
                </blockquote>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">מעוניין בטיפול עתיק וטבעי?</h3>
              <p className="text-lg mb-6">נסה את הכוסות רוח לשחרור מתחים</p>
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
  title: "כוסות רוח - מרפאת רונן",
  description: "טיפול בכוסות רוח מסורתי לשיפור זרימת הדם ושחרור מתחים. שיטת ריפוי עתיקה עם יתרונות מוכחים."
}
