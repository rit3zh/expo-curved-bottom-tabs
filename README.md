# expo-curved-bottom-tabs

A curved, liquid-glass bottom tab bar for Expo Router with a draggable glass pill.

## ✨ Features

- 🌊 Skia-powered curved tab bar surface with subtle bead detailing
- 🫧 Liquid-glass pill indicator (`expo-glass-effect`) with a graceful fallback
- 👆 Draggable pill — pan across the bar and it snaps + navigates to the nearest tab
- 🪄 Dual-spring pill animation (snappy lead, smooth trail) for a natural follow
- 🧩 Compound component API that plugs straight into Expo Router's `tabBar`
- 🎯 SF Symbols icons with Ionicons fallback, resolved per route
- 🧠 Fully typed with TypeScript

---

## ⚙️ Installation

```bash
git clone https://github.com/rit3zh/expo-curved-bottom-tabs
cd expo-curved-bottom-tabs
bun install
bun start
```

---

## 🚀 Usage

Wire `CurvedTabBar` into the `tabBar` prop on `<Tabs>` — see [src/app/_layout.tsx](src/app/_layout.tsx).

```tsx
import { Tabs } from "expo-router/tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { CurvedTabBar } from "@/components";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        tabBar={(props) => <CurvedTabBar {...props} />}
        screenOptions={{ headerShown: false, animation: "shift" }}
        detachInactiveScreens={false}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="search" options={{ title: "Search" }} />
        <Tabs.Screen name="apps" options={{ title: "Apps" }} />
        <Tabs.Screen name="library" options={{ title: "Library" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
    </GestureHandlerRootView>
  );
}
```

> [!IMPORTANT]
> Wrap your app in `GestureHandlerRootView` — the draggable pill depends on `react-native-gesture-handler`.

---

## 🧱 Component Anatomy

`CurvedTabBar` is a thin wrapper that composes the compound `CurvedTabs` API from your route state. Under the hood it looks like this:

```tsx
<CurvedTabs {...props}>
  <CurvedTabs.List>
    {props.state.routes.map((route) => (
      <CurvedTabs.Trigger key={route.key} name={route.name} />
    ))}
  </CurvedTabs.List>
  <CurvedTabs.Indicator />
</CurvedTabs>
```

| Component               | Description                                                              |
| ----------------------- | ------------------------------------------------------------------------ |
| `CurvedTabs`            | Root that renders the Skia surface, reads route state, and owns gestures |
| `CurvedTabs.List`       | Declares the set of tabs (a container for `Trigger`s)                    |
| `CurvedTabs.Trigger`    | Declares a single tab by its route `name`                                |
| `CurvedTabs.Indicator`  | Opts the sliding glass pill into the bar                                 |

`List`, `Trigger`, and `Indicator` are marker components — they render `null` and exist purely so the root can parse children and decide what to draw. The actual rendering (surface, icons, pill) is handled by `CurvedTabs.Root`.

---

## 🛠️ How It Works

1. **Geometry** — `useTabBarGeometry` measures the bar width and computes the arc, per-tab centers, pill width, and the Skia bead points.
2. **Surface** — `TabBarSurface` paints the curved bar (liquid glass when available, a fallback otherwise).
3. **Pill** — `usePillAnimation` drives the glass indicator with two springs (`SPRING_LEAD` / `SPRING_TRAIL`) so it leads quickly and settles smoothly on the active tab.
4. **Gesture** — `usePillGesture` lets you drag the pill; on release it snaps to the nearest tab center and calls `navigation.navigate`.
5. **Icons** — `TabBarIcons` resolves each route to an SF Symbol (with an Ionicons fallback) via `TAB_META`.

---

## 🎛️ Customization

Change values in [src/constants/tab-bar.ts](src/constants/tab-bar.ts) to reshape the bar:

| Constant       | Description                                              |
| -------------- | -------------------------------------------------------- |
| `ARC_HEIGHT`   | How deep the curve dips                                  |
| `THICKNESS`    | Bar thickness (drives overall height)                    |
| `EDGE_PAD`     | Horizontal padding before the first / after the last tab |
| `PILL_HEIGHT`  | Height of the sliding glass pill                         |
| `ICON_SIZE`    | Icon glyph size                                          |
| `ICON_BOX`     | Touch / layout box around each icon                      |
| `SPRING_LEAD`  | Spring for the pill's leading edge (snappy)              |
| `SPRING_TRAIL` | Spring for the pill's trailing edge (smooth)             |

### Adding or changing icons

Map a route `name` to an SF Symbol and an Ionicons fallback in `TAB_META` ([src/constants/tab-bar.ts](src/constants/tab-bar.ts)):

```ts
const TAB_META: Record<string, ITabMeta> = {
  index: { icon: "house.fill", fallback: "home-sharp" },
  search: { icon: "magnifyingglass", fallback: "search-sharp" },
  apps: { icon: "square.grid.2x2", fallback: "apps-sharp" },
  library: { icon: "book.fill", fallback: "book-sharp" },
  profile: { icon: "person.crop.circle", fallback: "person-sharp" },
};
```

Routes without an entry fall back to `DEFAULT_TAB_META`.

---

## Stack

[Expo 56](https://expo.dev/changelog/sdk-56) · [React Native 0.85](https://reactnative.dev/) · [Reanimated 4](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started) · [Gesture Handler 2](https://docs.swmansion.com/react-native-gesture-handler/docs/category/gesture-handler-2/) · [Skia](https://shopify.github.io/react-native-skia/) · [Expo Glass Effect](https://docs.expo.dev/versions/latest/sdk/glass-effect/) · [Expo Router](https://docs.expo.dev/router/introduction/)
