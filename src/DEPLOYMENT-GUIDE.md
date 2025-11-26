# Homely Mart - Deployment Guide

## 📦 After Downloading/Unzipping Your Code

### Step 1: Navigate to the Project Root Directory

After unzipping, your folder structure will look like this:

```
homely-mart/                    ← YOU SHOULD BE HERE
├── package.json                ← This file indicates you're in the right place
├── index.html
├── vite.config.ts
├── tsconfig.json
├── App.tsx
├── components/
│   ├── Header.tsx
│   ├── ProductGrid.tsx
│   ├── WhatsAppSection.tsx
│   └── ...
├── styles/
│   └── globals.css
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .htaccess
└── imports/
    └── (your images)
```

### Step 2: Open Terminal in the Root Directory

**Option A - Using Terminal/Command Prompt:**
```bash
cd /path/to/unzipped/homely-mart
```

**Option B - Using File Explorer:**
- Windows: Right-click in the folder → "Open in Terminal" or "Git Bash Here"
- Mac: Right-click → "New Terminal at Folder"
- Linux: Right-click → "Open Terminal Here"

**✅ Verify you're in the correct directory:**
```bash
ls -la          # Mac/Linux
dir             # Windows

# You should see: package.json, App.tsx, components/, styles/, etc.
```

---

## 🚀 Build Commands

### Step 3: Install Dependencies (First Time Only)
```bash
npm install
```
This installs all required packages. **Wait for it to complete** (may take 1-3 minutes).

### Step 4: Build for Production
```bash
npm run build
```

This creates a `dist/` folder with your production-ready website.

---

## 📁 What Gets Created

After running `npm run build`, you'll see:

```
homely-mart/
├── dist/                       ← THIS IS YOUR WEBSITE!
│   ├── index.html             ← Main HTML file
│   ├── assets/
│   │   ├── index-[hash].js    ← Optimized JavaScript
│   │   ├── index-[hash].css   ← Optimized CSS
│   │   └── [images]           ← Compressed images
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .htaccess
└── ... (other source files)
```

**The `dist/` folder is what you upload to your web hosting!**

---

## 🌐 Deployment Options

### Option 1: Shared Hosting (Recommended for You)
**Providers:** GoDaddy, Hostinger, Bluehost, SiteGround, etc.

**Steps:**
1. Run `npm run build`
2. Open the `dist/` folder
3. Upload **EVERYTHING inside `dist/`** to your hosting's `public_html/` or `www/` folder via:
   - **FTP/SFTP** (using FileZilla, WinSCP, or Cyberduck)
   - **cPanel File Manager**
   - **Web Hosting Control Panel**

**Important:** Upload the **CONTENTS** of `dist/`, not the `dist/` folder itself.

Your files should be at:
```
public_html/
├── index.html          ← NOT public_html/dist/index.html
├── assets/
├── robots.txt
├── sitemap.xml
└── .htaccess
```

### Option 2: Netlify (Free & Easy)
1. Go to [netlify.com](https://www.netlify.com)
2. Drag and drop the `dist/` folder onto their dashboard
3. Done! You get a free URL instantly

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy automatically

### Option 4: GitHub Pages (Free)
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Point it to the `dist/` folder

---

## 🔧 Useful Commands Reference

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `npm install` | Install dependencies | First time only, or after updating code |
| `npm run dev` | Start development server | To preview locally at http://localhost:5173 |
| `npm run build` | Build for production | Before deploying to your website |
| `npm run preview` | Preview production build | Test the built version locally |

---

## 🌍 Domain Setup

### To use your own domain (e.g., homelymart.com):

1. **Purchase a domain** from:
   - GoDaddy, Namecheap, Google Domains, etc.

2. **Point domain to your hosting:**
   - Get nameservers from your web host
   - Update DNS settings in your domain registrar

3. **SSL Certificate (HTTPS):**
   - Most hosts provide free SSL (Let's Encrypt)
   - Enable it in your hosting control panel

4. **Update sitemap.xml:**
   - Open `/public/sitemap.xml`
   - Replace `https://www.homelymart.com` with your actual domain
   - Rebuild: `npm run build`

---

## ✅ Pre-Deployment Checklist

Before uploading to your host:

- [ ] Ran `npm run build` successfully
- [ ] Checked `dist/` folder contains files
- [ ] Updated sitemap.xml with your real domain
- [ ] Verified .htaccess is in the dist/ folder
- [ ] Tested locally with `npm run preview`

---

## 🆘 Troubleshooting

### "command not found: npm"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org) (LTS version)

### "npm run build" fails
**Solution:** 
```bash
# Delete node_modules and try again
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Website shows blank page after deployment
**Solutions:**
1. Check browser console for errors (F12)
2. Verify all files in `dist/` were uploaded
3. Check file permissions (should be 644 for files, 755 for folders)
4. Clear browser cache (Ctrl+Shift+R)

### Images not loading
**Solutions:**
1. Check image paths in the code
2. Verify `figma:asset/` images are in the `dist/assets/` folder
3. Check file permissions on server

### .htaccess not working
**Solution:** 
- Make sure your hosting uses Apache (not Nginx)
- Enable .htaccess in your hosting control panel
- Verify AllowOverride is set to All

---

## 📞 Your Website Details

**Store:** Homely Mart  
**Location:** Kollad, Kottayam  
**Phone:** +91 7736 095 300 | +91 0481-2340 200  
**Products:** 2500+ items  

---

## 🎯 Quick Start Summary

```bash
# 1. Unzip the code
# 2. Open terminal in the unzipped folder
# 3. Run these commands:

npm install       # Install dependencies (first time)
npm run build     # Build for production

# 4. Upload everything from dist/ folder to your web hosting
# 5. Your website is live! 🎉
```

---

## 💡 Pro Tips

1. **Keep the source code safe** - Store the original unzipped folder, not just `dist/`
2. **Test locally first** - Run `npm run dev` to test before building
3. **Update products easily** - Edit `/components/ProductGrid.tsx` and rebuild
4. **Backup regularly** - Keep copies of your `dist/` folder
5. **Monitor site** - Check Google Search Console after deployment

---

## 🔄 Making Updates

When you need to change something:

1. Edit the source files (e.g., `/components/ProductGrid.tsx`)
2. Run `npm run build` again
3. Re-upload the new `dist/` folder to your hosting
4. Clear browser cache to see changes

---

Need help? Just ask! 🚀
