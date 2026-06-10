import type { SharedValue } from "react-native-reanimated";
import type { ITabBarGeometry } from "./tab-bar-geometry.interface";

interface IUsePillGestureArgs {
  geometry: ITabBarGeometry;
  pillLeft: SharedValue<number>;
  pillRight: SharedValue<number>;
  onSnap: (index: number) => void;
}

export type { IUsePillGestureArgs };
