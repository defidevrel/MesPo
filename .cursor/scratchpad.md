# MesPo — Sleek view-only wallet (Expo + NativeWind)

## Background and Motivation

Build a **very sleek** mobile wallet experience using **Expo**, **React Native**, **NativeWind** (Tailwind on RN), and a **fluid** feel (motion, spacing, hierarchy). Scope is **view-only balances** (no send/sign/transactions execution in v1). Target: iOS and Android from one codebase.

**User choices (locked for v1):**

- Runtime: **Expo** (managed workflow, EAS when needed).
- Product: **View-only** asset/balance presentation (read-only UX).
- Quality bar: **Premium UI/UX** — calm typography, depth without clutter, purposeful motion.

**UI reference:** Light wallet home (ZERO card + sleeve, quick actions, USDC/USDT balance chips, recent history, dark rounded tab bar with green home accent) — see workspace asset `Screenshot_2026-05-12_at_1.43.00_AM-d97735b9-3447-4607-874f-898c81d74cfb.png`.

## Key Challenges and Analysis

1. **NativeWind + Expo** — Use current NativeWind v4 + Expo SDK pairing from official docs; verify `metro`/`babel` config and TypeScript paths once scaffolded.
2. **“Fluid” without scope creep** — Prefer **Reanimated** + **Gesture Handler** (Expo-compatible) for scroll-linked or subtle press/hover-scale animations; avoid heavy custom physics unless time allows.
3. **View-only data** — Start with **deterministic mock data** (tokens, chains, fiat formatting) behind a small `wallet` module so a future API/provider swap does not reshape the UI layer.
4. **Sleek visual system** — Single source of truth: tokens for color, radius, shadow, type scale; light home + dark tab bar per reference; large numerics where supported.
5. **Non-goals for v1** — Private keys, signing, transaction broadcast, deep wallet connect, or on-chain writes.

## High-level Task Breakdown

Each step has **success criteria** the Executor can verify before moving on.

1. **Scaffold Expo app (TypeScript)**  
   - Success: `npx expo start` runs; blank app loads on simulator/device; repo has clear `README` run instructions (minimal).

2. **Install and configure NativeWind**  
   - Success: a screen uses `className` and styles apply; no Metro resolution errors; TypeScript accepts NativeWind types if applicable.

3. **Navigation shell**  
   - Success: **Tabs** or **stack + home** pattern: Home (balances), optional placeholder “Activity” or “Settings” as static empty states if needed for layout rhythm (no real data required).

4. **Design tokens + layout primitives**  
   - Success: shared `Screen`, `Card`, `BalanceRow` (or similar) components; consistent padding, radius, and typography; safe-area handled.

5. **Home: balance hero + asset list (mock)**  
   - Success: total portfolio value (mock), list of assets with icon placeholder, name, symbol, balance, fiat estimate; pull-to-refresh optional (can animate list only).

6. **Fluid motion pass**  
   - Success: at least two polished motions (e.g. list item stagger on focus, card press scale, or scroll header shrink) using Reanimated; stays at 60fps on mid-range simulator.

7. **Polish + accessibility**  
   - Success: labels for screen readers on key values; dynamic font scaling does not break layout badly; loading/empty states are intentional, not blank screens.

## Project Status Board

- [x] Scaffold Expo (TypeScript) — verified by human
- [x] NativeWind configured — verified by human
- [x] Navigation shell — custom dark tab bar (Home / Wallet / Send / Profile)
- [x] Tokens + primitives — **partial:** safe-area + layout in `HomeScreen`; extract shared `Screen`/`Card` later if files grow
- [x] Home mock balances UI — matches reference structure (mock in `src/data/mockWallet.ts`)
- [ ] Fluid motion pass
- [ ] A11y + polish

## Current Status / Progress Tracking

**Executor Steps 3–5 (latest):** Implemented **React Navigation** bottom tabs with a **custom tab bar** (`rounded-t-[32px]`, zinc-950, emerald ring on Home, gradient avatar on Profile). **Home** rebuilt to mirror the reference: header + **ZERO** black card over dashed **sleeve**, quick actions, horizontal **Balances** (USDC/USDT mock), **Recent history** row with PENDING pill and dashed amount chip. Mock data in **`src/data/mockWallet.ts`**. **`expo-linear-gradient`** for avatars; **`@expo/vector-icons`** + **`expo-font`** (peer / `expo-doctor`). Entry: **`react-native-gesture-handler`** first in `index.ts`, then `global.css`. Verified: `npx tsc --noEmit`, `npx expo-doctor`, `npx expo export --platform ios`.

**Executor UI refinement (pixel pass):** Centralized palette in **`src/theme/colors.ts`** (`#F5F5F5` page, `#F2F2F2` pocket/surfaces, `#8E8E93` secondary text, **`#39FF14` neon** accents). **Hero:** `4deg` tilted black card, **italic wide “ZERO”** with **lime bar over the O** + small neon facet top-right, **white dashed** pocket border, **slot notch** (page-colored half-ellipse), **gray address pill** with **white dashed** border. **Actions:** `wallet-plus-outline`, composite **wallet + red minus-thick**, **dots-horizontal** + two-line “More actions”. **Balances:** **`react-native-svg`** `UsdcMark` / `UsdtMark`. **History:** dark circle + **`credit-card-check`**, orange badge tones, dashed amount pill. **Tabs:** `borderTopLeftRadius` / `Right` **40**, neon glow on active Home / Profile. **Avatar gradient** shifted toward purple/pink/blue blur.

## Executor's Feedback or Assistance Requests

- **npm audit:** 4 moderate (transitive `postcss` via Expo). Did **not** run `npm audit fix --force`.
- **Please visually QA:** Run `npx expo start -c` and compare to the latest reference (`Screenshot_2026-05-12_at_1.43.00_AM-c1652ac6-f317-4790-b085-ebb23988e841.png`). Remaining optional polish: **expo-blur** on avatars for photographic blur, custom **display font** for `0.82 USD` if you want a specific TTF.

## Lessons

- Include info useful for debugging in the program output.
- Read the file before you try to edit it.
- If vulnerabilities appear in the terminal, run `npm audit` before proceeding.
- Always ask before using the `-force` git command.
- **`create-expo-app` in non-empty folder:** If the directory contains `.cursor/` or other files, scaffold into a subfolder (e.g. `_expo_scaffold`) then `rsync -a subfolder/ ./` and remove the subfolder.
- **NativeWind + custom `babel.config.js`:** Metro’s Babel worker must resolve `babel-preset-expo` — add it as a **direct** dependency (`npx expo install babel-preset-expo`) if bundling errors with “Cannot find module 'babel-preset-expo'”.
- **Reanimated 4 (Expo SDK 54):** `expo-doctor` expects **`react-native-worklets`** installed; NativeWind’s Babel stack uses the worklets plugin.
- **`@expo/vector-icons`:** Install **`expo-font`** explicitly (`npx expo install expo-font`) so `expo-doctor` passes and native builds resolve the peer.
- **React Navigation + gesture handler:** `import "react-native-gesture-handler"` must be the **first** line of the app entry file (before other imports).

---

**Next step for human:** Visual check vs reference image; then **Executor** for Step 6 (fluid motion) or list specific UI deltas.
