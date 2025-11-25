-- Create testimonials table
CREATE TABLE testimonials (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  profession TEXT,
  text TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE
    ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow anyone to insert (submit testimonials)
CREATE POLICY "Anyone can submit testimonials" ON testimonials
    FOR INSERT WITH CHECK (true);

-- Allow anyone to read approved testimonials
CREATE POLICY "Anyone can read approved testimonials" ON testimonials
    FOR SELECT USING (status = 'approved');

-- Create admin user table for moderation
CREATE TABLE admin_users (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Enable RLS for admin_users
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Only authenticated admin users can access admin_users table
CREATE POLICY "Only authenticated users can view admin_users" ON admin_users
    FOR SELECT USING (auth.uid() = id);

-- Insert your admin email (replace with your actual email)
-- You'll need to sign up first, then run this with your actual user ID
-- INSERT INTO admin_users (id, email) VALUES ('your-user-id-here', 'your-email@example.com');

-- Admin-only policies for testimonials management
CREATE POLICY "Admins can view all testimonials" ON testimonials
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE admin_users.id = auth.uid()
        )
    );

CREATE POLICY "Admins can update testimonial status" ON testimonials
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE admin_users.id = auth.uid()
        )
    );

CREATE POLICY "Admins can delete testimonials" ON testimonials
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE admin_users.id = auth.uid()
        )
    );

-- Create indexes for better performance
CREATE INDEX idx_testimonials_status ON testimonials(status);
CREATE INDEX idx_testimonials_created_at ON testimonials(created_at DESC);
CREATE INDEX idx_testimonials_rating ON testimonials(rating);
