import type { LayoutChangeEvent } from "react-native";
import type { ICurvedGlassGeometry } from "./curved-glass-geometry.interface";

interface IUseCurvedGlassLayout extends ICurvedGlassGeometry {
  width: number;
  onLayout: (e: LayoutChangeEvent) => void;
}

export type { IUseCurvedGlassLayout };
