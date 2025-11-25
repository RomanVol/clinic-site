'use client'
import { useState, useEffect, useCallback } from 'react'
import { supabase, type Testimonial } from '../../../../lib/supabase'

export default function AdminDashboard() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const loadTestimonials = useCallback(async () => {
    setLoading(true)
    try {
      let query = supabase.from('testimonials').select('*')
      
      if (filter !== 'all') {
        query = query.eq('status', filter)
      }

      const { data, error } = await query.order('created_at', { ascending: false })
      if (error) throw error
      setTestimonials(data || [])
    } catch (error) {
      console.error('Error loading testimonials:', error)
    } finally {
      setLoading(false)
    }
  }, [filter])

  useEffect(() => {
    checkAuth()
    loadTestimonials()
  }, [loadTestimonials])

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      // Check if user is admin
      const { data: adminData } = await supabase
        .from('admin_users')
        .select('*')
        .eq('id', user.id)
        .single()
      
      if (adminData) {
        setIsAuthenticated(true)
      }
    }
  }

  const updateTestimonialStatus = async (id: number, status: 'approved' | 'rejected') => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ status })
        .eq('id', id)

      if (error) throw error
      
      // Refresh testimonials
      loadTestimonials()
    } catch (error) {
      console.error('Error updating testimonial:', error)
    }
  }

  const deleteTestimonial = async (id: number) => {
    if (!confirm('האם אתה בטוח שברצונך למחוק המלצה זו?')) return

    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id)

      if (error) throw error
      loadTestimonials()
    } catch (error) {
      console.error('Error deleting testimonial:', error)
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) throw error
      checkAuth()
    } catch (error) {
      console.error('Error signing in:', error)
      alert('שגיאה בהתחברות')
    }
  }

  if (!isAuthenticated) {
    return <LoginForm onSignIn={signIn} />
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">ניהול המלצות</h1>
            <button
              onClick={() => supabase.auth.signOut()}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              התנתק
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filter buttons */}
        <div className="mb-8 flex space-x-4 rtl:space-x-reverse">
          {[
            { key: 'pending', label: 'ממתינות לאישור', color: 'yellow' },
            { key: 'approved', label: 'מאושרות', color: 'green' },
            { key: 'rejected', label: 'נדחות', color: 'red' },
            { key: 'all', label: 'הכל', color: 'blue' }
          ].map(({ key, label, color }) => (
            <button
              key={key}
              onClick={() => setFilter(key as 'all' | 'pending' | 'approved' | 'rejected')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === key
                  ? `bg-${color}-600 text-white`
                  : `bg-${color}-100 text-${color}-800 hover:bg-${color}-200`
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { status: 'pending', label: 'ממתינות', color: 'yellow' },
            { status: 'approved', label: 'מאושרות', color: 'green' },
            { status: 'rejected', label: 'נדחות', color: 'red' },
            { status: 'all', label: 'סך הכל', color: 'blue' }
          ].map(({ status, label, color }: { status: string; label: string; color: string }) => {
            const count = status === 'all' 
              ? testimonials.length 
              : testimonials.filter(t => t.status === status).length
            
            return (
              <div key={status} className={`bg-${color}-50 p-6 rounded-lg`}>
                <div className={`text-3xl font-bold text-${color}-600`}>{count}</div>
                <div className={`text-${color}-700`}>{label}</div>
              </div>
            )
          })}
        </div>

        {/* Testimonials list */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">טוען...</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                onApprove={() => updateTestimonialStatus(testimonial.id, 'approved')}
                onReject={() => updateTestimonialStatus(testimonial.id, 'rejected')}
                onDelete={() => deleteTestimonial(testimonial.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function TestimonialCard({ 
  testimonial, 
  onApprove, 
  onReject, 
  onDelete 
}: { 
  testimonial: Testimonial
  onApprove: () => void
  onReject: () => void
  onDelete: () => void
}) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'green'
      case 'rejected': return 'red'
      case 'pending': return 'yellow'
      default: return 'gray'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'approved': return 'מאושר'
      case 'rejected': return 'נדחה'
      case 'pending': return 'ממתין'
      default: return status
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.profession}</p>
          <div className="flex items-center mt-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">⭐</span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${getStatusColor(testimonial.status)}-100 text-${getStatusColor(testimonial.status)}-800`}>
            {getStatusLabel(testimonial.status)}
          </span>
          <span className="text-sm text-gray-500">
            {new Date(testimonial.created_at).toLocaleDateString('he-IL')}
          </span>
        </div>
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>

      <div className="flex space-x-3 rtl:space-x-reverse">
        {testimonial.status === 'pending' && (
          <>
            <button
              onClick={onApprove}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium"
            >
              אשר
            </button>
            <button
              onClick={onReject}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-medium"
            >
              דחה
            </button>
          </>
        )}
        <button
          onClick={onDelete}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 font-medium"
        >
          מחק
        </button>
      </div>
    </div>
  )
}

function LoginForm({ onSignIn }: { onSignIn: (email: string, password: string) => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSignIn(email, password)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">התחברות למנהל</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              אימייל
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              סיסמה
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium"
          >
            התחבר
          </button>
        </form>
      </div>
    </div>
  )
}
