# Moon's World

Website for Moon's World: coaching for Class XI–XII, university admission (Bankura & Durgapur) and academic consultancy (B.Tech, M.Tech, Ph.D).

Built with Next.js. Every page is generated as static HTML, so it runs fast and costs nothing to host on Vercel.

## Edit content
All text, contact details, services and universities are in **`data/site.js`**.

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com, click **Add New → Project** and import the repo. Vercel detects Next.js automatically, so you don't need to change any settings.
3. Optional: set the `NEXT_PUBLIC_SITE_URL` environment variable to your custom domain (used for social-share previews).

Or from the terminal: `npx vercel`
