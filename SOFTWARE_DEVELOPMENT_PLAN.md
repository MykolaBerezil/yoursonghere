# YourSongHere.com - Software Development Plan
## Custom Song Service Platform

---

## EXECUTIVE SUMMARY

**Product:** Custom song commissioning platform for special occasions  
**Business Model:** Human-written songs at $500/song (50% upfront deposit)  
**Target Market:** Ages 25-55, female-skewed, celebrating life milestones  
**Current Stage:** MVP Development Plan  
**Repository:** `/Users/scottycampbell/Documents/YourSongHere-Demo`

---

## 1. COMPETITIVE RESEARCH FINDINGS

### Market Analysis
Analyzed 10+ existing custom song services:

**Price Positioning:**
- Budget: €29-$75 (TailorTune, individual songwriters)
- Mid-Range: $139-$199 (Songheart, Songs With You)
- Premium: $250-$500+ (Songlorious, Four26 Studios, **YourSongHere**)

**Key Insight:** $500 positions YourSongHere in the **premium/bespoke tier** alongside services that offer:
- Personalized consultation
- Professional studio recording
- Unlimited revisions
- Higher production value
- Relationship-building with clients

### What Works (Competitive Best Practices):

1. **Occasion-Based Navigation**
   - Clear categories: Weddings, Birthdays, Anniversaries, Proposals, etc.
   - Helps customers self-identify their use case

2. **Emotional Testimonials**
   - Video reactions
   - "I cried" stories
   - Quotes about meaningful gifts

3. **Clear Process Visualization**
   - 3-4 step diagrams
   - Expected timeline
   - What to expect

4. **Sample Songs**
   - Preview quality before purchase
   - Genre/style examples
   - Build trust

5. **Payment Flexibility**
   - Installment plans
   - Deposits
   - Multiple payment methods

6. **Add-On Revenue**
   - Rush delivery (+$50-100)
   - Physical products (USB, vinyl, plaques)
   - Video slideshows
   - Karaoke versions

---

## 2. INFORMATION ARCHITECTURE

### Site Structure

```
Homepage
│
├─ About Jeff Arthur Studios
│  └─ Bio, credentials, sample work
│
├─ How It Works
│  ├─ The Process (4 steps)
│  ├─ Timeline expectations
│  └─ What to prepare
│
├─ Portfolio / Listen
│  ├─ Wedding songs
│  ├─ Anniversary songs
│  ├─ Birthday songs
│  ├─ Corporate songs
│  └─ Proposal songs
│
├─ Occasions
│  ├─ Weddings
│  ├─ Anniversaries
│  ├─ Birthdays
│  ├─ Bar/Bat Mitzvahs
│  ├─ Proposals
│  ├─ Baby Showers
│  ├─ Graduations
│  ├─ Corporate Events
│  └─ Memorial/Tribute
│
├─ Pricing
│  ├─ $500 Custom Song
│  ├─ What's included
│  ├─ Payment structure
│  └─ Optional add-ons
│
├─ Testimonials
│
├─ FAQ
│
└─ Create Your Song (Primary CTA)
   └─ Order form / Squeeze page
```

### Homepage Priority Flow
1. **Hero:** Emotional headline + video/audio sample
2. **Social Proof:** 3-4 testimonial quotes
3. **Process:** How it works (4 steps)
4. **Occasions:** Visual grid of use cases
5. **Portfolio:** Featured songs
6. **CTA:** "Start Your Song" button
7. **FAQ:** Quick answers
8. **Footer:** Contact, social, trust badges

---

## 3. USER FLOW

### Primary Conversion Path

```
Landing → Emotional Hook → Sample Audio → 
"Create Your Song" CTA → 

Order Form (Squeeze Page):
├─ Step 1: Occasion & Recipients
│  ├─ Occasion type (dropdown)
│  ├─ Who is it for? (text)
│  ├─ Relationship (if multiple people)
│  └─ Date needed by
│
├─ Step 2: Tell Your Story
│  ├─ Key memories (textarea)
│  ├─ Inside jokes (textarea)
│  ├─ Personality traits (textarea)
│  ├─ Specific details to include (textarea)
│  └─ Tone preference (heartfelt, funny, romantic, etc.)
│
├─ Step 3: Musical Preferences
│  ├─ Genre preference (checkboxes)
│  ├─ Reference songs/artists (optional)
│  ├─ Tempo (slow/medium/upbeat)
│  └─ Special requests
│
├─ Step 4: Your Information
│  ├─ Your name
│  ├─ Email
│  ├─ Phone
│  └─ Best time to contact
│
└─ Step 5: Payment
   ├─ $250 deposit (Stripe Checkout)
   └─ Remaining $250 due on delivery
   
→ Confirmation Email
→ Northbynome receives order
→ Manual follow-up workflow begins
```

### Form Strategy
**Multi-step form** (5 pages) vs single long form:
- ✅ Reduces abandonment
- ✅ Feels less overwhelming
- ✅ Can save progress
- ✅ Progress bar builds commitment

---

## 4. TECHNICAL STACK RECOMMENDATION

### Frontend
**Technology:** Next.js 14 (React)  
**Why:**
- Fast, SEO-friendly
- Easy deployment (Vercel free tier)
- Built-in API routes
- Mobile-first responsive
- Form handling with React Hook Form

**Styling:** Tailwind CSS (or keep pure CSS from demo)  
**Why:**
- Rapid development
- Mobile-responsive utilities
- Consistent design system

### Backend/Database
**Option A (Recommended for MVP):** No database initially
- Forms submit directly via email
- Stripe handles payment
- Manual tracking in spreadsheet/CRM

**Option B (Future):** Supabase (PostgreSQL)
- Order management
- Client portal
- Track order status
- Historical orders

### Payment Processing
**Technology:** Stripe Checkout  
**Why:**
- No merchant account needed
- PCI compliant out of the box
- Split payments (deposit now, balance later)
- Customer doesn't need account
- Mobile-optimized

**Implementation:**
```javascript
// Deposit flow
Stripe.checkout.create({
  amount: 25000, // $250 in cents
  description: "Custom Song - 50% Deposit"
})

// Balance flow (manual link sent via email)
Stripe.checkout.create({
  amount: 25000,
  description: "Custom Song - Final Payment"
})
```

### Email Automation
**Technology:** Resend or SendGrid  
**Why:**
- Reliable delivery
- Email templates
- Track opens/clicks
- Free tier sufficient for MVP

**Email Flows:**
1. **Order Confirmation** → Customer
2. **New Order Alert** → northbynome@gmail.com
3. **Deposit Received** → Customer + Jeff
4. **Song Ready** → Customer (with payment link)
5. **Final Payment Received** → Customer (with download)

### Form Handling
**Technology:** React Hook Form + Zod validation  
**Why:**
- Client-side validation
- Great UX (instant feedback)
- Type-safe
- Minimal re-renders

---

## 5. COPYWRITING STRATEGY

### Voice & Tone
**Primary:** Warm, personal, emotionally intelligent  
**Not:** Corporate, salesy, generic

### Key Messaging Angles

**Headline Options:**
1. "Turn Your Most Precious Moments Into Music"
2. "Give The Gift That Brings Them to Tears (The Good Kind)"
3. "Your Story. Your Melody. Forever."
4. "When Words Aren't Enough, Let Music Speak"

**Subheadline:**
"Professional custom songs for weddings, anniversaries, proposals, and every moment worth remembering. Written just for you by Jeff Arthur Studios."

### Occasion-Specific Copy

**Weddings:**
"Your first dance deserves a song as unique as your love story. Imagine walking down the aisle to a melody written from your hearts."

**Proposals:**
"Pop the question with a song that says everything you feel. She'll remember this moment forever."

**Anniversaries:**
"Celebrate 25 years, 50 years, or just another year of choosing each other. Turn your journey into a timeless love song."

**Bar/Bat Mitzvahs:**
"Mark this sacred milestone with a song that honors heritage, celebrates growth, and speaks to the heart."

### Trust Builders
- "100% Original Composition"
- "Professional Studio Recording"
- "Unlimited Revisions Until Perfect"
- "Money-Back Guarantee" (if you want to offer)
- "Over X Songs Created" (once you have portfolio)

---

## 6. DESIGN SPECIFICATIONS

### Visual Identity (Based on approved mockup)
**Colors:**
- Primary: #8B5CF6 (Purple)
- Secondary: #EC4899 (Pink)
- Gradients: Purple → Pink
- Neutrals: Grays for text

**Typography:**
- Headers: Bold, large, emotional
- Body: Clean, readable (system fonts OK)

### Key UI Components Needed

1. **Hero Section**
   - Emotional headline
   - Background: Subtle gradient or hero image (couple, celebration)
   - CTA: "Create Your Song" (prominent button)
   - Audio player: Featured sample song

2. **Occasion Cards**
   - Grid layout (3-4 columns desktop, 1 column mobile)
   - Icon + Title + Short description
   - Hover state → expands with example

3. **Process Steps**
   - Numbered circles or icons
   - Short headline per step
   - Brief explanation
   - Visual flow (arrows/lines)

4. **Portfolio/Samples**
   - Filterable by occasion
   - Audio players
   - "Story behind this song" snippets
   - Testimonial integration

5. **Testimonials**
   - Photo + Name + Occasion
   - Emotional quote
   - Optional video embed
   - Star rating visual

6. **Order Form (Multi-step)**
   - Progress bar at top
   - One section visible at a time
   - "Back" and "Continue" buttons
   - Save progress (localStorage initially)
   - Character counters on textareas
   - Real-time validation

### Mobile-First Considerations
- Touch-friendly buttons (44px minimum)
- Sticky CTA button on mobile
- Simplified navigation (hamburger menu)
- Audio players optimized for mobile
- Form inputs optimized for mobile keyboards

---

## 7. DEVELOPMENT PHASES

### Phase 1: MVP (Weeks 1-2)
**Goal:** Functioning order flow with payment

**Deliverables:**
- Homepage (hero, process, occasions, CTA)
- Multi-step order form
- Stripe integration (deposit only)
- Email notifications to northbynome@gmail.com
- Confirmation page
- Mobile responsive

**Tech:**
- Next.js app
- Pure CSS (no Tailwind to avoid previous issues)
- Stripe Checkout
- Resend for emails
- Deploy to Vercel

### Phase 2: Content & Trust (Week 3)
**Goal:** Build credibility

**Deliverables:**
- About page (Jeff's bio, credentials)
- Portfolio page (3-5 sample songs with stories)
- Testimonials page (3-5 initial testimonials)
- FAQ page
- How It Works page (detailed)

### Phase 3: Enhancement (Week 4)
**Goal:** Optimize conversion

**Deliverables:**
- Occasion landing pages (individual pages per occasion)
- Blog/resources section (optional)
- Gift card option
- Referral program setup
- Analytics integration (Google Analytics)
- SEO optimization

### Phase 4: Automation (Future)
**When:** After 10+ completed orders

**Deliverables:**
- Client portal (track order status)
- Automated milestone emails
- Online payment for balance (automated link)
- File delivery portal
- Review/testimonial collection automation

---

## 8. PAYMENT FLOW DETAILS

### Deposit Structure

**Customer Journey:**
1. Fills out order form
2. Clicks "Pay $250 Deposit"
3. Stripe Checkout modal opens
4. Pays via card (no account needed)
5. Redirected to confirmation page

**Backend:**
1. Stripe webhook confirms payment
2. Email sent to northbynome@gmail.com with:
   - Order details
   - Customer contact info
   - Stripe payment confirmation
3. Email sent to customer:
   - Thank you
   - What to expect next
   - Jeff will contact within 24 hours

### Balance Payment

**Manual Flow (Phase 1):**
1. Jeff completes song
2. Jeff manually creates Stripe payment link
3. Jeff emails link to customer
4. Customer pays
5. Jeff sends download link

**Automated Flow (Phase 4):**
1. Jeff marks order "Complete" in portal
2. System auto-generates payment link
3. System emails customer
4. Payment confirmed → auto-delivers file

---

## 9. EMAIL TEMPLATES NEEDED

### 1. Order Confirmation (to Customer)
**Subject:** Your Custom Song Order - We Can't Wait to Create This!

**Body:**
```
Hi [Name],

Thank you for trusting Jeff Arthur Studios with your special song!

We've received your order for:
[Occasion] - [Recipients]

What happens next:
1. Jeff will personally review your story within 24 hours
2. He'll reach out with any questions or clarifications
3. Your song will be crafted over the next [timeline]
4. We'll send updates as we progress

Your deposit of $250 has been received. The remaining $250 will be due when your finished song is ready.

We're honored to be part of [occasion]!

Warmly,
Jeff Arthur Studios

---
Questions? Reply to this email or call [phone]
```

### 2. New Order Alert (to northbynome@gmail.com)
**Subject:** 🎵 NEW SONG ORDER - [Occasion] for [Name]

**Body:**
```
New custom song order received!

CUSTOMER INFO:
Name: [Name]
Email: [Email]
Phone: [Phone]
Best time to contact: [Time]

ORDER DETAILS:
Occasion: [Occasion]
For: [Recipients]
Needed by: [Date]
Tone: [Tone]

STORY:
[Full story/memories pasted]

MUSICAL PREFERENCES:
Genre: [Genre]
Reference artists: [Artists]
Tempo: [Tempo]
Special requests: [Requests]

PAYMENT:
Deposit: $250 (PAID via Stripe)
Balance: $250 (due on delivery)
Stripe payment ID: [ID]

---
NEXT STEPS:
1. Review order
2. Contact customer within 24 hours
3. Begin writing
4. Send balance payment link when ready
```

### 3. Song Ready (to Customer)
**Subject:** ✨ Your Song is Ready! Final Payment & Download

**Body:**
```
Hi [Name],

The moment has arrived - your custom song is complete!

[Brief description of what Jeff created]

Before we share it with you, please complete your final payment of $250:
[STRIPE PAYMENT LINK]

Once payment is confirmed (usually instant), you'll receive:
- High-quality MP3 download
- Private streaming link
- Lyrics sheet (PDF)
- [Any other deliverables]

We can't wait for you to hear it!

Warmly,
Jeff Arthur Studios
```

---

## 10. SEO STRATEGY (Future Phase)

### Target Keywords
- "custom wedding song"
- "personalized anniversary song"
- "proposal song custom"
- "bar mitzvah custom song"
- "custom song for [occasion]"

### Content Plan
- Blog: "10 Unique Gift Ideas for Your Anniversary"
- Blog: "How to Write the Perfect Song Brief"
- Blog: "Real Stories: How Custom Songs Made Their Day"
- Occasion landing pages optimized for long-tail keywords

---

## 11. ANALYTICS & SUCCESS METRICS

### Key Metrics to Track

**Acquisition:**
- Traffic sources
- Landing page views
- Bounce rate

**Engagement:**
- "Create Your Song" button clicks
- Form start rate
- Form completion rate
- Average time on site

**Conversion:**
- Orders placed
- Revenue
- Average order value
- Conversion rate (visitors → orders)

**Retention:**
- Repeat customers
- Referral rate
- Email open rates

### Tools
- Google Analytics 4
- Stripe Dashboard (revenue)
- Email service analytics (Resend)

---

## 12. RISK MITIGATION

### Potential Issues & Solutions

**1. Form Abandonment**
- **Risk:** People start but don't finish
- **Solution:** 
  - Save progress to localStorage
  - Email recovery link
  - Shorter form (fewer fields)

**2. Payment Friction**
- **Risk:** Hesitation at $500 price point
- **Solution:**
  - Show value clearly
  - Testimonials before payment
  - Money-back guarantee
  - Payment plans (Stripe installments)

**3. Scope Creep**
- **Risk:** Clients request unlimited changes
- **Solution:**
  - Clear terms on order form
  - "3 revision rounds included"
  - Additional revisions at $X/revision

**4. Seasonal Demand**
- **Risk:** Wedding season spikes, other times slow
- **Solution:**
  - Promote off-season occasions
  - Corporate gifts in Q4
  - Valentine's Day push

---

## 13. TECH STACK SUMMARY

```
Frontend:     Next.js 14 (React)
Styling:      Pure CSS (avoiding Tailwind build issues)
Forms:        React Hook Form + Zod
Payments:     Stripe Checkout
Email:        Resend
Hosting:      Vercel (free tier)
Domain:       yoursonghere.com (existing)
Analytics:    Google Analytics 4
Error Track:  Sentry (optional)
```

---

## 14. FILE STRUCTURE

```
/Users/scottycampbell/Documents/YourSongHere-Demo/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (homepage)
│   ├── globals.css
│   ├── about/
│   │   └── page.tsx
│   ├── how-it-works/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── occasions/
│   │   ├── weddings/page.tsx
│   │   ├── anniversaries/page.tsx
│   │   └── [more occasions]
│   ├── testimonials/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   └── create/
│       ├── page.tsx (multi-step form)
│       └── success/page.tsx (confirmation)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── OccasionCard.tsx
│   ├── TestimonialCard.tsx
│   ├── AudioPlayer.tsx
│   ├── ProcessStep.tsx
│   └── OrderForm/
│       ├── Step1.tsx
│       ├── Step2.tsx
│       ├── Step3.tsx
│       ├── Step4.tsx
│       └── Step5Payment.tsx
├── lib/
│   ├── stripe.ts
│   ├── email.ts
│   └── validation.ts
├── public/
│   ├── samples/
│   │   ├── wedding-sample.mp3
│   │   └── [more samples]
│   └── images/
├── api/
│   ├── create-order/
│   │   └── route.ts
│   ├── stripe-webhook/
│   │   └── route.ts
│   └── send-email/
│       └── route.ts
└── package.json
```

---

## 15. TIMELINE ESTIMATE

### Week 1
- Days 1-2: Setup Next.js project, basic structure
- Days 3-4: Homepage design + build
- Days 5-7: Multi-step form build + validation

### Week 2  
- Days 1-2: Stripe integration (deposit)
- Days 3-4: Email automation setup
- Days 5: Testing & bug fixes
- Days 6-7: Deploy to Vercel, DNS setup

### Week 3
- Days 1-3: Content pages (About, How It Works, FAQ)
- Days 4-5: Portfolio page + sample songs
- Days 6-7: Testimonials page + SEO

### Week 4
- Days 1-3: Occasion landing pages
- Days 4-5: Analytics + optimization
- Days 6-7: Final QA, launch

**Total: ~4 weeks to full MVP**

---

## 16. CONTENT REQUIREMENTS

Before development, need:

**Required for Phase 1:**
1. Jeff Arthur bio (200-300 words)
2. Professional photo of Jeff
3. 2-3 sample songs (MP3 files)
4. 2-3 testimonials (with permission to use)
5. Logo file (if exists)

**Nice to Have:**
6. Additional sample songs
7. Video testimonials
8. Behind-the-scenes studio photos
9. Process photos/videos

---

## 17. BUDGET ESTIMATE

### Third-Party Services (Monthly)

| Service | Cost | Purpose |
|---------|------|---------|
| Vercel Hosting | $0 (free tier sufficient for MVP) | Website hosting |
| Stripe | 2.9% + $0.30 per transaction | Payment processing |
| Resend | $0 (free tier: 100 emails/day) | Transactional emails |
| Google Analytics | $0 | Analytics |
| Domain | $12/year | yoursonghere.com (already owned) |

**Total Monthly (MVP):** ~$0 + Stripe fees  
**Per Transaction Cost:** ~$15 (Stripe fees on $500)  
**Net per sale:** $485

### Development Cost
- If self-built with AI assistance: Time only
- If outsourced: $3k-5k for MVP

---

## 18. NEXT STEPS / QUESTIONS FOR YOU

Before I start building, please confirm:

1. **Design approval:** Keep the purple/pink gradient brand from mockup?
2. **Samples:** Do you have 2-3 completed songs I can use as portfolio samples?
3. **Testimonials:** Any existing client feedback we can use?
4. **Timeline:** When do you need this live?
5. **Turnaround time:** What's typical delivery time for a song? (For "How It Works" messaging)
6. **Included deliverables:** MP3 only, or also WAV, lyrics sheet, video, etc?
7. **Revision policy:** How many revision rounds included in $500?
8. **Rush option:** Offer expedited delivery for additional fee?
9. **Add-ons:** Physical products (USB, vinyl, sheet music)?
10. **Jeff's availability:** Can he handle consultation calls with every client?

---

## 19. COMPETITIVE POSITIONING

### Our Differentiators (To Emphasize)

1. **Personal Touch:** Every client gets direct communication with Jeff
2. **Premium Quality:** $500 = professional studio, unlimited revisions
3. **Storytelling Focus:** Not just a song, but YOUR story in music
4. **Consultation Included:** Unlike lower-priced competitors who use forms only
5. **Bespoke Composition:** Original music, not templates

### Marketing Angle
"Other services create songs. We create heirlooms."

---

## 20. LAUNCH CHECKLIST

### Pre-Launch
- [ ] Domain configured (yoursonghere.com/mockup → yoursonghere.com)
- [ ] SSL certificate active (HTTPS)
- [ ] Stripe account verified, test mode → live mode
- [ ] Email templates tested
- [ ] All forms tested (mobile + desktop)
- [ ] Sample songs uploaded
- [ ] Portfolio page populated
- [ ] Privacy policy page
- [ ] Terms of service page
- [ ] Google Analytics installed
- [ ] Favicon + social sharing images

### Post-Launch
- [ ] Submit to Google Search Console
- [ ] Monitor order flow daily (first week)
- [ ] Check email deliverability
- [ ] A/B test CTA copy
- [ ] Collect first testimonials
- [ ] Adjust based on customer feedback

---

## APPROVAL REQUIRED

This plan outlines:
✅ Research-backed strategy  
✅ Technical architecture  
✅ Development phases  
✅ Timeline & budget  
✅ Content requirements  

**Do you approve this plan?** Once confirmed, I'll begin Phase 1 development.

**Any changes needed before we proceed?**
