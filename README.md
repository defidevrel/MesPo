# MesPo

A **view-only** crypto wallet–style mobile UI built with **Expo**, **React Native**, **NativeWind** (Tailwind), and **React Navigation**. Balances and history are **mock data**—no keys, signing, or on-chain calls.

## Stack

- Expo SDK 54 · React Native 0.81 · TypeScript
- NativeWind v4 + Tailwind CSS v3
- React Navigation (bottom tabs, custom tab bar)
- `react-native-reanimated`, `react-native-gesture-handler`, `react-native-svg`, `expo-linear-gradient`

## Prerequisites

- Node.js (LTS)
- Xcode (iOS Simulator) and/or Android Studio / physical device
- [Expo Go](https://expo.dev/go) if you test on a phone without a dev build

## Setup & run

```bash
npm install
npm start
```

- Press `i` for iOS simulator, `a` for Android, or scan the QR code in Expo Go.
- After changing `tailwind.config.js`, `global.css`, or `metro.config.js`, clear the bundler cache once:

```bash
npx expo start -c
```

```bash
npm run ios
npm run android
```

## Project layout

| Path | Purpose |
|------|--------|
| `App.tsx` | Root: gesture handler, safe area, navigation |
| `index.ts` | Entry: `react-native-gesture-handler`, `global.css`, app registration |
| `src/screens/HomeScreen.tsx` | Main wallet home (hero pocket, actions, balances, history) |
| `src/navigation/RootTabs.tsx` | Tab navigator + custom tab bar |
| `src/data/mockWallet.ts` | Mock user, balances, transaction (swap for real API later) |
| `src/theme/colors.ts` | Design tokens aligned to the reference UI |
| `src/components/` | `GradientAvatar`, `StablecoinMark`, `ZeroBrandMark`, etc. |

## Quality checks

```bash
npx tsc --noEmit
npx expo-doctor
```

## Notes

- **Security:** This repo is UI-only; do not commit real seed phrases or API keys.
- **`npm audit`:** Transitive Expo tooling may show moderate advisories. Avoid `npm audit fix --force` without checking—it can pin incompatible Expo versions.

## License

Private project (`"private": true` in `package.json`).
