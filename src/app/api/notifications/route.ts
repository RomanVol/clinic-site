import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { name, message, type } = await request.json()

    // Simple email notification logic
    // You can integrate with SendGrid, Nodemailer, or any email service
    
    if (type === 'new_testimonial') {
      // Log to console for now (replace with actual email service)
      console.log(`📧 New testimonial notification:`)
      console.log(`From: ${name}`)
      console.log(`Message: ${message}`)
      
      // You could also store notifications in the database
      const { error } = await supabase
        .from('notifications')
        .insert([{
          type: 'testimonial',
          title: `המלצה חדשה מ${name}`,
          message: message,
          created_at: new Date().toISOString()
        }])

      if (error) {
        console.error('Error storing notification:', error)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Notification error:', error)
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
  }
}

// Create notifications table (run this in Supabase SQL editor):
/*
CREATE TABLE notifications (
  id BIGSERIAL PRIMARY KEY,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
*/
