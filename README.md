# vibe-coding-diary

A bilingual (Chinese/English) personal blog built with Astro, recording a vibe coding journey by the West Lake.

> 西湖柳岸，代码随风生长。记录一段在湖边 vibe coding 的旅程。

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v6 (static output)
- **Content**: MDX with Astro Content Collections
- **UI**: [React](https://react.dev/) for interactive components
- **i18n**: Built-in Astro i18n (zh / en), default locale: zh
- **Feeds**: RSS via `@astrojs/rss`
- **SEO**: Sitemap via `@astrojs/sitemap`
- **Testing**: Playwright (e2e)
- **Language**: TypeScript

## Project Structure

```
src/
├── components/       # Astro & React components
├── content/posts/    # Blog posts (zh/ & en/)
├── i18n/             # i18n translations & utilities
├── layouts/          # Base & Post layouts
├── pages/            # Route pages (zh/, en/)
└── styles/           # Global CSS
design/               # HTML design mockups
e2e/                  # Playwright e2e tests
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run check

# Run e2e tests
npm run test:e2e
```

## License

MIT
