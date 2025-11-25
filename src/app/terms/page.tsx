import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsOfUse() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8" dir="rtl">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              תנאי שימוש
            </h1>
            
            <div className="prose prose-lg max-w-none text-right space-y-6">
              
              {/* Last Updated */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 font-medium">
                  עדכון אחרון: אוקטובר 2025
                </p>
              </div>

              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">תנאי שימוש באתר</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ברוכים הבאים לאתר מרפאת רונן (להלן: "האתר") מאת מרפאת רונן (להלן: "בעל האתר").
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  בעל האתר פועל על מנת להבטיח כי המידע באתר זה יהיה מדויק ושלם, אולם בעל האתר אינו אחראי לכל 
                  תוצאה העלולה לנבוע מטעות, השמטה, חוסר דיוק או ממידע מטעה המופיע באתר.
                </p>
                <div className="bg-red-50 border-r-4 border-red-400 p-4 rounded">
                  <p className="text-red-700 font-medium">
                    מובהר בזאת, למען הסר ספק, כי בעל האתר אינו אחראי לנזק ישיר ו/או עקיף ו/או הפסד/ים כספי/ים 
                    כלשהם העלולים להיגרם כתוצאה מנתונים המוצגים באתר זה.
                  </p>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  <strong>שים לב:</strong> השימוש בלשון זכר נעשה מטעמי נוחות בלבד, ואין בו בכדי לפגוע ו/או ליצור אפליה כלשהי.
                </p>
              </section>

              {/* Registration and Services */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">הרשמה ושירותים</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  חלק מהשירותים הניתנים במערכת טעונים הרשמה. במסגרת ההרשמה תידרש למסור פרטים אישיים: שם, כתובת 
                  דואר אלקטרוני שלך ובמקרים מסוימים גם כתובת פיזית למשלוח דואר ומספר טלפון ואולי אף פרטים נוספים 
                  כמו מהיא הסיבה שאתה פונה אלי, בעיה רפואית או מצב רפואי מסוים עליהם תרצה לקבל ייעוץ או אפשרות 
                  לסיוע. הנתונים שתמסור בעת ההרשמה יישמרו במאגר המידע של המערכת. אינך חייב על-פי חוק למסור את המידע 
                  אולם אם לא תמסור אותו, לא תוכל להשתמש בשירותים הניתנים.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">ניוזלטר ורשימת תפוצה</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  תוכל להירשם לקבלת ניוזלטר ולהיות חלק מרשימת התפוצה של האתר. מי שנרשם מקבל מעת לעת דואר אלקטרוני 
                  הכולל: מידע עדכני, מאמרים, הודעות לגבי מוצרים ושירותים בין אם מוצרים של בעל האתר ו/או מוצרים של צד שלישי.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  בעצם הרשמתך לקבלת מידע ו/או שירותים מהאתר, הנך מסכים כי מעת לעת תשלח אליך הצעה שיווקית מן האתר 
                  בין אם היא רלוונטית לתחומים המוצעים בו ובין שלא. הניוזלטר מכיל פרסומות.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  מצטרף לרשימת התפוצה (ניוזלטר) מי שבוחר להצטרף מאשר לי לשלוח אליו ניוזלטר ומאשר לי לשלוח אליו 
                  מסרים שיווקיים, הזין את פרטיו האישיים בטופס. ניתן, בכל עת, למחוק את שמך מרשימת התפוצה. פרטים על 
                  תהליך ההסרה נמצאים בתחתית כל דבר דואר שתקבל מאתנו.
                </p>
              </section>

              {/* Use of Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">שימוש במידע ופרטיות</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  בעל האתר רשאי להשתמש בפרטים שתמסור באתר ובמידע שייאסף אודות דפוסי השימוש, לצורך שיפור השירותים, 
                  ו/או ליצירת קשר בדואר אלקטרוני.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  בעל האתר לא יעביר לצד שלישי מידע שיזהה את הגולשים באתר, ולא יעביר את פרטיך, חלקם או כולם לצד 
                  שלישי. בעל האתר אינו אחראי לתכנים חיצוניים או לכל תוכן חיצוני אחר אשר אינו נמצא באתר ואשר הגולש 
                  הועבר אליו לאחר לחיצה על הלינק המצורף.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  בעל האתר עושה כמיטב יכולתו באמצעים העומדים לרשותו לשמור על סודיות פרטי לקוחותיו מלהגיע לידי גורמים זרים.
                </p>
              </section>

              {/* Website Content and Usage */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">תכני האתר ושימוש בהם</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  לתשומת לבך, כל שימוש במידע המפורט באתר (להלן: "התכנים") כפוף לתנאי השימוש באתר. שימוש על-ידך או 
                  מי מטעמך בתכנים באתר, מהווה בפועל את הסכמתך לתנאים המפורטים להלן:
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  האתר עוסק בטיפול בכאבים: כאבי גב, צוואר, ראש, מרפקים וכיוצא באלה. אוסף התכנים באתר נתון לשינויים 
                  בכל עת על-פי שיקול דעת של מנהל האתר. למרות שבמהלך עדכון התכנים באתר מושקע מאמץ רב בכדי לשמור על 
                  תיאור מדויק ואקטואליות, אין באפשרות האתר להתחייב על עדכניות, נכונות, איכות, טבע, אמינות ויישום תיאור 
                  התכנים המפורטים באתר.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  האתר שומר לעצמו את הזכות להשתמש במידע שייאסף בעקבות השימוש באתר למטרות יצירת קשר, ניתוח סטטיסטי, 
                  דפוסי שימוש וכיו"ב.
                </p>
              </section>

              {/* Third Party Content and Purchases */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">תכנים חיצוניים ורכישות</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  האתר והניוזלטר עשויים לספק תכנים וקישורים לרכישת מוצרים ו/או שירותים באתרים אחרים. בעל האתר לא 
                  יישא במישרין או בעקיפין באחריות לנזקים שייגרמו לך בגלל עיכובים באספקה, או לכל דבר אחר הקשור 
                  בהזמנת מוצרים ו/או שירותים מהאתר שבו רכשת. כמו כן, בעל האתר אינו אחראי לתכנים ולתוצאות, ישירות או 
                  עקיפות שעלולות להיגרם לך או לצד שלישי כלשהו אם החלטת לפעול על בסיס תכנים אלה.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  בעל האתר לא יישא במישרין או בעקיפין באחריות לנזקים שנגרמו לך בגלל שפנייתך לא נקלטה במלואה במחשב 
                  האתר שבו מילאת את הטופס.
                </p>
              </section>

              {/* Service Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">תנאי השירות</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  השירות והתכנים באתר מיועדים לקהל הרחב הנמצא בתחום השיפוט של מדינת ישראל בלבד והינם לשימושך במצבם 
                  הקיים (AS IS) וללא כל אחריות, בין אחריות מפורשת ובין אחריות משתמעת. עליך האחריות לבדוק ולוודא את 
                  התאמת המידע, המוצרים והשירותים המוזכרים באתר לדרישותיך ושימושך.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  למען הסר ספק, השימוש בתכנים הנמצאים באתר נעשה על אחריותך הבלעדית והמלאה ובשום מקרה לא יהיה האתר 
                  ו/או בעליו אחראים על תוכן התכנים, טעויות, אי-דיוקים, שעות פעילות ורצף פעילות האתר.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  הנך מקבל על עצמך את מלוא הסיכון והאחריות בשימוש בתכנים באתר, איכותם, טבעם, אמינותם ויישומם ולא תהיה 
                  לך כל תביעה ו/או טענה ו/או דרישה נגד האתר ו/או בעל האתר בגין השירות והתכנים הניתנים באתר, מגבלותיהם 
                  ויכולתם.
                </p>
              </section>

              {/* Liability Limitations */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">הגבלת אחריות ונזקים</h2>
                <div className="bg-yellow-50 border-r-4 border-yellow-400 p-6 rounded mb-4">
                  <p className="text-yellow-800 font-medium mb-3">
                    בשום מקרה ובשום תנאי לא יהיה בעל האתר ו/או האתר אחראים לכל נזק כספי או אחר שייגרם לך באופן ישיר 
                    או עקיף כתוצאה משימוש ו/או הסתמכות על התכנים באתר, ובפרט לא יהיה בעל האתר אחראי לכל נזק ו/או הפסד 
                    עקיף ו/או מקרי מכל מין וסוג, לרבות נזקים בגין אבדן רווחים ו/או הכנסות.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  האתר אינו מתחייב לפרסם כל תוכן ורשאי להסיר כל תוכן ו/או לתקנו לפי ראות עיניו, בכל עת וללא צורך 
                  במתן התראה ו/או הודעה מוקדמת.
                </p>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">קניין רוחני וזכויות יוצרים</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  האתר, כולו ו/או חלקיו ו/או רכיביו, לרבות האפליקציות, הממשקים, הרכיבים והמידע הכלולים בו (להלן: "הרכיבים"), 
                  הינם ויהיו בכל עת קניינו הבלעדי של בעליו.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  כל זכות היוצרים והקניין באתר ובתיעודו לרבות אלה הנובעים מביצוע שינויים, שיפורים, התאמות, תוספות או 
                  עדכונים שייכים לבעל האתר בלבד והינם בבעלותו הבלעדית והמלאה.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  אינך רשאי לעשות שימוש מסחרי כלשהו באתר ו/או בתכניו למעט כפי שהותר על-ידי האתר. מבלי לפגוע בכלליות 
                  האמור לעיל, מובהר בזה כי בעל האתר רשאי לעשות באתר כל שימוש, בעצמו ובאמצעות אחרים, להעניק לאחרים 
                  זכויות שימוש ואחרות בו, והכל ללא הגבלה בקשר עם פרק הזמן, המקום, וכיוצא בזה, וכן בעל האתר שומר לעצמו 
                  את הזכות לשנות את תנאי השימוש באתר בכל עת וללא צורך במתן התראה ו/או הודעה מוקדמת והנך מסכים להיות 
                  מוגבל וכפוף לשינויים אלה.
                </p>
              </section>

              {/* User Responsibility and Indemnification */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">אחריות המשתמש ופיצוי</h2>
                <div className="bg-orange-50 border-r-4 border-orange-400 p-6 rounded mb-4">
                  <p className="text-orange-800 font-medium mb-3">
                    הנך מתחייב לשאת בכל אחריות, מפורשת ומלאה, בגין כל נזק שייגרם לבעל האתר ו/או לכל מי מטעמו ו/או לצד 
                    שלישי כלשהו, לגוף ולרכוש, לרבות נזקים ישירים, עקיפים, נסיבתיים, תוצאתיים, הפסדי רווחים וכדומה, לרבות 
                    שכ"ט עו"ד ופגיעה במוניטין ובגין כל טענה דרישה או תביעה שתוגש כנגד בעל האתר ו/או עובדיו בקשר לאתר 
                    ו/או בגין פעילות מסחרית הקשורה לאתר הנובע משימוש שלא כדין באתר ובתכניו.
                  </p>
                  <p className="text-orange-700 text-sm">
                    הנך מסכים בזאת כי ההתחייבות לפיצוי על הנזקים וכיסוי הוצאות כאמור לעיל יחולו בין אם הנך צד רשמי לדיון 
                    משפטי, טענה או תובענה, ובין אם לא.
                  </p>
                </div>
              </section>

              {/* Complete Agreement */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">הסכמה מלאה ושינויים</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  כל המפורט לעיל כולל את המוסכם בין הצדדים במלואו, על כל ההבנות, ההסכמות, החיובים והתניות שבין הצדדים 
                  וכל שינוי, תיקון או תוספת להסכמה זו ייערכו בכתב, שאם לא כן לא יהיה להם תוקף. הסכמה מטעם בעל האתר 
                  לסטייה מתנאי המפורט לעיל, במקרה מסוים, לא תהווה תקדים ולא ילמדו ממנה גזירה שווה לכל מקרה אחר.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  כל שינוי ו/או השלמה ו/או תיקון של איזה מהוראות המפורט לעיל טעון כתב על ידי בעל האתר, שאחרת יהא חסר 
                  איזה נפקות משפטית שהיא.
                </p>
              </section>

              {/* Legal Jurisdiction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">דין מחייב וסמכות שיפוט</h2>
                <div className="bg-blue-50 border-r-4 border-blue-400 p-6 rounded">
                  <p className="text-blue-800 font-medium mb-3">
                    <strong>דין חל:</strong> מוסכם כי הדין החל על יחסים הקשורים לשימושך באתר הוא הדין הישראלי ודין זה בלבד.
                  </p>
                  <p className="text-blue-800 font-medium">
                    <strong>סמכות שיפוט:</strong> מוסכם כי בית המשפט המוסמך לדון בתביעות בין הצדדים הוא בתי המשפט במחוז 
                    תל-אביב במדינת ישראל ובתי משפט אלה בלבד.
                  </p>
                </div>
              </section>

              {/* Final Notice */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">הערה חשובה</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700 font-medium text-center">
                    <strong>שים לב:</strong> השימוש בלשון זכר נעשה מטעמי נוחות בלבד, ואין בו בכדי לפגוע ו/או ליצור אפליה כלשהי.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">יצירת קשר</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    לשאלות, הבהרות או פניות בנוגע לתנאי השימוש באתר:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>מרפאת רונן</strong></p>
                    <p><strong>כתובת:</strong> רח׳ אריה בן אליעזר 32, ראשון לציון</p>
                    <p><strong>טלפון:</strong> 052-553-3295</p>
                    <p><strong>אימייל:</strong> ronenmaga@gmail.com</p>
                    <p><strong>שעות פעילות:</strong> [שעות פעילות - נא למלא]</p>
                  </div>
                </div>
              </section>

              {/* Effective Date */}
              <div className="bg-purple-50 p-4 rounded-lg mt-8">
                <p className="text-purple-800 font-medium text-center">
                  תנאי שימוש אלה תקפים החל מתאריך: אוקטובר 2025
                </p>
                <p className="text-purple-600 text-sm text-center mt-2">
                  בשימוש באתר אתם מצהירים כי קראתם והבנתם את תנאי השימוש ואתם מסכימים להם במלואם
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
