import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message, consultationRequest } = await request.json()

    // Create transporter (you'll need to configure with real email service)
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // or 'outlook', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER, // your-clinic-email@gmail.com
        pass: process.env.EMAIL_PASS  // your-app-password
      }
    })

    // Email to clinic owner
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CLINIC_EMAIL || 'clinic-owner@example.com', // Use environment variable
      subject: `פנייה חדשה מהאתר - ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif;">
          <h2>פנייה חדשה מהאתר</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>שם:</strong> ${name}</p>
            <p><strong>טלפון:</strong> ${phone}</p>
            <p><strong>אימייל:</strong> ${email || 'לא צוין'}</p>
            <p><strong>בקשה לייעוץ:</strong> ${consultationRequest ? 'כן' : 'לא'}</p>
            <p><strong>הודעה:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px;">${message || 'לא צוינה הודעה'}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            הודעה זו נשלחה מטופס יצירת קשר באתר מרפאת רונן
          </p>
        </div>
      `
    }

    // Auto-reply to customer
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'תודה על פנייתך - מרפאת רונן',
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif;">
          <h2>שלום ${name},</h2>
          <p>תודה על פנייתך למרפאת רונן.</p>
          <p>קיבלנו את הודעתך ונחזור אליך תוך 24 שעות.</p>
          <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>למקרי חירום:</strong> 052-553-3295</p>
            <p><strong>וואטסאפ:</strong> 052-553-3295</p>
          </div>
          <p>בברכה,<br>צוות מרפאת רונן</p>
        </div>
      `
    }

    // Send emails
    await transporter.sendMail(mailOptions)
    if (email) {
      await transporter.sendMail(autoReply)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'שגיאה בשליחת האימייל' }, { status: 500 })
  }
}
