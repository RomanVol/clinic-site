import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppAdvanced from '@/components/WhatsAppAdvanced'
// import WhatsAppFloating from '@/components/WhatsAppFloating' // Simple version

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Advanced WhatsApp Button with Business Hours */}
      <WhatsAppAdvanced 
        phoneNumber="972525533295" // Replace with actual clinic WhatsApp number
        businessName="מרפאת רונן"
        supportHours={{
          start: "08:00",
          end: "19:00",
          days: [0,1,2,3,4,5] // Sunday to Friday (0=Sunday in JS)
        }}
        messages={{
          default: "שלום, יש לי שאלה על הטיפולים",
          afterHours: "שלום רונן, אני כותב מחוץ לשעות הפעילות. אשמח לתשובה מחר",
          appointment: "שלום רונן, אני רוצה לקבוע תור לטיפול. מתי אתה זמין השבוע?",
          emergency: "שלום, יש לי כאב חזק ואני זקוק לטיפול דחוף. אתה זמין?"
        }}
        showBusinessCard={true}
      />
    </div>
  )
}
