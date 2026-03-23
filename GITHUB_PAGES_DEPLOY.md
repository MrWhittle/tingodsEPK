# Deploying to GitHub Pages

Complete step-by-step guide to deploy your EPK to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm installed
- This project pulled/cloned

## Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it: `tingodsEPK` (or your preferred name)
3. **Important**: Make it **PUBLIC** (required for free GitHub Pages)
4. Don't initialize with README (you already have one)
5. Click "Create repository"

## Step 2: Connect Local Repo to GitHub

Open terminal in your project directory:

```bash
git add .
git commit -m "Initial commit: Band EPK website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/tingodsEPK.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Step 3: Update Configuration

### Update package.json

In `package.json`, change the `homepage` field to match your GitHub URL:

```json
"homepage": "https://YOUR-USERNAME.github.io/tingodsEPK",
```

### Update vite.config.js

The `base` path is already set:

```javascript
base: '/tingodsEPK/'
```

If using a different repo name, update this to:

```javascript
base: '/YOUR-REPO-NAME/'
```

## Step 4: Build and Deploy

Run these commands:

```bash
npm install
npm run build
npm run deploy
```

This will:
1. Build your React app for production
2. Create optimized code in `dist/` folder
3. Push to `gh-pages` branch
4. Automatically deploy to GitHub Pages

**First time only:** You might need to grant authorization. Follow the GitHub authentication prompts.

## Step 5: Enable GitHub Pages (First Time Only)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

## Step 6: Access Your Site

Your EPK will be live at:

```
https://YOUR-USERNAME.github.io/tingodsEPK
```

⏱️ **Wait 2-3 minutes for initial deployment**, then refresh the page.

## Making Updates

After deploying, whenever you make changes:

```bash
git add .
git commit -m "Update: [describe your changes]"
git push origin main
npm run deploy
```

Updates typically go live within 1-2 minutes.

## Troubleshooting

### "Project not found" error (404)

**Solution:**
1. Verify the homepage URL in `package.json`
2. Check that repository name matches `package.json` homepage
3. Wait a few more minutes for GitHub Pages to process
4. Clear browser cache and hard refresh (Ctrl+Shift+R)

### Custom Domain (Optional)

Want `yourband.com` instead of the long GitHub URL?

1. **Buy or own a domain**
2. In repository **Settings** → **Pages**, add your domain
3. Update DNS records with your domain provider
4. GitHub provides instructions during setup

### Images not loading

Check:
- Are image URLs absolute (https://...)?
- If using `/images/photo.jpg`, ensure file is in `public/images/`
- Verify file paths match exactly (case-sensitive)

### Styles not loading

- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Verify `base` path in `vite.config.js` matches `package.json` homepage

### Deploy command fails

```bash
# Check git status
git status

# Make sure everything is committed
git add .
git commit -m "Pending changes"

# Try deploying again
npm run deploy
```

### Pages still showing old version

```bash
# Do a clean rebuild
rm -rf dist
npm run build
npm run deploy
```

## How GitHub Pages Works

When you run `npm run deploy`:

1. **Build Step**: React components compile to HTML/CSS/JS
2. **Output**: Files saved to `dist/` folder
3. **gh-pages Package**: Pushes `dist/` to `gh-pages` branch
4. **GitHub Pages**: Serves content from `gh-pages` branch
5. **CDN**: Your site is distributed globally

## Performance Tips

Your EPK is fastest when:

✅ Images are optimized (compress before uploading)
✅ Using next-generation formats (WebP when possible)
✅ Keeping unnecessary packages minimal
✅ Using relative links within site

## CI/CD Alternative (Advanced)

Instead of manual deploy, use GitHub Actions for automatic deployment:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Now deployment happens automatically when you push to main!

## Monitoring Deployments

Check deployment status:

1. Go to repository → **Actions** tab
2. See build history and status
3. Click on any deployment to see logs

## Security Notes

- GitHub Pages is static hosting (no server backend)
- Contact form won't work without Formspree or similar
- Never commit sensitive info (API keys, passwords)
- Use `.gitignore` to exclude `node_modules` and `.env` files

## Rollback (Undo Deployment)

If you deploy breaking changes:

```bash
git revert HEAD
git push origin main
npm run deploy
```

Or manually rebuild from a previous commit:

```bash
git checkout <previous-commit-hash>
npm run build
npm run deploy
```

## Next Steps

After deployment:

1. ✅ Test all links on live site
2. ✅ Check mobile responsiveness
3. ✅ Test contact form
4. ✅ Share links on social media
5. ✅ Monitor for any issues

## Support

- [GitHub Pages Docs](https://pages.github.com)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [npm gh-pages Package](https://www.npmjs.com/package/gh-pages)

---

Your EPK is now live to the world! 🎉
