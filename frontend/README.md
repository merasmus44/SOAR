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
- `/login` — demo sign-in button
- `/dashboard` — section links
- `/settings` — settings page
- `/stats` — stats page
- `/quests` — quests page
- `/quest/[slug]` — quest details route
- `/leaderboard` — leaderboard page
- `/polls` — polls page

Each route has a `page.tsx` file in `src/app/`. Shared layout and navigation components are in `src/components/`.

The sign-in button only changes the page to show a demo message. It does not connect to an account service.
