# Guluma Wakuma — Portfolio

Personal portfolio website for **Guluma Wakuma**, a Full-Stack & iOS Software Engineer.

**Live site:** [gulumawakuma.github.io](https://gulumawakuma.github.io)

## Features

- Responsive single-page layout with smooth section navigation
- Dark / light theme with persisted preference
- Projects, tech stack, experience, about, and contact sections
- GitHub activity stats, resume download, and social links
- Contact form (Web3Forms) — real email delivery when configured
- Optimized images and active nav highlighting on scroll

## Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS 4**
- **Framer Motion**
- **React Router** (BrowserRouter)
- **Sonner** (toast notifications)
- **Lucide React** (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) to deliver messages to your inbox.

1. Go to [web3forms.com](https://web3forms.com) and create a free access key with **gulumawakuma3@gmail.com**
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Paste your access key into `.env`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
4. Restart the dev server if it is already running (`npm run dev`)

The access key is injected at **build time**, so set `.env` before running `npm run build` or `npm run deploy`.

Without the key, the form shows an error toast and visitors can still reach you via email or WhatsApp.

## Book a Call Setup

Add a [Cal.com](https://cal.com) or [Calendly](https://calendly.com) link to show **Schedule a 15-min chat** next to **Hire Me** in the navbar.

1. Create a free 15-minute event on Cal.com or Calendly
2. Add the booking URL to `.env`:
   ```
   VITE_BOOKING_URL=https://cal.com/yourname/15min
   ```
3. Restart the dev server and rebuild before deploy

The button is hidden until `VITE_BOOKING_URL` is set.

## Sharing & Open Graph

Case study links use clean URLs (no hash) so LinkedIn and other platforms can preview them correctly:

- `https://gulumawakuma.github.io/case-studies/inisra`
- `https://gulumawakuma.github.io/case-studies/ora`

Each case study gets its own title, description, and image at **build time** (`scripts/generate-static-meta.mjs`). After deploy, paste a case study URL into [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to refresh the preview cache.

## Deploy to GitHub Pages

```bash
npm run deploy
```

Ensure GitHub Pages is enabled for this repository and points to the `gh-pages` branch.

## Project Structure

```
src/
├── components/
│   ├── portfolio/   # Page sections (Hero, Projects, About, etc.)
│   └── ui/          # Reusable UI (Button, ThemeToggle, ScrollToTop)
├── context/         # Theme provider
├── hooks/           # useTheme, useActiveSection
├── pages/           # Home page
└── lib/             # Utilities, 404 page
public/
├── hero.jpg         # Hero portrait (optimized)
├── resume.pdf       # Downloadable resume
└── favicon.png      # Site favicon
```

## Contact

- **Email:** gulumawakuma3@gmail.com
- **GitHub:** [gulumawakuma](https://github.com/gulumawakuma)
- **LinkedIn:** [guluma-wakuma-olansa](https://www.linkedin.com/in/guluma-wakuma-olansa)

## License

Private — © Guluma Wakuma. All rights reserved.
