---
name: new-post
description: Scaffold a new bilingual blog post (zh + en) with correct MDX frontmatter. Invoke with /new-post <slug> <title>.
disable-model-invocation: false
---

Create a pair of MDX files for a new bilingual post. The user will provide a slug and title.

**File paths:**
- `src/content/posts/zh/<slug>.mdx`
- `src/content/posts/en/<slug>.mdx`

**Required frontmatter schema** (from `src/content.config.ts`):
- `title` — post title (string)
- `date` — publication date in ISO format (YYYY-MM-DD); use today's date unless specified
- `summary` — one-sentence summary of the post
- `lang` — must match the directory: `zh` for the zh file, `en` for the en file
- `draft` — set to `true` so the post is hidden until ready (defaults to `false` if omitted)

**Template for zh file:**
```mdx
---
title: "<Chinese title>"
date: YYYY-MM-DD
summary: "<Chinese summary>"
lang: zh
draft: true
---

<!-- Write content here -->
```

**Template for en file:**
```mdx
---
title: "<English title>"
date: YYYY-MM-DD
summary: "<English summary>"
lang: en
draft: true
---

<!-- Write content here -->
```

After creating the files, tell the user:
- The two file paths created
- That `draft: true` is set — change to `draft: false` or remove the field to publish
- The URL each post will have once published: `/{lang}/posts/<slug>`
