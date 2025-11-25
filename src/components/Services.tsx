import Link from 'next/link'

export default function Services() {
  const services = [
    {
      id: 1,
      title: "עיסוי שוודי",
      description: "עיסוי קלאסי בשילוב תנועות מלטפות, לישה ולחיצות עדינות להרפיית שרירים, שיפור זרימת הדם והפחתת מתחים.",
      icon: "🧠",
      link: "/services/swedish-massage"
    },
    {
      id: 2,
      title: "עיסוי רקמות עמוק",
      description: "לחיצות עמוקות ואיטיות על שכבות שריר פנימיות לשחרור כאבים כרוניים ושיפור טווח התנועה.",
      icon: "💪",
      link: "/services/deep-tissue"
    },
    {
      id: 3,
      title: "שיאצו",
      description: "שיטת טיפול יפנית המבוססת על לחיצות לאורך מרידיאנים (ערוצי אנרגיה) בגוף לשחרור חסימות ואיזון אנרגטי.",
      icon: "🧘‍♂️",
      link: "/services/shiatsu"
    },
    {
      id: 4,
      title: "טריגר פוינטס",
      description: "טיפול נקודתי ב\"קשרי שריר\" שגורמים לכאב ממוקד או מקרין. לחיצה מדויקת משחררת את המתח ומקלה על הכאב.",
      icon: "🎯",
      link: "/services/trigger-points"
    },
    {
      id: 5,
      title: "כוסות רוח",
      description: "שיטה עתיקה המשתמשת בכוסות ליצירת יניקה על העור לשיפור זרימת הדם ושחרור מתחים.",
      icon: "🏺",
      link: "/services/cupping"
    },
    {
      id: 6,
      title: "תרפיה מנואלית",
      description: "גישה רחבה הכוללת טכניקות ידניות לשחרור מפרקים, רקמות רכות ושיפור התנועה.",
      icon: "🤲",
      link: "/services/manual-therapy"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            טיפולים מתמחים בכל סוגי הכאבים
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מומחיות בטיפול בכאבים והגבלות תנועה באמצעות שיטות טיפול טבעיות מתקדמות
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-6xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center leading-relaxed">
                {service.description}
              </p>
              <div className="text-center">
                <Link 
                  href={service.link}
                  className="inline-block bg-gradient-to-r from-stone-200 to-amber-100 text-stone-700 px-6 py-3 rounded-lg hover:from-stone-100 hover:to-white transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                >
                  קרא עוד ➤
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-stone-100 to-amber-50 text-stone-800 p-8 rounded-lg max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4">נמאס לך מהכאב?</h3>
            <p className="text-lg mb-6">בוא נמצא פתרון יחד. קבע תור לייעוץ ראשוני</p>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-green-200 to-stone-100 text-green-800 px-8 py-4 rounded-lg font-bold hover:from-green-100 hover:to-white transition-all duration-300 text-lg shadow-md hover:shadow-lg"
            >
              ליצירת קשר עכשיו ➤
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
