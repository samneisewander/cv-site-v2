+++
title = "In Praise of Static Sites"
description = "Why a pile of pre-rendered HTML is still the most durable way to publish on the web."
date = 2026-03-15T10:00:00-05:00
lastmod = 2026-03-15T10:00:00-05:00
authors = ["Sam Neisewander"]
tags = ["web", "hugo"]
draft = false
+++

There's a quiet satisfaction in a website that is just files. No database to back
up, no server process to keep alive, no runtime to patch at 2am.

## What "static" buys you

- **Durability.** Pre-rendered HTML keeps working long after the tooling that
  produced it is gone.
- **Speed.** There's nothing to compute per request — the CDN just serves bytes.
- **Security.** No application server means a dramatically smaller attack surface.

## The build step

Everything is decided at build time. A simple shell invocation produces the whole
site into `public/`:

```bash
hugo --minify
firebase deploy --only hosting
```

## The trade-off

You give up per-request dynamism. For a personal site, that's not a loss — it's
the entire point.
