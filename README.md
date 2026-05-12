# MesPo

React Native app using the [Expo](https://expo.dev) toolchain (TypeScript, blank template).

## Requirements

- **Node.js** (LTS)
- **iOS:** Xcode + Simulator, or a device with Expo Go  
- **Android:** Android Studio / emulator, or Expo Go

## Install & run

```bash
npm install
npm start
```

Then press **`i`** (iOS), **`a`** (Android), or scan the QR code with **Expo Go**.

```bash
npm run ios
npm run android
npm run web
```

Clear the Metro cache if bundling acts stale:

```bash
npx expo start -c
```

## Verify setup

```bash
npx tsc --noEmit
npx expo-doctor
```

## Stack

- **Expo SDK 54** · **React Native 0.81** · **React 19**
- Entry: `index.ts` → `App.tsx`

## Notes

- `npm audit` may report moderate issues in transitive dependencies; avoid `npm audit fix --force` unless you confirm versions stay compatible with your Expo SDK.
