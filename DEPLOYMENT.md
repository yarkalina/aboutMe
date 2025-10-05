# 🚀 Deployment Guide - Vercel

## Quick Deployment Steps

### 1. Push to GitHub
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/alina-portfolio.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your GitHub repository** (alina-portfolio)
5. **Vercel will automatically detect** it's a Next.js project
6. **Click "Deploy"**

### 3. Custom Domain (Optional)
- In your Vercel dashboard, go to your project
- Click "Settings" → "Domains"
- Add your custom domain (e.g., alina-iarkeeva.com)

## 🎯 What Happens Next?

- **Automatic Deployments**: Every time you push to GitHub, Vercel will automatically redeploy
- **Preview URLs**: You'll get a unique URL (e.g., alina-portfolio.vercel.app)
- **Analytics**: Track your portfolio's performance
- **SSL Certificate**: Automatic HTTPS

## 📝 Before Deploying

Make sure to update these in your code:
1. **LinkedIn URL** in `src/components/Contact.tsx` and `src/components/Footer.tsx`
2. **GitHub URL** in `src/components/Footer.tsx`
3. **Profile Photo** (if you want to add one)

## 🔧 Environment Variables (if needed)

If you add any API keys later, add them in Vercel:
1. Go to your project settings
2. Click "Environment Variables"
3. Add your variables

## 📊 Performance

Your portfolio is optimized for:
- ✅ Fast loading times
- ✅ SEO optimization
- ✅ Mobile responsiveness
- ✅ Accessibility

---

**Your portfolio will be live in minutes!** 🎉 