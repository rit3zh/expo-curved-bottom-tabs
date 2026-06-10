import { DynamicColorIOS, Platform } from "react-native";

/**
 * Appearance-aware tab-bar colors via `DynamicColorIOS`.
 * On non-iOS (or when DynamicColorIOS is unavailable) we fall back to the
 * light-mode value so Android still renders correctly.
 *
 * `DynamicColorIOS` returns an `OpaqueColorValue`, but native color props
 * (`tintColor`, SVG `fill`, etc.) are often typed as `string` even though they
 * accept it at runtime — so we surface it as `string` for assignability.
 */
function dynamic(light: string, dark: string): string {
  if (Platform.OS === "ios") {
    return DynamicColorIOS({ light, dark }) as unknown as string;
  }
  return light;
}

const TAB_BAR_COLORS = {
  surface: dynamic("#FFFFFF", "#000000"),
  pillTint: dynamic("#ffffff", "#0A0A0A"),
  iconActive: dynamic("#000", "#fff"),
  iconIdle: dynamic("#3A3A3C", "#AEAEB2"),
} as const;

export { dynamic, TAB_BAR_COLORS };
