# Souvik Samanta — Professional Portfolio

A responsive portfolio for an experienced software engineer working in applied AI, document intelligence, and cloud engineering. Content is based on the November 2026 CV and verified public GitHub repositories.

## Run locally

Use Node.js 24 (minimum 22.12) and npm. No API keys are needed.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the `dist/` directory to a static host. Assets use relative paths so both root domains and GitHub Pages project paths work. Existing `#/home`, `#/projects`, `#/experience`, `#/education`, `#/opensource`, and `#/contact` bookmarks map to the new sections.

For Docker, run `docker compose up --build` and visit port 3001. The multi-stage image serves the compiled site with nginx; it does not run the development server. Docker could not be executed in the authoring environment because it is not installed.

## Active source

- `src-next/App.jsx`: sections, responsive menu, project filtering, accessible native case-study dialogs, and contact interactions.
- `src-next/content.js`: profile links, professional case studies, public repositories, and capabilities.
- `src-next/styles.css`: responsive visual system and reduced-motion support.
- `public-next/`: CV download, favicon, social image, and robots rules.
- `index.html`: metadata and Person structured data.
- `tests/`: component and real-browser tests.
- `docs/SOURCES.md`: factual provenance and content boundaries.

In the original checkout, `src/`, `public/`, and `images/` retain the previous design as a migration reference. Vite uses only `src-next/` and `public-next/`; legacy files are excluded from the production build and clean source deliverable. The old GitHub fetcher is retired and requires dependencies that are intentionally no longer installed. Edit `content.js` to maintain public projects.

## Content and privacy

Only the three reviewed public repositories are featured. Private repositories, client data, employer source code, and forks presented as original work are excluded. Professional TCS case studies use CV/public-profile summaries. The 100% extraction result is explicitly qualified as a 10-record experiment.

The current CV is included as a local download; email contact uses a mailto link, and there is no pretend contact form. LinkedIn could not be read because its server blocked retrieval, so the link in the supplied CV is used. No ad scripts, analytics, backend keys, or runtime GitHub tokens are included. Google Fonts supplies the typography with local sans-serif fallbacks.

## Tests

```sh
npm test
npm run test:e2e
npm run check
```

Playwright uses Google Chrome (installed separately) and validates the production build at desktop, 390px, and 320px widths. On CI, Chrome is installed with `npx playwright install --with-deps chrome`. See `TEST-CASES.md` for coverage and limits. The GitHub Actions workflow performs installation, tests, build, browser checks, and failure-report upload.

Before a public domain launch, set `og:url`, canonical URL, and the absolute `og:image` to that deployment's actual HTTPS origin. The private preview package has its own origin applied. Check the CV and any employer-related descriptions when changing what is public.

## Credential remediation

The original repository committed a GitHub token in `env.example`. The current example has been sanitized, but the owner must revoke the original token; removing a value does not revoke it or remove it from Git history. Research also found a hardcoded Stripe test secret in Gruham's payment function; rotate it in that separate project. No credential values are copied into this website or documentation.

## License

The repository's Apache-2.0 license is retained.
