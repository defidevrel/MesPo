# MesPo

View-only wallet UI (Expo + React Native). Work in progress.

## Prerequisites

- Node.js (LTS recommended)
- iOS Simulator (Xcode) and/or Android Studio / device

## Run

```bash
npm install
npm start
```

After changing `tailwind.config.js`, `global.css`, or `metro.config.js`, clear the Metro cache once:

```bash
npx expo start -c
```

Then press `i` for iOS simulator, `a` for Android, or scan the QR code with Expo Go.

```bash
npm run ios
npm run android
```

## Project notes

- **UI:** Home + custom bottom tab bar mirror the reference layout (`src/screens/HomeScreen.tsx`, `src/navigation/RootTabs.tsx`); mock balances in `src/data/mockWallet.ts`.
- **Styling:** [NativeWind](https://www.nativewind.dev/) v4 + Tailwind v3 (`tailwind.config.js`, `global.css`, `metro.config.js`, `babel.config.js`).
- `npm audit` may report moderate issues in transitive Expo tooling; do not run `npm audit fix --force` without review (it can pin incompatible Expo versions).
