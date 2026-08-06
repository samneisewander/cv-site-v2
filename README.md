# Sam Neisewander — personal website

A statically rendered personal site built with [Hugo](https://gohugo.io/) and a
custom theme, deployed to Firebase Hosting. See [DESIGN.md](DESIGN.md) for the
full design.

## Develop

Requires **Hugo** (version pinned in [.hugo-version](.hugo-version)).

```bash
hugo server      # live-reload dev server at http://localhost:1313
hugo --minify    # production build into ./public
```

## Add content

Everything is Markdown under `content/`.

- **Landing page:** edit [content/_index.md](content/_index.md).
- **New article:** `hugo new articles/my-post/index.md`, then set `draft = false`.
  Put figures (e.g. `figure0.webp`) alongside `index.md` in the same folder and
  reference them with `![alt](figure0.webp "Caption")`.

Article front matter: `title`, `description`, `date` (published), `lastmod`
(modified — read from front matter, **not** Git), `authors`, `tags`. Reading time
is computed automatically.

## Deploy

Pushing to `main` builds and deploys to Firebase Hosting via
[.github/workflows/deploy.yml](.github/workflows/deploy.yml). Pull requests get an
ephemeral preview channel.