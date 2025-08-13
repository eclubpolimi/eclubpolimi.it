# 🚨 CRISIS MODE FIX - GitHub Secrets Setup

## You need to add these secrets to your GitHub repository:

1. Go to: https://github.com/eclubpolimi/eclubpolimi.it/settings/secrets/actions

2. Click "New repository secret" and add each of these:

### Required Secrets:

**NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT**
```
https://graphql.contentful.com/content/v1/spaces/b9kw9yhwywsl/environments/master
```

**NEXT_PUBLIC_CMS_ACCESS_TOKEN**
```
wgKnrYfqcWciYTkzILWxU-Ob3PkvGvOMm3IEzGHE_yI
```

**CMS_GRAPHQL_ENDPOINT** (if not already set)
```
https://graphql.contentful.com/content/v1/spaces/b9kw9yhwywsl/environments/master
```

**CMS_ACCESS_TOKEN** (if not already set)
```
wgKnrYfqcWciYTkzILWxU-Ob3PkvGvOMm3IEzGHE_yI
```

## After adding the secrets:

1. Go to Actions tab: https://github.com/eclubpolimi/eclubpolimi.it/actions
2. Click "Deploy master" workflow
3. Click "Run workflow" to trigger a new deployment

## What I Fixed:

1. ✅ Added NEXT_PUBLIC_ environment variables to GitHub Actions
2. ✅ Configured Next.js for static export (output: 'export')
3. ✅ Set custom build directory to match your FTP upload
4. ✅ Added image optimization settings for static export

Your images will work after you add the secrets and redeploy! 🚀
