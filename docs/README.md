# Nebari MLflow Pack Documentation

This directory contains the [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) site for the Nebari MLflow Pack.

## Prerequisites

- Node.js `>= 22` (enforced by the `engines` field in `package.json`)
- npm (bundled with Node.js)

## Install

```bash
cd docs
npm ci
```

## Local development

```bash
npm run dev
```

Starts the Astro dev server with hot reload on http://localhost:4321/.

## Production build

```bash
npm run build
```

Emits static files to `docs/dist/`.

## Preview the production build

```bash
npm run preview
```

Serves the contents of `docs/dist/` locally so you can verify the production output.

## Unit tests

```bash
npm test
```

Runs the vitest suite (currently covers the `remark-base-links` plugin).

## Link checking

```bash
bash ../scripts/check-links.sh
```

Builds the site and verifies every internal link/image resolves to a real file under `docs/dist/`. To check with the production base path: `BASE=/mlflow-pack/ bash ../scripts/check-links.sh`.

## Content

Pages live in `src/content/docs/`. Each `.md` or `.mdx` file becomes a page. The sidebar is configured in `astro.config.mjs` under `starlight.sidebar`.

## CI

The [`Docs` workflow](../.github/workflows/docs.yml) builds, tests, and link-checks the site on every pull request and push to `main`, and deploys it to [Cloudflare Pages](https://pages.cloudflare.com). Pull requests get a preview URL posted as a comment.
