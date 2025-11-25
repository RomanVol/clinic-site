# 🚀 Supabase Testimonials Setup Instructions

## Step 1: Create Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Click "New Project"
3. Choose your organization
4. Enter project name: "ronen-clinic-testimonials"
5. Enter a secure database password
6. Choose region closest to Israel (EU West recommended)
7. Click "Create new project"

## Step 2: Set up Database

1. Go to your Supabase project dashboard
2. Click on "SQL Editor" in the sidebar
3. Click "New Query"
4. Copy and paste the entire content from `database/schema.sql`
5. Click "Run" to execute the SQL

## Step 3: Configure Environment Variables

1. In your Supabase project, go to Settings > API
2. Copy the following values:
   - Project URL
   - anon/public key
   - service_role key (keep this secret!)

3. Update `.env.local` file with your actual values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
ADMIN_EMAIL=your-admin-email@example.com
ADMIN_PASSWORD=your-strong-password-here
```

## Step 4: Create Admin User

1. Go to Authentication > Users in your Supabase dashboard
2. Click "Add user"
3. Enter your admin email and password
4. Click "Create user"
5. Copy the User ID from the users table
6. Go back to SQL Editor and run:

```sql
INSERT INTO admin_users (id, email) 
VALUES ('your-copied-user-id', 'your-admin-email@example.com');
```

## Step 5: Test the System

### Frontend (User Testimonials):
- Go to your website's testimonials section
- Click "שתף את החוויה שלך"
- Fill out and submit a testimonial
- It should show "נשלחה לאישור" message

### Admin Panel:
- Go to `/admin/testimonials` on your website
- Login with your admin credentials
- You should see the submitted testimonial in "pending" status
- Click "אשר" to approve it
- Check your main website - the testimonial should now appear

## Step 6: Email Notifications (Optional)

To get email notifications when new testimonials are submitted:

1. Go to Database > Functions in Supabase
2. Create a new function:

```sql
CREATE OR REPLACE FUNCTION notify_new_testimonial()
RETURNS TRIGGER AS $$
BEGIN
  -- This would integrate with your email service
  -- For now, it just logs to the database
  INSERT INTO public.notifications (message, created_at)
  VALUES ('New testimonial from: ' || NEW.name, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER testimonial_notification
  AFTER INSERT ON testimonials
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_testimonial();
```

## 🔒 Security Notes

- Never commit `.env.local` to Git
- Keep your service role key secret
- The anon key is safe to expose (it's limited by RLS policies)
- Admin access is protected by authentication + admin_users table

## 📊 Analytics & Monitoring

Your admin dashboard shows:
- ✅ Pending testimonials count
- ✅ Approved testimonials count  
- ✅ Rejected testimonials count
- ✅ Total testimonials count
- ✅ Submission dates
- ✅ Star ratings

## 🆘 Troubleshooting

### "Cannot connect to database"
- Check your environment variables
- Verify your Supabase project is active
- Ensure database password is correct

### "Authentication failed"
- Verify admin user exists in admin_users table
- Check email/password combination
- Ensure RLS policies are set up correctly

### "Testimonials not appearing"
- Check if testimonials are approved (status = 'approved')
- Verify RLS policies allow public read access for approved testimonials

## 📈 Scaling Up

Free tier limits:
- 50MB database storage (thousands of testimonials)
- 500MB total storage  
- 50,000 monthly active users

When you need to upgrade:
- Pro plan: $25/month (8GB database, 100GB storage)
- Includes automated backups
- Priority support

## 🎯 Next Features You Can Add

1. **Photo uploads** for testimonials
2. **Email verification** before submission
3. **Anti-spam** measures
4. **Testimonial analytics** dashboard
5. **Export to PDF/Excel**
6. **Social media sharing**
7. **Testimonial widgets** for other pages

## 📞 Support

If you need help:
1. Check Supabase documentation: https://supabase.com/docs
2. Supabase Discord: https://discord.supabase.com
3. Or ask me for additional customizations!

---

**Total Setup Time:** ~15-20 minutes
**Monthly Cost:** $0 (free tier)
**Features:** ✅ Database persistence, ✅ Admin moderation, ✅ Security, ✅ Analytics
