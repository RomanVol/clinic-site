import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DeepTissuePage() {
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
              <div className="text-8xl mb-6">💪</div>
              <h1 className="text-4xl font-bold text-white mb-4">עיסוי רקמות עמוק</h1>
              <div className="w-24 h-1 bg-red-300 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              
              {/* Main Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">מה זה עיסוי רקמות עמוק?</h2>
                <div className="bg-red-50 p-8 rounded-lg text-lg leading-relaxed text-gray-700">
                  <p className="mb-4">
                    <strong>עיסוי רקמות עמוק הוא עיסוי עמוק וחזק</strong> אשר נועד להתמקד בשכבות העמוקות יותר של השרירים וברקמות החיבור.
                  </p>
                  <p className="mb-4">
                    הוא מתאים במיוחד לאנשים עם <strong>כאבים כרוניים או כאבים חזקים במיוחד</strong>, וכן למי שסובל מנוקשות או עומס שרירי מתמשך.
                  </p>
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">איך זה עובד?</h2>
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 rounded-lg mb-6">
                  <p className="text-lg text-gray-200 leading-relaxed mb-4">
                    הטיפול מתבצע בלחץ מבוקר ועמוק, ומטרתו לפרק הידבקויות בין רקמות, לשפר את זרימת הדם, לשחרר מתחים, ולהחזיר לגוף את האלסטיות והגמישות הטבעית שלו.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    בנוסף, הוא תורם להרפיה כללית, לאיזון מערכת העצבים ולהפחתת מתח מצטבר.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">יתרונות עיסוי רקמות עמוק</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-red-50 p-4 rounded-lg">
                    <span className="text-red-600 text-2xl ml-4">🚫</span>
                    <span className="text-lg text-gray-700">הקלה בכאבים כרוניים ובשרירים תפוסים</span>
                  </div>
                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <span className="text-blue-600 text-2xl ml-4">🩸</span>
                    <span className="text-lg text-gray-700">שיפור זרימת הדם והחמצן לאזורים עמוקים</span>
                  </div>
                  <div className="flex items-center bg-orange-50 p-4 rounded-lg">
                    <span className="text-orange-600 text-2xl ml-4">🔥</span>
                    <span className="text-lg text-gray-700">הפחתת דלקות ועומס שרירי</span>
                  </div>
                  <div className="flex items-center bg-green-50 p-4 rounded-lg">
                    <span className="text-green-600 text-2xl ml-4">🔄</span>
                    <span className="text-lg text-gray-700">שיקום רקמות חיבור ושרירים</span>
                  </div>
                  <div className="flex items-center bg-purple-50 p-4 rounded-lg md:col-span-2">
                    <span className="text-purple-600 text-2xl ml-4">✨</span>
                    <span className="text-lg text-gray-700">תחושת חיוניות, שחרור ורוגע</span>
                  </div>
                </div>
              </div>

              {/* Treatment Process */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">תהליך הטיפול</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white border-2 border-red-200 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">איתור אזורי בעיה</h3>
                    <p className="text-gray-600">זיהוי השכבות העמוקות של השרירים והרקמות הבעייתיות</p>
                  </div>
                  <div className="bg-white border-2 border-orange-200 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">💪</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">לחץ מבוקר ועמוק</h3>
                    <p className="text-gray-600">הפעלת לחץ ממוקד לפירוק הידבקויות ושחרור מתחים</p>
                  </div>
                  <div className="bg-white border-2 border-green-200 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">🌟</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">שחרור והחלמה</h3>
                    <p className="text-gray-600">החזרת גמישות טבעית ותחושת רוגע כללית</p>
                  </div>
                </div>
              </div>

              {/* Personal Experience */}
              <h3 className="text-xl font-semibold text-white mb-4">החוויה האישית שלי</h3>
              <div className="bg-slate-600 bg-opacity-50 p-6 rounded-lg mb-6">
                <p className="text-gray-100 italic leading-relaxed">
                  &quot;בטיפול כזה אני מרגיש שאני &apos;מדבר&apos; עם השריר. זו עבודה ממוקדת, לפעמים מאתגרת, אבל הסיפוק מגיע כשאני רואה את הכאב משתחרר בהדרגה.&quot;
                </p>
              </div>

              {/* Who Is It For */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">למי מתאים?</h3>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>ספורטאים ואנשים פעילים גופנית</li>
                    <li>סובלים מכאבים כרוניים או חזקים</li>
                    <li>אנשים עם נוקשות או עומס שרירי מתמשך</li>
                    <li>מי שמחפש טיפול עמוק ויעיל לשחרור מתחים</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <blockquote className="text-blue-800 text-lg italic font-medium border-r-4 border-blue-400 pr-4">
                  &quot;Deep tissue massage provides real relief for chronic muscle tension.&quot;
                </blockquote>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">מוכן להיפטר מהכאב הכרוני?</h3>
              <p className="text-lg mb-6">קבע טיפול עיסוי רקמות עמוק עוד היום</p>
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
  title: "עיסוי רקמות עמוק - מרפאת רונן",
  description: "עיסוי רקמות עמוק מקצועי לכאבים כרוניים ופציעות ספורט. טכניקות מתקדמות לשחרור מתחים עמוקים."
}
