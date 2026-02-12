# YourSongHere.com Demo - Upload Instructions

## 📦 What You Have

The file `yoursonghere-demo.zip` contains a complete static website with:
- Homepage
- How It Works page
- Portfolio page
- About page
- FAQ page
- Order form (displays but payment won't process in static mode)

## 📤 How to Upload to Your Server

### Step 1: Extract the Zip File
1. Unzip `yoursonghere-demo.zip`
2. You'll see a folder called `out/` with all the website files inside

### Step 2: Upload via WordPress File Manager

1. **Log into WordPress**: http://yoursonghere.com/wp-admin/
   - Username: `yoursongstudios`
   - Password: `FN75F)cvK)NUNQbe`

2. **Open WP File Manager** (in left sidebar)

3. **Navigate to `public_html/`**

4. **Create a new folder** called `demo`

5. **Open the `demo` folder**

6. **Upload ALL contents from the `out/` folder**
   - Click "Upload" button
   - Select ALL files and folders from inside `out/`
   - Upload them into the `demo` folder

### Step 3: Visit Your Demo

Go to: **http://yoursonghere.com/demo**

---

## ⚠️ Important Notes

### What Works:
✅ All pages display perfectly
✅ Navigation works
✅ Forms display
✅ Mobile responsive
✅ All styling intact

### What Doesn't Work:
❌ **Payment Processing** - The Stripe payment won't work in static mode
❌ **Email Notifications** - Server-side features need live hosting

### For Full Functionality:
To get payment processing working, you need to:
- Deploy to Vercel (free hosting with server support), OR
- Replace entire WordPress site with Next.js app

---

## 🗂️ File Structure After Upload

```
yoursonghere.com/
└── demo/
    ├── index.html (homepage)
    ├── about.html
    ├── how-it-works.html
    ├── portfolio.html
    ├── faq.html
    ├── create/
    │   └── index.html (order form)
    └── _next/ (assets & scripts)
```

---

## 🎯 Quick Demo Script

When showing Jeff:

1. **Homepage**: yoursonghere.com/demo
   - Show hero, pricing, testimonials

2. **Navigation**: Click through all pages
   - How It Works
   - Portfolio (6 song examples)
   - About
   - FAQ

3. **Order Form**: Click "Create Your Song"
   - Show the 5-step wizard
   - Fill out steps to demonstrate
   - NOTE: Payment button won't process (explain this is a static demo)

---

## 💡 Next Steps

**After demo approval:**

1. **Add real content:**
   - Replace fictitious testimonials
   - Add real sample songs
   - Add Jeff's bio and photo

2. **Deploy properly:**
   - Use Vercel for full functionality
   - OR replace WordPress entirely

3. **Go live:**
   - Point domain to new site
   - Launch marketing

---

## 📧 Questions?

Email: northbynome@gmail.com

---

Built with Next.js 14 | Purple/Pink Gradient Brand | Mobile-First Design
