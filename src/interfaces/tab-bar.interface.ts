import { Ionicons } from "@expo/vector-icons";
import type { SymbolViewProps } from "expo-symbols";
import type { ReactNode } from "react";

interface ITabRoute {
  key: string;
  name: string;
}

interface ITriggerProps {
  name: string;
  children?: ReactNode;
}

interface ITabConfig {
  name: string;
  render?: (active: boolean) => ReactNode;
}

interface IParsedChildren {
  tabs: ITabConfig[];
  hasIndicator: boolean;
}

interface ITabMeta {
  icon: SymbolViewProps["name"];
  fallback: keyof typeof Ionicons.glyphMap;
}

export type { IParsedChildren, ITabConfig, ITabMeta, ITabRoute, ITriggerProps };
