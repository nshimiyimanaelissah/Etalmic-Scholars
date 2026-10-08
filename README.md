# Etalmic Scholars

A STEM scholarship discovery platform for high school learners. It combines AI-assisted scholarship analysis, social/feed monitoring, real-time alerts, and a set of curated programs and campaigns.

## Features

- Login and dashboard experience
- Scholarship board for STEM and robotics learning opportunities
- AI summarizer using Gemini-compatible API fallback
- Real-time updates via server-sent events
- Programs, campaigns, and ministry tracking pages
- Responsive landing page inspired by educational opportunity discovery portals

## Local setup

1. Install dependencies:
   npm install
2. Create a `.env.local` file using `.env.example` as a template.
3. Run the app:
   npm run dev
4. Open http://localhost:3000

## Environment variables

- GEMINI_API_KEY: your Google Gemini API key (optional; app will fall back to demo data)
- NEXT_PUBLIC_APP_URL: base URL of the app

## Demo login

- Email: demo@etalmic.com
- Password: Password123
