# YourSongHere.com - Custom Song Platform

Professional custom song commissioning platform built for Jeff Arthur Studios.

## Features

✅ Multi-step order form (5 steps)  
✅ Stripe payment integration ($250 deposit + $250 on delivery)  
✅ Email notifications to client & Jeff  
✅ Mobile-first responsive design  
✅ Purple/pink gradient branding  
✅ Fictitious testimonials (replace with real ones)  

## Tech Stack

- **Frontend:** Next.js 14 + React + TypeScript
- **Styling:** Pure CSS (no Tailwind to avoid build issues)
- **Payments:** Stripe Checkout
- **Emails:** Resend
- **Hosting:** Vercel (recommended)

## Setup Instructions

### 1. Install Dependencies

```bash
cd /Users/scottycampbell/Documents/YourSongHere-Demo
npm install
```

### 2. Set Up Environment Variables

Create `.env.local` file:

```bash
cp .env.local.example .env.local
```

Then add your actual keys:

**Stripe Keys** (Get from https://dashboard.stripe.com/apikeys):
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
```

**Resend API Key** (Get from https://resend.com/api-keys):
```
RESEND_API_KEY=re_...
```

**Notification Email**:
```
NOTIFICATION_EMAIL=northbynome@gmail.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

### 4. Test the Order Flow

1. Fill out multi-step form
2. Use Stripe test card: `4242 4242 4242 4242`
3. Any future expiry date, any CVC
4. Check email notifications

## Deployment to Vercel

### Method 1: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Method 2: Via GitHub

1. Push to GitHub repo
2. Import to Vercel dashboard
3. Add environment variables in Vercel settings
4. Deploy

## Deployment to yoursonghere.com

### Option A: Replace WordPress Entirely (Recommended)

Once you're ready to go live:

1. **Deploy to Vercel** (gets you a URL like `yoursonghere.vercel.app`)
2. **Update DNS** in your domain registrar:
   - Point A record to Vercel's IP
   - Or use CNAME to Vercel
3. **Add custom domain** in Vercel dashboard
4. **Backup & remove** WordPress

### Option B: Keep Both (Temporary)

- Keep WordPress at `yoursonghere.com`
- Deploy Next.js to subdomain like `app.yoursonghere.com`
- Later migrate when ready

## File Structure

```
app/
  api/
    create-checkout/    # Stripe checkout API
  create/               # Order form pages
    success/            # Payment success page
  globals.css          # Main CSS
  layout.tsx           # Root layout
  page.tsx             # Homepage
components/
  OrderForm/           # Multi-step wizard
  Header.tsx
  Footer.tsx
  Hero.tsx
  ProcessSteps.tsx
  Occasions.tsx
  Testimonials.tsx
  Pricing.tsx
```

## Before Launch Checklist

- [ ] Replace fictitious testimonials with real ones
- [ ] Add real sample songs (currently placeholders)
- [ ] Add Jeff's bio and photo to About page
- [ ] Set up Stripe account (switch from test to live mode)
- [ ] Set up Resend account and verify sending domain
- [ ] Configure custom "from" email (orders@yoursonghere.com)
- [ ] Test entire order flow end-to-end
- [ ] Add logo file (replace "YourSongHere" text)
- [ ] Set up Google Analytics
- [ ] Add Privacy Policy page
- [ ] Add Terms of Service page
- [ ] Test on mobile devices
- [ ] Get SSL certificate (automatic with Vercel)

## Stripe Setup

### Test Mode (Development)

Use test API keys and test cards:
- Card: `4242 4242 4242 4242`
- Expiry: Any future date
- CVC: Any 3 digits

### Live Mode (Production)

1. Complete Stripe account verification
2. Switch API keys to live mode
3. Test with real card (small amount)
4. Monitor Stripe dashboard for payments

## Email Setup (Resend)

1. Sign up at https://resend.com
2. Add sending domain (yoursonghere.com)
3. Verify DNS records
4. Get API key
5. Test email delivery

## Content to Add

### Samples Needed
- 2-3 MP3 files of completed songs
- Short descriptions of each song's story
- Client permission to feature

### Testimonials Needed (Replace Fictitious Ones)
- Client name
- Occasion
- Quote (2-3 sentences)
- Optional: photo

### About Page Content
- Jeff's bio (200-300 words)
- Professional photo
- Studio photos (optional)
- Credentials/experience

## Support

Questions? Contact:
- Email: northbynome@gmail.com
- Or refer to SOFTWARE_DEVELOPMENT_PLAN.md

## License

Proprietary - Jeff Arthur Studios / YourSongHere
