# rehype-default-code-lang

Add a default programming language to your code tags.

> [!TIP]
> This plugin is ideal for migrating to Shiki, as `@shikijs/rehype` does not style code blocks without an explicit language. This plugin addresses that issue.

## Features

- Automatically adds a default language class to `<code>` tags that lack a language specification.
- Facilitates the integration of syntax highlighting libraries like Shiki, especially when existing content lacks language annotations.

## Installation

```bash
pnpm install rehype-default-code-lang
```

## Usage

```javascript
import { rehypeDefaultCodeLang } from 'rehype-default-code-lang'
```
