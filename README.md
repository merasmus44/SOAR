# Soar

Soar is our Walnut Hills High School Programming Club project for Tech Olympics. The idea is to make a mobile-friendly website with daily activities, games, and ways to connect with other people.

This repository is the starting point for the project. It has a Next.js website and a FastAPI server. The pages and API routes are in place so we can build features one at a time.

## Routes

| Page | URL | What it does now |
| --- | --- | --- |
| Home | `/` | Project name and link to the dashboard |
| Login | `/login` | Demo sign-in button; no account is created |
| Dashboard | `/dashboard` | Links to the main sections |
| Settings | `/settings` | Empty page for future settings |
| Stats | `/stats` | Empty page for future stats |
| Quests | `/quests` | Link to an example quest page |
| Quest details | `/quest/[slug]` | Shows the quest ID from the URL |
| Leaderboard | `/leaderboard` | Empty page for the leaderboard |
| Polls | `/polls` | Empty page for polls |

`[slug]` is a route parameter. For example, `/quest/first-quest` opens the quest page with `first-quest` as its ID.

## What the code does

The website is in `frontend/`. It uses the Next.js App Router, so each folder inside `frontend/src/app/` becomes a URL. A `page.tsx` file provides what that URL displays. Shared page layout and navigation are in `frontend/src/components/`.

The API is in `backend/`. FastAPI maps Python functions to URLs. Right now it has a home route, a health route, and a route that returns example quests. The website and API run separately during development.

The login button is only a demo interaction in the browser. It does not sign a user in. Clerk, Supabase, image uploads, and AI checks are not connected yet.

## Run the website

Install Node.js 20.9 or newer, then run these commands in PowerShell:

```powershell
cd frontend
npm install
npm run dev
```

Open <http://localhost:3000>.

## Run the API

Install Python 3.10 or newer. In a second PowerShell window, run:

```powershell
cd backend
py -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

The API is at <http://127.0.0.1:8000>. Its interactive documentation is at <http://127.0.0.1:8000/docs>.

## Folders

```text
frontend/   Website pages, navigation, and styles
backend/    FastAPI application and Python dependencies
```
