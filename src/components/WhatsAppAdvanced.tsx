'use client'
import { useState, useEffect } from 'react'

interface WhatsAppAdvancedProps {
  phoneNumber: string
  businessName?: string
  supportHours?: {
    start: string // "09:00"
    end: string   // "18:00"
    days?: number[] // [1,2,3,4,5] for Mon-Fri
  }
  messages?: {
    default: string
    afterHours: string
    appointment: string
    emergency: string
  }
  showBusinessCard?: boolean
}

export default function WhatsAppAdvanced({ 
  phoneNumber = "972525533295",
  businessName = "מרפאת רונן",
  supportHours = { start: "08:00", end: "19:00", days: [0,1,2,3,4,5] }, // Sun-Fri
  messages = {
    default: "שלום, אני מעוניין לקבוע תור לטיפול",
    afterHours: "שלום, אני כותב מחוץ לשעות הפעילות. אשמח לתשובה כשתהיה זמין",
    appointment: "שלום רונן, אני רוצה לקבוע תור לטיפול. מתי אתה זמין השבוע?",
    emergency: "שלום, זהו מקרה דחוף. אני זקוק לטיפול בהקדם."
  },
  showBusinessCard = true
}: WhatsAppAdvancedProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isBusinessHours, setIsBusinessHours] = useState(true)

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date()
      const currentDay = now.getDay()
      const currentTime = now.getHours() * 100 + now.getMinutes()
      const startTime = parseInt(supportHours.start.replace(':', ''))
      const endTime = parseInt(supportHours.end.replace(':', ''))
      
      const isWorkingDay = supportHours.days?.includes(currentDay) ?? true
      const isWorkingTime = currentTime >= startTime && currentTime <= endTime
      
      setIsBusinessHours(isWorkingDay && isWorkingTime)
    }

    checkBusinessHours()
    const interval = setInterval(checkBusinessHours, 60000) // Check every minute
    return () => clearInterval(interval)
  }, [supportHours])

  const sendMessage = (messageType: keyof typeof messages) => {
    const message = isBusinessHours ? messages[messageType] : messages.afterHours
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Business Card Popup */}
      {isOpen && showBusinessCard && (
        <div className="absolute bottom-16 right-0 mb-4 bg-white rounded-2xl shadow-2xl p-6 min-w-80 animate-fade-in border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{businessName}</h3>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isBusinessHours ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                  <span className="text-sm text-gray-600">
                    {isBusinessHours ? 'זמין עכשיו' : 'מחוץ לשעות פעילות'}
                  </span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            שעות פעילות: {supportHours.start}-{supportHours.end}
          </p>

          <div className="space-y-2">
            <button
              onClick={() => sendMessage('appointment')}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium text-right transition-colors"
            >
              📅 קביעת תור
            </button>
            
            <button
              onClick={() => sendMessage('default')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium text-right transition-colors"
            >
              💬 שאלה כללית
            </button>
            
            <button
              onClick={() => sendMessage('emergency')}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-medium text-right transition-colors"
            >
              🚨 מקרה דחוף
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            הודעה תישלח דרך וואטסאפ
          </p>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-center
          w-14 h-14 bg-green-500 hover:bg-green-600 
          rounded-full shadow-lg hover:shadow-xl
          transform transition-all duration-300
          ${isOpen ? 'scale-110 rotate-45' : 'scale-100'}
          animate-whatsapp-pulse hover:animate-none
        `}
        aria-label="פתח צ'אט בוואטסאפ"
      >
        {/* Status indicator */}
        <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
          isBusinessHours ? 'bg-green-400' : 'bg-yellow-400'
        }`}></div>
        
        {/* WhatsApp Icon or Close Icon */}
        {isOpen ? (
          <span className="text-white text-2xl font-light">×</span>
        ) : (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
          </svg>
        )}
      </button>
    </div>
  )
}
