import { GlassViewProps } from "expo-glass-effect";
import type { ViewStyle } from "react-native";

interface ICurvedGlassView extends Pick<
  GlassViewProps,
  "isInteractive" | "tintColor" | "glassEffectStyle"
> {
  arcHeight?: number;
  thickness?: number;
  segments?: number;
  showRim?: boolean;
  style?: ViewStyle;
}

export type { ICurvedGlassView };
