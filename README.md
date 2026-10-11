# ABOOWE storefront v2

Self-contained Next.js 14 site. No environment variables, no external services, no build-time network calls.

## Deploy
    git init && git add . && git commit -m "ABOOWE v2"
    git remote add origin <repo-url> && git push -u origin main
In Vercel: Add New > Project > import the repo > Deploy (framework auto-detected as Next.js). Then add aboowe.com under Domains.

## Edit
- `lib/config.js`: contact email and an optional payment link (Stripe/PayPal/Shopify link) that shows a "Pay now" button in the cart.
- `lib/products.js`: all 20 products (title, price, colours, description, sizes).
- `components/Mockup.js`: product illustrations. Replace with real Printful mockup images when ready.
- `app/about/page.js`: story, shipping and returns copy.

## Orders
Without a payment provider, the cart sends the order as an email request to the address in config. Paste a payment link in `lib/config.js` to take payment online.
