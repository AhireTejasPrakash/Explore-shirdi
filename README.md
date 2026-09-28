# Explore Shirdi – Sacred Pilgrimage Portal

![Explore Shirdi Banner](https://raw.githubusercontent.com/your-org/explore-shirdi/main/public/shirdi-sanctum.jpg)

## 📖 Overview
A **Next.js 16** web application that provides a premium, fully‑responsive pilgrimage experience for **Shirdi Sai Baba** devotees. The portal offers:
- Secure authentication (login / register / forgot‑password).
- A personalized dashboard with real‑time queue status, climate data, and live‑stream capabilities.
- Five core sections:
  - **Discover & Attractions** – interactive cards for sacred sites (Dwarkamai, Samadhi Mandir, Chavadi, Lendi Baug, etc.).
  - **Darshan & Live Aarti** – Aarti schedule, VIP pass booking, and live‑stream banner.
  - **Luxury Stays & Ashrams** – curated accommodation cards with pricing, distance, and amenities.
  - **Prasadam & Dining** – satvik meal options, official Sansthan kitchen, and restaurant listings.
  - **AI Trip Planner** – toggles for stays/meals/transport, itinerary generation, and export actions.

> The UI follows the brand palette (`#A73710`, `#B45309`, `#F59E0B`) and uses **Google Fonts** (Plus Jakarta Sans & Playfair Display) loaded via `@import` at the very top of `globals.css`.

---

## 📁 Repository Layout
```
frontend/                     # Root of the Next.js app
├─ app/                       # Next.js App Router
│  ├─ (auth)/                # Unauthenticated routes
│  │   ├─ login/page.tsx
│  │   ├─ register/page.tsx
│  │   └─ forgot-password/page.tsx
│  ├─ (portal)/               # Protected routes (post‑login)
│  │   ├─ dashboard/page.tsx
│  │   ├─ attractions/page.tsx
│  │   ├─ darshan/page.tsx
│  │   ├─ stays/page.tsx
│  │   ├─ dining/page.tsx
│  │   └─ ai‑planner/page.tsx
│  ├─ globals.css            # Tailwind + Google‑font import (must be first line)
│  ├─ layout.tsx              # Root layout (wraps all pages)
│  └─ page.tsx                # Redirects to /login if unauthenticated
├─ components/
│  ├─ auth/                  # Form inputs & AuthLayout
│  ├─ portal/                # Header, Footer, Hero, Section components
│  └─ ui/ToggleSwitch.tsx    # Re‑usable toggle switch (used by AI Planner)
├─ public/                    # Static assets (photos, icons)
│  ├─ samadhi-mandir.jpg      # User‑provided Sai Baba statue photo
│  ├─ dwarkamai.jpg           # User‑provided Dwarkamai Masjid photo
│  └─ … (other images)       # Lendi Baug, Chavadi, etc.
├─ next.config.ts
├─ tailwind.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
└─ package.json
```

> **Important files**: 
> - `app/globals.css` – first line must be the Google‑fonts `@import`. 
> - `components/portal/PortalHeader.tsx` – dynamic active‑link detection via `usePathname()`. 
> - `components/ui/ToggleSwitch.tsx` – reusable UI component.

---

## 💻 Prerequisites (Windows)
| Tool | Minimum version | Installation command |
|------|----------------|----------------------|
| **Git** | 2.40+ | `winget install --id Git.Git` |
| **Node.js** (includes npm) | v20.x LTS | `winget install --id OpenJS.NodeJS` |
| **PowerShell 7** (optional) | 7.4+ | `winget install --id Microsoft.PowerShell` |

Verify the installations:
```powershell
git --version
node --version
npm --version
```

---

## 🛠️ Setup & Development
```powershell
# 1️⃣ Clone the repo (or copy the folder you already have)
git clone https://github.com/your-org/explore-shirdi.git
cd explore-shirdi/frontend

# 2️⃣ Install exact dependencies (clean install)
npm ci

# 3️⃣ Optional: create a minimal .env.local (extend later for real auth)
"NEXT_PUBLIC_BASE_URL=http://localhost:3000" | Out-File -Encoding utf8 .env.local -Force

# 4️⃣ Run the dev server (Next.js will use port 3000 or fall back to 3001)
npm run dev
```
Open the printed URL (e.g., `http://localhost:3000`) in your browser.

### Common dev commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot‑reloading. |
| `npm run build` | Creates an optimized production build (`.next` folder). |
| `npm start` | Runs the production build locally (default port 3000). |
| `npm run lint` *(if configured)* | Lints the code with ESLint/Prettier. |
| `npx tsc --noEmit` | TypeScript type‑checking – should report **0 errors**. |

---

## 📦 Production Build & Export
```powershell
# Build the app (optimised server‑side rendering)
npm run build

# Serve the built app
npm start   # opens on http://localhost:3000

# Or export a fully static site (no Node server needed)
npm run export   # outputs to ./out
npx serve out       # quick static server, e.g., http://localhost:5000
```

---

## 🔧 Known Issues & Future Work
- **Authentication** – currently a mock redirect; integrate a real solution (e.g., **NextAuth.js** with JWT). 
- **Booking / reminder actions** – UI only; needs backend endpoints. 
- **Live Aarti stream** – placeholder button; connect to an actual video source (YouTube/HLS). 
- **Port conflict** – dev server may fall back to `:3001` if `:3000` is busy. Stop the stray process (`taskkill /PID <PID> /F`). 
- **Responsive testing** – run a manual audit on mobile devices to fine‑tune layouts.

---

## 🤝 Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-feature`).
3. Make your changes and ensure `npm run dev` builds without warnings.
4. Run `npx tsc --noEmit` – fix any TypeScript errors.
5. Submit a Pull Request with a clear description of the change.

---

## 📜 License
This project is licensed under the **MIT License** – feel free to use, modify, and distribute.

---

## 📞 Contact
- **Maintainer**: Ritesh Lande – <ritesh.lande@example.com>
- **Issues**: Open a GitHub issue on the repo.
- **Community**: Join the Shirdi Pilgrims Discord (invite link in the repo README).

---

*Happy pilgrimage planning!* 🚩
