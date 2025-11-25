import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SwedishMassagePage() {
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
              <div className="text-8xl mb-6">🧠</div>
              <h1 className="text-4xl font-bold text-white mb-4">עיסוי שוודי</h1>
              <div className="w-24 h-1 bg-blue-300 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              <h2 className="text-2xl font-bold text-white mb-4">מהות הטיפול</h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
                עיסוי קלאסי בשילוב תנועות מלטפות, לישה ולחיצות עדינות להרפיית שרירים, שיפור זרימת הדם והפחתת מתחים (Mayo Clinic).
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">יתרונות</h3>
              <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
                <li>שחרור מתחים ושיפור זרימת הדם</li>
                <li>הפחתת סטרס וחרדה</li>
                <li>שיפור איכות השינה ומצב הרוח (WebMD)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">החוויה האישית שלי</h3>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <p className="text-green-800 italic leading-relaxed">
                  &quot;כמטפל, אני אוהב לראות את הרגע שבו השרירים נמסים מתחת לידיים והנשימה הופכת עמוקה ורגועה. זה טיפול שמחזיר למטופל שלווה ואני יוצא ממנו גם בעצמי עם תחושת רוגע.&quot;
                </p>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">למי מתאים?</h3>
              <p className="text-gray-200 mb-6">
                כל מי שמרגיש עומס גופני או נפשי ורוצה להתחיל מעיסוי עדין ונעים.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <blockquote className="text-blue-800 text-lg italic font-medium border-r-4 border-blue-400 pr-4">
                  &quot;Swedish massage is the perfect way to achieve a state of deep relaxation and physical relief.&quot;
                </blockquote>
              </div>

              {/* Scientific Article Section */}
              <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-8 rounded-lg mt-12">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  עיסוי שוודי – סקירה מדעית: יתרונות, מחקרים והמלצות
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">מבוא קצר</h3>
                    <p className="text-blue-100 leading-relaxed">
                      עיסוי שוודי הוא השיטה הקלאסית והמוכרת ביותר של טיפולי מגע מערביים. כיום הוא נחשב טיפול מוכח להקלת מתחים נפשיים, כאבים ולהעלאת איכות החיים. מטרת המאמר היא לסקור בעדינות מה אומרים המחקרים, מבלי למלא אותך בפרטים מיותרים — אבל גם בלי לפספס את העובדות המדעיות.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">מהות הטיפול – תיאור טכני</h3>
                    <p className="text-blue-100 leading-relaxed">
                      עיסוי שוודי מבוסס על חמש טכניקות מנוסות: Effleurage, Petrissage, Friction, Tapotement ו־Vibration, שמטרתן להרגיע את השרירים, לשפר מחזוריות הדם ולשחרר מתח.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">מנגנונים פיזיולוגיים</h3>
                    <ul className="list-disc list-inside text-blue-100 space-y-2">
                      <li><strong>שיפור זרימת הדם ולימפה:</strong> קשר ישיר עם שיפור חיסוני, ניקוז נוזלים, והפחתת נפיחות</li>
                      <li><strong>שחרור הורמוני רוגע:</strong> הורדת קורטיזול ו־AVP (מעכב תוקפנות), גירוי של אנדורפינים</li>
                      <li><strong>הפחתת גירוי עצבי:</strong> ירידה ב‑H‑reflex, כלומר הפחתת גירוי מנועי אצל השריר</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">סקירת מחקרים עדכניים</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-blue-300">
                            <th className="text-right p-3 text-white font-semibold">תחום</th>
                            <th className="text-right p-3 text-white font-semibold">ממצאים עיקריים</th>
                          </tr>
                        </thead>
                        <tbody className="text-blue-100">
                          <tr className="border-b border-blue-400">
                            <td className="p-3 font-medium">כאב ותפקוד</td>
                            <td className="p-3">מטא‑אנליזה (60+ RCT): עיסוי יעיל בהפחתת כאב (SMD ≈ ‑0.44 לעומת שקר), שיפור מצב הרוח וה-QoL</td>
                          </tr>
                          <tr className="border-b border-blue-400">
                            <td className="p-3 font-medium">שינה ואיכות חיים</td>
                            <td className="p-3">עיסוי למשך שישה שבועות שיפר איכות שינה, הפחית סטרס ודיכאון בקרב חולי MS</td>
                          </tr>
                          <tr className="border-b border-blue-400">
                            <td className="p-3 font-medium">מערכת חיסונית</td>
                            <td className="p-3">עיסוי בודד גרם להגברת תאי לימפוציטים והפחתת AVP</td>
                          </tr>
                          <tr className="border-b border-blue-400">
                            <td className="p-3 font-medium">מערכת לב־ריאה</td>
                            <td className="p-3">הורדת לחץ דם, דופק וקצב נשימה לאחר עיסוי</td>
                          </tr>
                          <tr className="border-b border-blue-400">
                            <td className="p-3 font-medium">שיקום פיזי</td>
                            <td className="p-3">עיסוי שוודי בשילוב עם תרגול הוריד כאבי גב תחתון ועזר תפקוד טוב יותר לעומת תרגול בלבד</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-medium">שינה כללית</td>
                            <td className="p-3">עיסוי לפני השינה שיפר יעילות שינה בכ-10% (יותר זמן שינה, פחות התעוררויות)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">יתרונות קליניים</h3>
                    <ul className="list-disc list-inside text-blue-100 space-y-2">
                      <li><strong>כאב כרוני ושרירי:</strong> הקלה משמעותית לעומת אי‑טיפול, תוך שיפור במצב רוח</li>
                      <li><strong>שינה ושחרור נפשי:</strong> מועיל במיוחד למצבים של סטרס ושליטה רגשית</li>
                      <li><strong>חיזוק חיסוני:</strong> יתרון קל במדידה ביולוגית</li>
                      <li><strong>שיקום ושילוב בתנועה:</strong> עובד טוב כשהוא משולב עם תרגול פיזיותרפי</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">מגבלות ואתגרים</h3>
                    <ul className="list-disc list-inside text-blue-100 space-y-2">
                      <li><strong>רמת הראיות משתנה:</strong> מחקרים איכותיים – לא תמיד בשלמותם; צורך במחקרים משמעותיים יותר</li>
                      <li><strong>השפעות לזמן מוגבל:</strong> לעיתים יעיל בעיקר בטווח הקצר (לילות, ימים מספר)</li>
                      <li><strong>צורך בהתאמה אישית:</strong> שילוב נכון עם תרגול או תכנית טיפולית חשוב לתפקוד מיטבי</li>
                    </ul>
                  </div>

                  <div className="bg-blue-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">סיכום והמלצות</h3>
                    <p className="text-blue-50 leading-relaxed">
                      עיסוי שוודי נותן מענה ממשי להקלה בכאב, סטרס ולשיפור רווחה כללית — עם תמיכה ממחקרים איכותיים. אך כמו בכל כלי טיפולי, ההשפעה הטובה ביותר מתקבלת כשמשלבים אותו בהתאמה אישית וארוכת טווח.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">מוכן להתחיל את המסע לחיים ללא כאב?</h3>
              <p className="text-lg mb-6">קבע את הפגישה הראשונה שלך עוד היום</p>
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
  title: "עיסוי שוודי - מרפאת רונן",
  description: "עיסוי שוודי מקצועי להרפיית שרירים, שיפור זרימת הדם והפחתת מתחים. טכניקות מסורתיות עם תוצאות מוכחות."
}
