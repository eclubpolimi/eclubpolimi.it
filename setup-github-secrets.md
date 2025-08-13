# 🚨 CRISIS MODE FIX - Vercel Environment Variables Setup

## Your site is deployed on Vercel via GitHub Actions, so you need to set environment variables in BOTH places:

### 1. GitHub Repository Secrets (for GitHub Actions build)

Go to: https://github.com/eclubpolimi/eclubpolimi.it/settings/secrets/actions

Add these secrets by clicking "New repository secret":

**NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT**
```
https://graphql.contentful.com/content/v1/spaces/b9kw9yhwywsl/environments/master
```

**NEXT_PUBLIC_CMS_ACCESS_TOKEN**
```
wgKnrYfqcWciYTkzILWxU-Ob3PkvGvOMm3IEzGHE_yI
```

### 2. Vercel Environment Variables (for Vercel deployment)

Go to your Vercel dashboard: https://vercel.com/dashboard

1. Find your `eclubpolimi.it` project
2. Go to **Settings** → **Environment Variables**
3. Add these variables for **Production**, **Preview**, and **Development**:

**NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT**
```
https://graphql.contentful.com/content/v1/spaces/b9kw9yhwywsl/environments/master
```

**NEXT_PUBLIC_CMS_ACCESS_TOKEN**
```
wgKnrYfqcWciYTkzILWxU-Ob3PkvGvOMm3IEzGHE_yI
```

**CMS_GRAPHQL_ENDPOINT**
```
https://graphql.contentful.com/content/v1/spaces/b9kw9yhwywsl/environments/master
```

**CMS_ACCESS_TOKEN**
```
wgKnrYfqcWciYTkzILWxU-Ob3PkvGvOMm3IEzGHE_yI
```

### 3. Redeploy

After setting up both:
1. Go to Vercel dashboard and trigger a redeploy
2. OR merge your changes to `master` to trigger GitHub Actions

## What I Fixed:

1. ✅ Added NEXT_PUBLIC_ environment variables to GitHub Actions workflow
2. ✅ Reverted Next.js config (Vercel handles deployment automatically)
3. ✅ Created this guide for proper Vercel setup

The key issue: **NEXT_PUBLIC_** prefixed environment variables are required for client-side access to Contentful in the browser! 🚀
