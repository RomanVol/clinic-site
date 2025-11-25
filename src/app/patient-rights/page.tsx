import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PatientRightsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8" dir="rtl">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              זכויות המטופל
            </h1>

            <div className="prose prose-lg max-w-none text-right space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">זכויותיך כמטופל</h2>
                <p className="text-gray-700 leading-relaxed">
                  כל מטופל זכאי לקבל טיפול הולם ומכבד. להלן זכויות המטופל העיקריות:
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">זכות לפרטיות וסודיות</h3>
                <p className="text-gray-700 leading-relaxed">
                  המידע הרפואי שלך שמור בסודיות מוחלטת. רק גורמים מורשים יכולים לגשת אליו.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">זכות למידע</h3>
                <p className="text-gray-700 leading-relaxed">
                  זכותך לקבל הסבר מלא על מצבך הרפואי, אבחנות, תוכנית טיפול ותוצאות צפויות.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">זכות לבחירה ולהסכמה מדעת</h3>
                <p className="text-gray-700 leading-relaxed">
                  זכותך לקבל החלטות לגבי הטיפול שלך, כולל הזכות לסרב לטיפול.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">זכות לטיפול הולם</h3>
                <p className="text-gray-700 leading-relaxed">
                  זכותך לקבל טיפול איכותי, בזמן סביר, ובסביבה נעימה ובטוחה.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">זכות לתלונה</h3>
                <p className="text-gray-700 leading-relaxed">
                  אם אינך מרוצה מהשירות, זכותך להגיש תלונה ולקבל תשובה בתוך זמן סביר.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700">
                    <strong>ליצירת קשר:</strong><br />
                    <strong>אימייל:</strong> ronenmaga@gmail.com<br />
                    <strong>טלפון:</strong> 052-553-3295
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
