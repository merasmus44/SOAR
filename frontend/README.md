# Website

This folder contains the Soar website. It uses Next.js and TypeScript.

## Run it

```powershell
npm install
npm run dev
```

Open <http://localhost:3000>.

## Pages

- `/` — home
- `/login` — Google sign-in through Supabase Auth
- `/dashboard` — section links
- `/settings` — settings page
- `/stats` — stats page
- `/quests` — quests page
- `/quest/[slug]` — quest details route
- `/leaderboard` — leaderboard page
- `/polls` — polls page

Each route has a `page.tsx` file in `src/app/`. Shared layout and navigation components are in `src/components/`.

## Google sign-in setup

1. Copy `.env.example` to `.env.local`.
2. In Supabase, open **Project Settings → API** and copy the **Project URL** and **anon/public key** into `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. In Supabase, open **Authentication → Sign In / Providers → Google** and enable Google. Copy the callback URL shown on that page.
4. In Google Cloud, create a **Web application** OAuth client. Add `http://localhost:3000` as an authorized JavaScript origin and the Supabase callback URL as an authorized redirect URI. Add the Google client ID and secret to the Supabase Google provider settings.
5. In Supabase **Authentication → URL Configuration**, set the local Site URL to `http://localhost:3000` and allow `http://localhost:3000/auth/callback`.
6. Restart the website with `npm run dev`.

The login page uses Google OAuth through Supabase. The dashboard checks the Supabase session on the server and app routes are protected by Next.js middleware. Sign-out clears the Supabase session. Only the public anon key belongs in `.env.local`; never put a Supabase service-role key or Google client secret in the website.
