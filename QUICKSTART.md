# Quick Start Guide

Get your band EPK live in 5 minutes!

## 1. Install (1 min)

```bash
cd tingodsEPK
npm install
```

## 2. Customize (2 min)

Edit these files with your info:

- **Band Name**: `src/components/Header.jsx` - Replace `Tin Gods`
- **Bio**: `src/components/Bio.jsx` - Replace placeholder text
- **Social Links**: `src/components/Socials.jsx` - Add your profiles
- **Music Links**: `src/components/Music.jsx` - Add Spotify/YouTube/etc
- **Contact Email**: `src/components/Contact.jsx` & `Footer.jsx`

See `CUSTOMIZATION.md` for detailed instructions.

## 3. Test Locally (1 min)

```bash
npm run dev
```

Visit: `http://localhost:5173`

## 4. Deploy to GitHub Pages (1 min)

First time setup:

```bash
# Update this with YOUR GitHub username
# In package.json, change "homepage" field to:
# "https://YOUR-USERNAME.github.io/tingodsEPK"

git add .
git commit -m "Initial commit"
git push origin main
npm run deploy
```

Then enable Pages:
1. GitHub repo → Settings → Pages
2. Source: gh-pages branch, root folder
3. Save

**Your site lives at:** `https://YOUR-USERNAME.github.io/tingodsEPK`

## Commands Reference

```bash
npm run dev       # Local development
npm run build     # Build for production
npm run deploy    # Build + deploy to GitHub Pages
```

## Key Features Ready to Use

✅ Fully responsive (mobile, tablet, desktop)
✅ Image carousel gallery
✅ Contact form
✅ Social media links
✅ Music streaming links
✅ Dark professional theme

## Next: Detailed Guides

- Full customization: See `CUSTOMIZATION.md`
- GitHub Pages setup: See `GITHUB_PAGES_DEPLOY.md`
- Full docs: See `README.md`

## Need Images?

Replace placeholder images at:
- Hero/Bio: Add your band photo
- Gallery: Add performance/event photos
- Album cover: Add your latest release artwork

**Quick tip:** Drag images to `public/` folder, then use paths like:
```jsx
src="/your-image.jpg"
```

## Support

Check the docs:
1. `README.md` - Full setup guide
2. `CUSTOMIZATION.md` - Personalization help
3. `GITHUB_PAGES_DEPLOY.md` - Deployment help

---

**Ready?** Start with `npm install` then `npm run dev`! 🎸
