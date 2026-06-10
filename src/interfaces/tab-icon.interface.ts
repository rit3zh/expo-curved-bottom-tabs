import type { Ionicons } from "@expo/vector-icons";
import type { SymbolViewProps } from "expo-symbols";
import type { ReactNode } from "react";
import type { SharedValue } from "react-native-reanimated";

interface ITabIcon {
  icon: SymbolViewProps["name"];
  fallback: keyof typeof Ionicons.glyphMap;
  render?: (active: boolean) => ReactNode;
  x: number;
  slotWidth: number;
  pillCenter: SharedValue<number>;
}

export type { ITabIcon };
