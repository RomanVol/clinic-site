import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Ronen's Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-blue-100 rounded-lg p-4 h-96 flex items-center justify-center overflow-hidden">
              <Image
                src="/Ronen_Pic.png"
                alt="רונן - מומחה לטיפול בכאבים ופציעות"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              אודות  רונן
            </h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              מומחה לטיפול, מניעה והפגת כאבים בפציעות אורתופדיות ופציעות ספורט
            </h3>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                 רונן הוא מטפל מוביל בתחום הפיזיותרפיה עם יותר מ-15 שנות ניסיון בטיפול בכאבים ופציעות.
              </p>
              <p>
                הכשרה טיפולית רחבה וניסיון רב בטיפול באמצעות מגוון שיטות טיפול טבעיות מתקדמות,
                המותאמות אישית לכל מטופל ולצרכיו הייחודיים.
              </p>
              <p>
                מתמחה בשיקום תנועה והפגת כאב
              </p>
            </div>

            {/* Certificates Button */}
            <div className="mt-6">
              <a
                href="/certificates"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
              >
                <span className="ml-2">📜</span>
                תעודות והסמכות
              </a>
            </div>

            {/* Credentials */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">כישורים :</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  עיסוי רפואי
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  עיסוי תיאלנדי
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  עיסוי שוודי
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  עיסוי רקמות עמוק
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  טרפיה מנואלית
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  רפלקסולוגיה
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  כוסות רוח
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  אנטיצלוליט
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  שיאצו
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  לומי לומי
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  טריגר פוינט
                </li>
              </ul>
            </div>

            {/* Treatment Philosophy */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">פילוסופיית הטיפול:</h4>
              <p className="text-gray-600 italic">
                &quot;כל מטופל הוא ייחודי ומיוחד. הגישה שלי מתבססת על הבנה עמוקה של מקור הכאב,
                טיפול הוליסטי הכולל גוף ונפש, והקשבה אמיתית לצרכים האישיים של כל מטופל.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Address and Contact Info */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">מרפאה ראשית</h3>
              <div className="space-y-2 text-gray-600">
                <p>📞 052-553-3295</p>
                <p>📧 ronenmaga@gmail.com</p>
                <p>📍 רח׳ אריה בן אליעזר 32, ראשון לציון</p>
                <p>🏢  יש מעלית, להתקשר מלמטה</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">שעות פתיחה</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>ראשון:</span>
                  <span>09:00-19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>שני:</span>
                  <span>09:00-19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>שלישי:</span>
                  <span>09:00-19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>רביעי:</span>
                  <span>09:00-19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>חמישי:</span>
                  <span>09:00-19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>שישי:</span>
                  <span>09:00-14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>שבת:</span>
                  <span>סגור</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
