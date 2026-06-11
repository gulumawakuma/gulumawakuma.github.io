# Guluma Wakuma — Portfolio

Personal portfolio website for **Guluma Wakuma**, a Full-Stack & iOS Software Engineer.

**Live site:** [gulumawakuma.github.io](https://gulumawakuma.github.io)

## Features

- Responsive single-page layout with smooth section navigation
- Dark / light theme with persisted preference
- Projects, tech stack, experience, about, and contact sections
- GitHub activity stats, resume download, and social links
- Optimized images and active nav highlighting on scroll

## Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS 4**
- **Framer Motion**
- **React Router** (HashRouter)
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
