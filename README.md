# Band EPK (Electronic Press Kit)

A modern, responsive Electronic Press Kit (EPK) website for your band. Built with React, Vite, and Tailwind CSS, optimized for GitHub Pages hosting.

## Features

✨ **Modern Design**
- Fully responsive layout (mobile, tablet, desktop)
- Dark theme with red accent colors
- Smooth animations and transitions

🎨 **Key Sections**
- **Hero Section**: Eye-catching landing area with call-to-action buttons
- **Gallery**: Image carousel with auto-play and manual navigation
- **Biography**: About the band section with photo
- **Music**: Links to streaming platforms and featured release showcase
- **Social Media**: Links to all social platforms
- **Contact Form**: Get in touch with your band
- **Footer**: Quick links and contact info

🚀 **Built With**
- React 18
- Vite (fast development server)
- Tailwind CSS (responsive design)
- JavaScript (vanilla hooks for carousel)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/YOUR-USERNAME/tingodsEPK.git
cd tingodsEPK
```

2. Install dependencies:
```bash
npm install
```

3. Update personalization:
   - Replace placeholder text with your band info in components
   - Update social media links in `src/components/Socials.jsx`
   - Add music streaming links in `src/components/Music.jsx`
   - Replace placeholder images with your actual photos
   - Update band name in `src/components/Header.jsx`

4. Run development server:
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser.

## Customization Guide

### Band Name & Basic Info
Edit `src/components/Header.jsx` and `src/App.jsx` to update Tin Gods and title.

### Replace Placeholder Images
- Gallery images: Update URLs in `src/components/Gallery.jsx`
- Bio photo: Update URL in `src/components/Bio.jsx`
- Album cover: Update URL in `src/components/Music.jsx`

Note: The current URLs use placeholder.com. Replace with your own image URLs or host images in the `/public` folder.

### Add Your Streaming Links
In `src/components/Music.jsx`, update the URLs with your actual artist IDs:
- Spotify: `https://open.spotify.com/artist/YOUR_ARTIST_ID`
- Apple Music: `https://music.apple.com/artist/YOUR_ARTIST_ID`
- YouTube: `https://youtube.com/@yourchannelname`
- SoundCloud: `https://soundcloud.com/yourprofile`

### Update Social Media Links
In `src/components/Socials.jsx`, replace all URLs with your actual social media profiles.

### Setup Contact Form
Two options:

**Option 1: Formspree (Free, No Backend Required)**
1. Go to [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. In `src/components/Contact.jsx`, uncomment the fetch code and replace `YOUR_FORM_ID` with your actual ID

**Option 2: Basin (Alternative)**
1. Go to [basin.co](https://basin.co)
2. Follow their setup guide
3. Update the form endpoint in `Contact.jsx`

### Customize Colors
Edit `tailwind.config.js` to change the accent color (currently red-600):
```javascript
colors: {
  accent: '#yourcolor',
}
```

## Deploying to GitHub Pages

### Step 1: Update package.json
In `package.json`, update the `homepage` field:
```json
"homepage": "https://YOUR-USERNAME.github.io/tingodsEPK"
```
Replace `YOUR-USERNAME` with your GitHub username.

### Step 2: Install gh-pages (Optional)
Already included in dependencies, but if needed:
```bash
npm install --save-dev gh-pages
```

### Step 3: Build and Deploy
```bash
npm run build
npm run deploy
```

This will:
- Build the project for production
- Push the contents to the `gh-pages` branch
- Make your site live at `https://YOUR-USERNAME.github.io/tingodsEPK`

### Step 4: Update GitHub Pages Settings (First Time Only)
1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select the `gh-pages` branch and `/root` folder
5. Save

Your site should be live in a few minutes!

## Updating Content

After deploying, to update content:
1. Make changes to your components
2. Run `npm run build && npm run deploy`
3. Changes will be live in ~1-2 minutes

## File Structure

```
tingodsEPK/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Build and deploy to GitHub Pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## SEO & Analytics (Optional)

To add SEO metadata or analytics:

1. **Update meta tags** in `index.html`
2. **Add Google Analytics** - Add script to `index.html` head
3. **Update Open Graph tags** for social sharing

## Troubleshooting

### Development server won't start
```bash
npm install
npm run dev
```

### Build fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node version: `node --version` (should be v14+)

### Deploy to GitHub Pages fails
- Verify homepage URL in package.json matches your repo
- Ensure git is initialized and committed
- Check GitHub Pages settings are configured correctly

### Images not showing
- Replace placeholder URLs with actual image URLs
- Or place images in `/public` folder and use relative paths

## Tips & Best Practices

1. **Use Real Images**: Replace placeholder images with professional band photos
2. **Keep Text Concise**: EPKs should be scannable and quick to read
3. **Update Regularly**: Keep music links and social media current
4. **Mobile First**: Test on mobile devices before deploying
5. **Fast Load**: Optimize image sizes before uploading

## License

This project is open source and available for personal use.

## Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review React & Tailwind CSS documentation
3. Check Vite documentation at [vitejs.dev](https://vitejs.dev)

---

Built with ❤️ for musicians everywhere.
