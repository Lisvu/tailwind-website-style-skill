---
name: tailwind-website-style
description: Use this skill when generating frontend pages, dashboards, landing pages, login pages, personal sites, or admin systems that should match this project's black starfield Tailwind visual style with white typography, pale-blue accents, diagonal page transitions, and folded hover cards.
---

# Tailwind Website Style Skill

## When to use

Use this skill when the user asks for:

- "使用这个网站风格"
- "使用 tailwind-website-style"
- A black starry Tailwind UI
- A futuristic, minimal, dark frontend page
- A login page, dashboard, landing page, personal site, or management system matching this project's style

Do not copy any third-party brand, text, logo, or copyrighted page content. Reuse only the design language.

## Visual style

- Pure black space background with many scattered white stars.
- Use many small stars. The starfield should feel populated but not noisy.
- Stars must be animated. Use layered, irregular movement instead of static dots.
- Stars must be irregularly positioned and drift in multiple directions; avoid grid-like placement and top-to-bottom rain motion.
- Main content floats directly on the black starfield. Avoid frosted glass cards and large translucent background panels.
- Typography is mostly white, with pale-blue highlights for primary headings or active states.
- UI controls use thin white borders, black fills, rounded pills, and bold text.
- The look is futuristic, quiet, cosmic, and minimal, not colorful SaaS or generic neon cyberpunk.

## Color system

Prefer these Tailwind colors:

- Background: `bg-black`, `bg-[#05030f]`
- Text: `text-white`, `text-white/70`, `text-white/50`
- Primary accent: `text-sky-200`, `text-cyan-100`, `bg-cyan-300`
- Borders: `border-white`, `border-white/30`, `border-white/15`
- Danger: `text-rose-100`, `bg-rose-300/10`, `border-rose-300/40`

Avoid large gradients, glassmorphism panels, heavy shadows, and bright multicolor palettes.

## Typography

- Use a simple system or Chinese-friendly sans-serif stack: `Arial, "Microsoft YaHei", sans-serif`.
- Headings should be bold and compact:
  - Hero title: `text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight`
  - Page title: `text-2xl font-black tracking-tight text-sky-200`
  - Card title: `text-4xl font-black leading-none`
- Body text should be readable and slightly muted: `text-white/70 font-semibold leading-8`.

## Layout rules

- Use a full-screen app shell:
  - `relative min-h-screen overflow-hidden bg-[#05030f] px-4 py-5 text-white sm:px-6`
- Add a fixed starfield layer behind content:
  - `pointer-events-none fixed inset-0 bg-black`
- Keep page content in a `relative z-10 mx-auto max-w-7xl` frame.
- Keep major content directly over the star background instead of placing everything inside glass panels.
- For two-page experiences, use a horizontal slide track with a fixed viewport:
  - Viewport: `h-[calc(100vh-112px)] overflow-hidden touch-none`
  - Track: `flex transition-transform duration-700 ease-out`
  - Page: `h-[calc(100vh-112px)] min-w-full overflow-hidden`
- Page switching should be triggered by diagonal gestures, not normal vertical scroll.

## Starfield background

Use CSS radial-gradient layers. Stars should not look like a strict grid. Use many layers with different `circle at X% Y%`, background sizes, opacity, and animation durations.

Requirements:

- Include many small stars, mostly 0.45px to 1.2px.
- Include a few larger bright stars around 1.4px to 1.8px.
- Every star layer must move.
- Movement should be irregular: different layers should drift by different X/Y offsets and use different durations.
- Do not use shooting stars unless explicitly requested.
- Do not animate only vertically; avoid background-position values that move straight top-to-bottom.

Pattern:

```css
.space-background {
  @apply pointer-events-none fixed inset-0 bg-black;
  background:
    radial-gradient(circle at 13% 24%, rgba(255,255,255,.9) 0 1px, transparent 1.7px),
    radial-gradient(circle at 61% 78%, rgba(255,255,255,.75) 0 .8px, transparent 1.5px),
    radial-gradient(circle at 84% 37%, rgba(255,255,255,.68) 0 1.2px, transparent 2px),
    radial-gradient(circle at 31% 43%, rgba(255,255,255,.55) 0 .45px, transparent .9px),
    radial-gradient(circle at 69% 9%, rgba(255,255,255,.58) 0 .5px, transparent .95px),
    #000;
  background-size: 263px 241px, 331px 293px, 397px 347px, 149px 131px, 167px 139px, auto;
  animation: movingStarsNear 48s ease-in-out infinite alternate;
}
```

Make several drift animations with small non-linear offsets. Example:

```css
@keyframes movingStarsNear {
  0% { background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0; }
  33% { background-position: 20px -10px, -18px 12px, 14px 8px, 7px 12px, -9px 6px, 0 0; }
  66% { background-position: -12px 22px, 24px -16px, -18px 10px, 10px -7px, -8px -11px, 0 0; }
  100% { background-position: 18px 14px, -26px -20px, 20px -12px, -6px 9px, 12px -4px, 0 0; }
}
```

## Components

### Navigation

Use text-first navigation, no logo unless requested.

```jsx
<nav className="flex flex-wrap items-center gap-4 px-5 py-4">
  <h1 className="text-2xl font-black tracking-tight text-sky-200">页面标题</h1>
  <div className="ml-auto flex gap-2">
    <button className="rounded-full bg-white px-4 py-2 text-sm font-black text-zinc-950">当前页</button>
    <button className="rounded-full px-4 py-2 text-sm font-black text-white/60 hover:text-white">其他页</button>
  </div>
</nav>
```

### Buttons

Primary:

```html
<button className="rounded-full bg-cyan-300 px-4 py-2 font-black text-zinc-950 transition hover:-translate-y-0.5">
  确认
</button>
```

Secondary:

```html
<button className="rounded-full border border-white bg-black px-4 py-2 font-black text-white transition hover:bg-white hover:text-zinc-950">
  取消
</button>
```

### Inputs

```html
<input className="w-full rounded-2xl border border-white bg-black px-3 py-3 font-bold text-white outline-none placeholder:text-white/30 focus:border-cyan-200" />
```

### Folded hover cards

Use for featured records, profile cards, service cards, or preview panels.

- Default: cards are absolutely stacked with small top offsets, slight rotations, and decreasing scale.
- Hover on the whole stack expands cards downward.
- Details are hidden with `max-h-0 opacity-0` and shown on stack hover.

Key classes:

```css
.card-stack { @apply relative flex min-h-[360px] flex-col; perspective: 1200px; }
.stack-card { @apply absolute left-0 right-0 overflow-hidden rounded-[28px] border border-white bg-black px-5 py-4 text-white transition-all duration-500 ease-out; }
.card-stack:hover .stack-card { @apply border-cyan-200; min-height: 236px; }
```

### Tables and admin surfaces

- Use black backgrounds, white borders, and white/cyan text.
- Keep table in an internal scroll area instead of letting the page scroll:
  - `max-h-[calc(100vh-330px)] w-full overflow-auto`
- Header cells: `font-black text-cyan-100`
- Hover rows: `bg-white/5`

## Motion rules

- Star motion: slow, irregular drift; 40-90s durations.
- Page transition: horizontal slide, plus optional brief "previous page shrinks to top-left" animation.
- Hover: subtle `hover:-translate-y-0.5` for buttons and `hover:-translate-y-1` for cards.
- Avoid bouncy animations, large parallax jumps, and vertical page floating.

## Responsive design

- Use `max-w-7xl`, `px-4 sm:px-6`, and CSS grid.
- Desktop hero can be `grid-template-columns: 1fr 360px`.
- Mobile should stack content and keep cards readable.
- Lock full-screen slide layouts carefully; if content is tall, give tables or panels their own scroll area.

## Code requirements

- Use Tailwind CSS.
- It is acceptable to write Tailwind via `@apply` in CSS files when component class names are clearer.
- Prefer semantic React components and accessible labels.
- Keep styles separated into CSS files and import them.
- Page must be responsive.
- Do not generate or copy third-party trademarks, logos, exact text, or copyrighted layout content.
- Reuse this visual language, not the reference site's identity.
