# Repository Guidelines

## Project Structure & Module Organization

This is a Chinese-language VitePress knowledge base. Published content lives in `docs/`, grouped into `guide/`, `method/`, `prompts/`, `tools/`, `pipelines/`, `cases/`, `templates/`, and the public `lab/` workspace. Navigation, sidebars, metadata, and the deployment base are in `docs/.vitepress/config.mts`; theme overrides are in `docs/.vitepress/theme/`. Put static files in `docs/public/` or a section-level `assets/` directory. Unpublished design proposals belong in `specs/`. `automation/gemini/` is a separate Playwright utility with its own dependencies.

Do not edit or commit generated `docs/.vitepress/dist/`, `docs/.vitepress/cache/`, or `node_modules/` content.

## Build, Test, and Development Commands

- `npm ci`: install dependencies from `package-lock.json` (CI uses Node 20).
- `npm run dev`: start the VitePress development server with hot reload.
- `npm run build`: build the site and fail on invalid internal links; run this before every PR.
- `npm run preview`: serve the completed build for final navigation and visual checks.
- `cd automation/gemini && npm ci`: install optional automation dependencies; scripts such as `node run.js` require a local Chrome session.

## Coding Style & Naming Conventions

Follow existing Chinese terminology and the skeletons in `docs/templates/`. Use one H1, logical H2/H3 sections, language-tagged code fences, and root-relative links such as `/tools/gemini-video-duration`. Name articles with lowercase kebab-case, for example `perfume-key-visual.md`, then add them to the matching sidebar in `config.mts`.

Use two-space indentation in TypeScript, JavaScript, CSS, and YAML. Preserve local quote and semicolon style. No formatter or linter is configured; review diffs manually.

## Testing Guidelines

There is no automated test suite or coverage target. The required check is `npm run build`, which validates dead links. For navigation, theme, or asset changes, also run `npm run preview` and inspect affected pages at desktop and mobile widths. The placeholder automation test command intentionally fails and is not a validation step.

## Commit & Pull Request Guidelines

Recent history uses Conventional Commit prefixes with concise Chinese summaries, chiefly `docs: ...` and `chore: ...`. Keep each commit limited to one content or tooling concern. PRs should explain the purpose, list affected sections, confirm `npm run build`, and link any relevant issue. Include before/after screenshots for theme, layout, or navigation changes.

## Security & Public Content

Treat everything under `docs/`, including `docs/lab/`, as public. Remove client secrets, personal data, credentials, and unpublished commercial details before committing. Never commit authenticated browser profiles or session data from automation runs.
