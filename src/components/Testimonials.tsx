'use client'
import { useState, useEffect } from 'react'
import { supabase, type Testimonial } from '../../lib/supabase'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    text: '',
    rating: 5
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [loading, setLoading] = useState(true)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }))
  }

  // Load approved testimonials on component mount
  useEffect(() => {
    loadTestimonials()
  }, [])

  const loadTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error loading testimonials:', error)
        setTestimonials([])
      } else {
        setTestimonials(data || [])
      }
    } catch (error) {
      console.error('Error loading testimonials:', error)
      setTestimonials([])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('') // Clear previous messages
    
    try {
      console.log('Submitting testimonial:', formData)
      
      // Check if we have environment variables
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        throw new Error('Missing Supabase environment variables')
      }

      // Insert testimonial to database
      const { data, error } = await supabase
        .from('testimonials')
        .insert([{
          name: formData.name.trim(),
          profession: formData.profession?.trim() || null,
          text: formData.text.trim(),
          rating: formData.rating,
          status: 'pending'
        }])
        .select()

      console.log('Supabase response:', { data, error })

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        })
        
        // Handle specific error types
        if (error.message?.includes('relation "testimonials" does not exist')) {
          throw new Error('טבלת ההמלצות לא קיימת במסד הנתונים. אנא צור קשר עם האדמין.')
        } else if (error.message?.includes('permission denied')) {
          throw new Error('אין הרשאה לשלוח המלצות. אנא בדוק את הגדרות הביטחון.')
        } else {
          throw new Error(`שגיאת מסד נתונים: ${error.message}`)
        }
      }

      console.log('Testimonial submitted successfully:', data)

      // Success - reset form and show success message
      setFormData({ name: '', profession: '', text: '', rating: 5 })
      setShowForm(false)
      setSubmitMessage('תודה רבה! ההמלצה שלך נשלחה לאישור. היא תופיע באתר לאחר בדיקה.')
      
      // Clear success message after 7 seconds
      setTimeout(() => setSubmitMessage(''), 7000)
      
    } catch (error: unknown) {
      console.error('Error submitting testimonial:', error)
      
      let errorMessage = 'אירעה שגיאה לא צפויה. אנא נסה שוב.'
      
      if (error instanceof Error && error.message) {
        if (error.message.includes('Missing Supabase')) {
          errorMessage = 'בעיה בהגדרות המערכת. אנא צור קשר עם האדמין.'
        } else if (error.message.includes('טבלת ההמלצות')) {
          errorMessage = error.message
        } else if (error.message.includes('הרשאה')) {
          errorMessage = error.message
        } else if (error.message.includes('שגיאת מסד נתונים')) {
          errorMessage = error.message
        }
      }
      
      setSubmitMessage(errorMessage)
    }
    
    setIsSubmitting(false)
  }

  const getAvatarByProfession = (profession: string | null) => {
    if (!profession) return '👤'
    const professionLower = profession.toLowerCase()
    if (professionLower.includes('רקדן') || professionLower.includes('יוגה')) return '🧘‍♀️'
    if (professionLower.includes('מהנדס') || professionLower.includes('תוכנה')) return '👨‍💻'
    if (professionLower.includes('מאמן') || professionLower.includes('כושר')) return '🏋️‍♂️'
    if (professionLower.includes('רופא') || professionLower.includes('רפואה')) return '👨‍⚕️'
    if (professionLower.includes('עורך דין') || professionLower.includes('משפטן')) return '👨‍💼'
    if (professionLower.includes('מורה') || professionLower.includes('חינוך')) return '👩‍🏫'
    return Math.random() > 0.5 ? '👨' : '👩'
  }

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            מה אומרים המטופלים שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            עדויות אמיתיות ממטופלים שחוו הקלה משמעותית בכאבים והשיגו איכות חיים משופרת
          </p>
        </div>

        {/* Add Testimonial Button */}
        <div className="text-center mb-12">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
          >
            {showForm ? 'סגור טופס' : 'שתף את החוויה שלך ➤'}
          </button>
        </div>

        {/* Success/Error Message */}
        {submitMessage && (
          <div className="text-center mb-8">
            <div className={`inline-block px-6 py-3 rounded-lg ${
              submitMessage.includes('תודה') 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {submitMessage}
            </div>
          </div>
        )}

        {/* Add Testimonial Form */}
        {showForm && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">שתף את החוויה שלך</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    שם מלא *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="הכנס את שמך המלא"
                  />
                </div>

                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
                    מקצוע
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="למשל: מהנדס, מורה, רקדן"
                  />
                </div>

                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                    דירוג *
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 כוכבים)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 כוכבים)</option>
                    <option value={3}>⭐⭐⭐ (3 כוכבים)</option>
                    <option value={2}>⭐⭐ (2 כוכבים)</option>
                    <option value={1}>⭐ (כוכב אחד)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">
                    ההמלצה שלך *
                  </label>
                  <textarea
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="שתף איתנו את החוויה שלך עם הטיפול של רונן..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-lg font-semibold transition duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white`}
                  >
                    {isSubmitting ? 'שולח...' : 'שלח המלצה'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Display Testimonials */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">טוען המלצות...</p>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>
                
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-4xl ml-4">{getAvatarByProfession(testimonial.profession)}</div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.profession || 'מטופל'}</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {new Date(testimonial.created_at).toLocaleDateString('he-IL')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">עדיין אין המלצות</h3>
            <p className="text-gray-500">היה הראשון לשתף את החוויה שלך!</p>
          </div>
        )}

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-blue-600">⭐ 4.9</div>
              <div className="text-gray-600">דירוג ממוצע</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">{testimonials.length}+</div>
              <div className="text-gray-600">המלצות</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">שנות ניסיון</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600">מרוצים מהטיפול</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
