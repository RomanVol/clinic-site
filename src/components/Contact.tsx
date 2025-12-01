'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    consultationRequest: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const whatsappMessage = `
🏥 *פנייה חדשה מהאתר - מרפאת רונן*

👤 *שם:* ${formData.name}
📞 *טלפון:* ${formData.phone}
${formData.consultationRequest ? '✅ *מעוניין בייעוץ ראשוני*' : ''}

💬 *הודעה:*
${formData.message || 'לא צוינה הודעה מיוחדת'}

---
הודעה זו נשלחה מטופס יצירת קשר באתר
    `.trim()

    // Open WhatsApp with the message
    const clinicPhone = "972525533295" // Replace with actual clinic WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${clinicPhone}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      message: '',
      consultationRequest: false
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            צור קשר
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מלא את הפרטים בטופס ונחזור אליך בהקדם. בשיחה נבדוק כיצד נוכל לעזור לך להיפטר מהכאב ולחזור לתפקוד מלא וחיים נוחים
          </p>
        </div>

        {/* Single WhatsApp Contact Form - Centered */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">שלח בוואטסאפ</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="הכנס שם מלא"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  טלפון *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="052-553-3295"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  הודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="תאר את הכאב או הבעיה שלך..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consultationRequest"
                  name="consultationRequest"
                  checked={formData.consultationRequest}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded ml-2"
                />
                <label htmlFor="consultationRequest" className="text-sm text-gray-700">
                  אני מעוניין בשיחת ייעוץ ראשונית
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-4 px-6 rounded-lg font-bold hover:bg-green-600 transition duration-300 text-lg flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                </svg>
                שלח בוואטסאפ ➤
              </button>
            </form>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
              <p className="text-green-700 font-medium">💡 הלחיצה תפתח את וואטסאפ עם ההודעה מוכנה</p>
              <p className="text-green-600 text-sm mt-1">פשוט שלח ונחזור אליך מיד!</p>
            </div>
          </div>
        </div>

        {/* Contact Information - Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">מרפאה ראשית</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl ml-4">📞</span>
                <div>
                  <div className="font-medium text-black">052-553-3295</div>
                  <div className="text-gray-600 text-sm">זמין לשיחות ווואטסאפ</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl ml-4">📍</span>
                <div>
                  <div className="font-medium text-black">רח׳ אריה בן אליעזר 32</div>
                  <div className="text-gray-600 text-sm">ראשון לציון</div>
                </div>
              </div>
            </div>
          </div>

          {/* Access and Parking */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">גישה וחניה</h3>
            <div className="space-y-3 text-gray-600">
              <p>🚗 המרפאה ממוקמת בראשון לציון, נגישה מכל רחבי הגוש</p>
              <p>🅿️ חניה ציבורית צמוד לבניין</p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-red-800 mb-3">מקרי חירום</h3>
            <p className="text-red-700 mb-2">
              לכאבים חריפים או פציעות דחופות:
            </p>
            <div className="text-lg font-bold text-red-800">
              📱 052-553-3295
            </div>
            <p className="text-sm text-red-600 mt-2">
              זמין 24/7 למקרי חירום בלבד
            </p>
          </div>
        </div>

        {/* Map placeholder */}
        {/* <div className="mt-16">
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-4xl mb-2">🗺️</div>
              <p>מפה אינטראקטיבית למיקום המרפאה</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
