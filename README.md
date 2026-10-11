# Bangla News 24

Bangla News 24 is a demo online newspaper platform built with **Next.js**. It fetches news from an external API and allows users to browse news previews by category and view detailed news articles.

## Live Demo

[Visit the Live Website](https://bangla-news-24-js4q.vercel.app/)

## Features

- **Category Navigation** — The navbar contains different news categories, allowing users to browse news from a specific category.
- **News Homepage** — Displays news previews from different categories in an organized layout.
- **News Cards** — Each news card includes the news image, title, and a short description.
- **News Details** — Users can click on a news preview to open the details page, where they can read the full news article and view the relevant image.
- **News Marquee** — Displays selected news headlines in a scrolling marquee.
- **Authentication** – Allows users to create an account and sign in with email and password, Google, or GitHub.
- **Protected Routes** – Only authenticated users can access the news detail pages and profile page.
## Project Structure

```text
bangla-news-24/
├── .gitignore
├── .env
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── logo.webp
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── my-profile/
│   │   │   │   └── page.tsx
│   │   │   ├── signin/
│   │   │   │   ├── loading.tsx
│   │   │   │   └── page.tsx
│   │   │   └── signup/
│   │   │       ├── loading.tsx
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.ts
│   │   ├── category/
│   │   │   ├── [categoryId]/
│   │   │   │   └── page.tsx
│   │   │   └── not-found.tsx
│   │   ├── news/
│   │   │   ├── [newsId]/
│   │   │   │   └── page.tsx
│   │   │   └── not-found.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── logo.webp
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── MainNews.tsx
│   │   ├── Marquee.tsx
│   │   ├── MostRead.tsx
│   │   ├── NavLinks.tsx
│   │   ├── NewsCard.tsx
│   │   └── UserInfo.tsx
│   ├── lib/
│   │   ├── auth-client.ts
│   │   └── auth.ts
│   ├── proxy.ts
│   └── types/
│       └── news.types.ts
└── README.md
```

## Technologies

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**
- **Better Auth**
- **MongoDB**

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/rezasdsju/bangla-news-24.git
```

### Navigate to the Project Directory

```bash
cd bangla-news-24
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.