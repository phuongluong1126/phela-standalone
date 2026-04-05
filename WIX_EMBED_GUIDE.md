# How to Embed This Site in Wix

## Step 1: Deploy to Vercel (free)

1. Push this folder to a GitHub repo:
   ```bash
   cd phela-standalone
   git init
   git add .
   git commit -m "Phela standalone site"
   git remote add origin https://github.com/YOUR_USERNAME/phela-standalone.git
   git push -u origin main
   ```

2. Go to https://vercel.com and sign in with GitHub
3. Click "Import Project" → select your repo
4. Click "Deploy" — done! You'll get a URL like `https://phela-standalone.vercel.app`

## Step 2: Embed in Wix

### Option A: Full-Page Embed (recommended)
1. Open your Wix Editor
2. Go to the page where you want the content
3. Click **Add (+)** → **Embed Code** → **Embed a Site**
4. Paste your Vercel URL (e.g. `https://phela-standalone.vercel.app/san-pham`)
5. Resize the iframe to fill the page (set width: 100%, height: 100vh)
6. Repeat for each page you want to embed

### Option B: HTML iframe (more control)
1. Open your Wix Editor
2. Click **Add (+)** → **Embed Code** → **Custom Element** or **HTML iframe**
3. Paste this code:
   ```html
   <iframe
     src="https://phela-standalone.vercel.app"
     style="width: 100%; height: 100vh; border: none;"
     allow="fullscreen"
   ></iframe>
   ```
4. Adjust height as needed

### Option C: Embed specific pages
Use different URLs for different Wix pages:
- Home:     `https://YOUR-VERCEL-URL.vercel.app/`
- Products: `https://YOUR-VERCEL-URL.vercel.app/san-pham`
- About:    `https://YOUR-VERCEL-URL.vercel.app/ve-chung-toi`
- News:     `https://YOUR-VERCEL-URL.vercel.app/tin-tuc`
- Stores:   `https://YOUR-VERCEL-URL.vercel.app/cua-hang`

## Tips

- Hide Wix's own header/footer if you're using the embedded site's navigation
- Set the iframe to "Stretch to full width" in Wix
- Test on mobile — the embedded site is responsive
- You can use a custom domain on Vercel too (free)
