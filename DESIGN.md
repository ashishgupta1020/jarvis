# Jarvis — Daily Dashboard: Design Plan

## Vision

A premium couples daily dashboard — bills, todos, reminders, news, weather. Feels like Notion meets Linear meets a beautiful weather app. Dark-first, warm, elegant.

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | File-based routing + API route handlers ready for Phase 2 |
| Styling | Tailwind CSS + CSS variables | Design tokens via CSS vars, utilities via Tailwind |
| Components | shadcn/ui (owned, customized) | Accessible primitives you control — the Linear/Vercel approach |
| Animation | Framer Motion | `AnimatePresence`, `layoutId`, spring-based interactions |
| State | Zustand | Lightweight slices that swap easily for API hooks in Phase 2 |
| Icons | Lucide React | Thin-weight, consistent, ships with shadcn |
| Font | Geist Variable | Clean grotesque, excellent at data density and hero display sizes |

---

## Design System

### Color Palette (dark-first, warm neutrals, violet accent)

```css
--bg-base:        #0C0C0E   /* near-black, warm undertone */
--bg-surface:     #141416   /* card backgrounds */
--bg-elevated:    #1C1C1F   /* hover states, modals */
--bg-overlay:     #242428   /* dropdowns, tooltips */

--border-subtle:  #2A2A2F   /* card edges, dividers */
--border-default: #3A3A42   /* interactive element outlines */

--text-primary:   #F2F2F3
--text-secondary: #8A8A94
--text-tertiary:  #55555E

--accent-primary: #7C6AF7   /* violet */
--accent-glow:    #7C6AF720 /* 12% opacity glow */
--accent-muted:   #2D2844   /* accent-tinted surface */

--color-success:  #4ADE80
--color-warning:  #FBBF24
--color-danger:   #F87171
--color-info:     #60A5FA
```

### Typography

- Font: Geist Variable (headings + body), Geist Mono (amounts, dates)
- Scale: xs(11px) → sm(13px) → base(15px) → lg(17px) → xl(20px) → 2xl(28px) → 3xl(48px) → 4xl(80px)
- Weights: 400 body, 500 labels, 600 titles, 700 display only
- Letter spacing: -0.02em on lg and above

### Spacing

- 8-point grid. All values are multiples of 4px/8px.
- Card padding: 24px. Section gap: 16px. Dashboard gutter: 24px.
- Border radius: sm(6px), md(10px), lg(16px), xl(24px), full(9999px)

---

## Layout Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│  TOPBAR: Live clock · Good morning, [Name] · [ His | Hers | Both ]│
├──────────┬───────────────────────────────────────────────────────┤
│ SIDEBAR  │  ┌────────────────────┐  ┌──────────────────────────┐ │
│ (72px    │  │  WEATHER HERO      │  │  BILLS OVERVIEW          │ │
│ icon nav)│  │  time-of-day grad  │  │  total due, line items   │ │
│          │  │  huge temp display │  │  urgency color coding    │ │
│          │  │  5-day strip       │  └──────────────────────────┘ │
│          │  └────────────────────┘  ┌──────────────────────────┐ │
│          │                          │  REMINDERS               │ │
│          │                          │  countdown cards         │ │
│          │  ┌─────────────────────────────────────────────────┐ │
│          │  │  TODOS  (Shared col | His/Hers col)              │ │
│          │  │  animated checkboxes, inline add                 │ │
│          │  └─────────────────────────────────────────────────┘ │
│          │  ┌─────────────────────────────────────────────────┐ │
│          │  │  NEWS FEED  (horizontal scroll cards)           │ │
│          │  └─────────────────────────────────────────────────┘ │
└──────────┴───────────────────────────────────────────────────────┘
```

### Section Rationale

- **Weather dominates left (60%)** — emotional anchor, time-of-day gradient sets the mood
- **Bills (40% right)** — information-dense: total owed, calendar bar, urgency line items
- **His/Hers/Both toggle** — personalizes todos and reminders without separate logins
- **Todos** — highest-interaction zone, animated checkboxes, Framer Motion list transitions
- **News** — horizontal scroll at the bottom, scannable without overwhelming

### Weather Gradients (by time of day)

| Period | Gradient |
|---|---|
| Dawn 5–8am | Peach → rose → lavender |
| Morning 8–12pm | Sky blue → soft blue |
| Afternoon 12–5pm | Deep blue → teal |
| Dusk 5–8pm | Amber → orange → deep purple |
| Night 8pm–5am | Deep navy → near-black |

---

## Component Inventory

### Design System Primitives (`components/ui/`)
`Card` · `Badge` · `Button` · `Checkbox` (animated) · `Avatar` · `ProgressBar` · `Skeleton` · `Tooltip` · `Divider` · `IconButton`

### Layout (`components/layout/`)
`AppShell` · `Sidebar` · `Topbar` · `DashboardGrid` · `PersonToggle`

### Widgets (`components/widgets/`)
- **weather/** — `WeatherWidget`, `ForecastStrip`
- **bills/** — `BillsWidget`, `BillLineItem`, `BillsCalendarBar`
- **todos/** — `TodosWidget`, `TodoItem`, `TodoAddInput`
- **reminders/** — `RemindersWidget`, `ReminderCard`
- **news/** — `NewsWidget`, `NewsCard`

### Shared (`components/shared/`)
`TimeDisplay` · `DayGreeting` · `MotionConfig`

---

## File Structure

```
/jarvis
├── app/
│   ├── layout.tsx                # Root: ThemeProvider, AppShell
│   ├── page.tsx                  # Home dashboard
│   ├── bills/page.tsx
│   ├── todos/page.tsx
│   ├── reminders/page.tsx
│   └── news/page.tsx
│
├── components/
│   ├── ui/                       # Design system primitives
│   ├── layout/                   # Shell, sidebar, topbar
│   ├── widgets/                  # Feature cards
│   └── shared/                   # TimeDisplay, DayGreeting, etc.
│
├── lib/
│   ├── mock-data/                # Phase 1 mock data (weather, bills, todos, reminders, news)
│   ├── store/                    # Zustand stores
│   ├── hooks/                    # use-time, use-weather-gradient
│   └── utils/                    # cn.ts, date.ts
│
├── styles/
│   └── globals.css               # CSS variables + base reset
│
├── tailwind.config.ts            # Extended with design tokens
└── DESIGN.md                     # This file
```

---

## Phase 1 Build Order

1. **Foundation** — scaffold Next.js, Tailwind tokens, CSS variables, font setup
2. **Design system primitives** — Card, Badge, Button, Checkbox (animated), Avatar, ProgressBar
3. **App shell** — Sidebar, Topbar, PersonToggle, live clock, greeting
4. **Weather widget** — hero card first; gradient + big type sets premium benchmark
5. **Todos widget** — highest interaction; Framer Motion add/remove, person filtering
6. **Bills widget** — urgency colors, calendar bar, paid toggle
7. **Reminders widget** — countdown cards, person indicator
8. **News widget** — horizontal scroll feed
9. **Full-page routes** — expanded views for each section
10. **Polish** — staggered entrances, empty states, responsive, reduced-motion

---

## Phase 2: API Integration

Each `lib/mock-data/*.ts` file maps directly to a real API hook. When Phase 2 starts:
- Mock files → React Query/SWR hooks in `lib/hooks/`
- Zustand stores become thin wrappers around those hooks
- `app/api/` route handlers proxy external APIs (weather, news)
- No component code changes required — only the data layer swaps

### Planned Integrations
- Weather: OpenWeatherMap or weather.gov
- News: NewsAPI or RSS feeds
- Bills/Todos/Reminders: Supabase or PlanetScale (with auth)
