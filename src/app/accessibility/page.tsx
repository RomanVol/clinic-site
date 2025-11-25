import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8" dir="rtl">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              הצהרת נגישות
            </h1>

            <div className="prose prose-lg max-w-none text-right space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">מחויבות לנגישות</h2>
                <p className="text-gray-700 leading-relaxed">
                  מרפאת רונן מחויבת לספק שירות נגיש לכל המשתמשים, כולל אנשים עם מוגבלויות.
                  אנו עובדים כדי להבטיח שהאתר שלנו עומד בתקן הישראלי לנגישות תכנים באינטרנט (ת&quot;י 5568).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">תכונות נגישות באתר</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>שינוי גודל טקסט</li>
                  <li>מצב ניגודיות גבוהה</li>
                  <li>ניווט באמצעות מקלדת</li>
                  <li>תיוג מתאים לקוראי מסך</li>
                  <li>מבנה סמנטי נכון</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">דיווח על בעיות נגישות</h2>
                <p className="text-gray-700 leading-relaxed">
                  אם נתקלתם בבעיית נגישות באתר, אנא צרו איתנו קשר:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700">
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
