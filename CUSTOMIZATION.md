# EPK Customization Guide

This guide walks you through customizing the EPK template for your specific band.

## Quick Start Customization (15 minutes)

### 1. Update Band Name
**File:** `src/components/Header.jsx`

Find this line:
```jsx
<h1 className="text-2xl sm:text-3xl font-bold text-red-600">Tin Gods</h1>
```

Replace with your actual band name:
```jsx
<h1 className="text-2xl sm:text-3xl font-bold text-red-600">The Tingods</h1>
```

Also update in `index.html`:
```html
<title>The Tingods - EPK</title>
```

### 2. Replace Band Images

#### Gallery Images (`src/components/Gallery.jsx`)
Replace the placeholder URLs in the `images` array:

```javascript
const images = [
  {
    id: 1,
    title: 'Performance 1',
    src: 'YOUR_IMAGE_URL_1',  // Replace this
    alt: 'Band performing on stage'
  },
  // ... more images
]
```

**To host images:**
- Create a folder: `public/images/`
- Place your images there
- Use paths like: `src="/images/photo1.jpg"`

#### Bio Photo (`src/components/Bio.jsx`)
```jsx
<img
  src="YOUR_BAND_PHOTO_URL"  // Replace this
  alt="Band photo"
  className="rounded-lg shadow-2xl w-full"
/>
```

#### Album Cover (`src/components/Music.jsx`)
```jsx
<img
  src="YOUR_ALBUM_COVER_URL"  // Replace this
  alt="Album cover"
  className="rounded-lg shadow-xl w-full"
/>
```

### 3. Add Streaming Links

**File:** `src/components/Music.jsx`

Find the `streams` array and update with your actual links:

```javascript
const streams = [
  {
    name: 'Spotify',
    icon: '🎵',
    url: 'https://open.spotify.com/artist/YOUR_SPOTIFY_ID',  // Update this
    color: 'hover:text-green-400'
  },
  // ... more platforms
]
```

**Where to find your IDs:**
- **Spotify**: Go to your artist page, ID is in the URL: `https://open.spotify.com/artist/XXXXXXXX`
- **Apple Music**: Get from your artist profile
- **YouTube**: Use your channel URL
- **SoundCloud**: Use your profile URL

### 4. Update Social Media Links

**File:** `src/components/Socials.jsx`

Update the `socials` array with your profiles:

```javascript
const socials = [
  {
    name: 'Instagram',
    icon: '📷',
    url: 'https://instagram.com/thetingods',  // Update this
    color: 'hover:text-pink-500'
  },
  // ... more socials
]
```

### 5. Setup Contact Form

**Option A: Using Formspree (Easiest)**

1. Go to [formspree.io](https://formspree.io)
2. Click "Create" and paste your email
3. You'll get a form ID (looks like: `f/xxxxx`)
4. In `src/components/Contact.jsx`, uncomment these lines:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}).then(response => {
  if (response.ok) {
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }
})
```

Replace `YOUR_FORM_ID` with your actual ID.

**Option B: Using Basin**

1. Go to [basin.co](https://basin.co)
2. Create an account
3. Update the fetch URL with your form endpoint

### 6. Update Band Bio

**File:** `src/components/Bio.jsx`

Replace the placeholder text:

```jsx
<p className="text-slate-300 text-lg mb-4 leading-relaxed">
  Tell your band's story here. Share your journey, how you started, your musical influences, 
  and what drives your creativity. This is your chance to connect with fans on a personal level.
</p>
```

Write your actual band story, musical style, and mission.

### 7. Update Album/Release Info

**File:** `src/components/Music.jsx`

Update the featured release section:

```jsx
<h4 className="text-2xl font-bold text-white mb-2">Your Latest Album Name</h4>
<p className="text-slate-300 mb-4">Release Date: March 2024</p>
<p className="text-slate-300 mb-6 leading-relaxed">
  Describe your album, the themes, inspirations, and what listeners can expect.
</p>
```

### 8. Update Footer Info

**File:** `src/components/Footer.jsx`

Update contact information:

```jsx
<p className="text-slate-400 text-sm">
  Email: <a href="mailto:contact@thetingods.com" className="text-red-600">contact@thetingods.com</a>
</p>
```

## Advanced Customization

### Change Colors

**File:** `tailwind.config.js`

Current theme:
- Primary accent: Red (#e11d48)
- Background: Slate-900 (#0f172a)

To change accent color globally, update:

```javascript
colors: {
  accent: '#e11d48',  // Change this hex code
}
```

Then replace `red-600` with `accent` in components.

### Customize Font

Edit `src/index.css`:

```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

Or import from Google Fonts in `index.html`.

### Add More Sections

To add a new section (e.g., "Tour Dates"):

1. Create `src/components/TourDates.jsx`
2. Build your component
3. Import and add to `App.jsx`

### Change Dark Theme

If you want a light theme instead, replace all `bg-slate-900` and `bg-slate-800` with lighter variants in components.

## Testing Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` and test all changes.

## Deploying Changes

After customizing:

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Your updates will be live in 1-2 minutes!

## Common Issues

**Q: Images won't display**
- A: Use full URLs (https://...) or add images to `public/` folder and use relative paths

**Q: Links aren't working**
- A: Make sure URLs start with `https://`

**Q: Form not receiving submissions**
- A: Check that Formspree form ID is correct and your email is verified

**Q: Styling looks weird**
- A: Clear browser cache (Ctrl+Shift+Delete) or hard refresh (Ctrl+Shift+R)

## Helpful Resources

- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [GitHub Pages Docs](https://pages.github.com)

---

**Need help?** Check the main README.md for additional support options.
