import { SharedValue } from "react-native-reanimated";
import { ITabBarGeometry } from "./tab-bar-geometry.interface";
import { ITabConfig, ITabRoute } from "./tab-bar.interface";

interface ITabBarIcons {
  routes: ITabRoute[];
  declaredTabs: ITabConfig[];
  geometry: ITabBarGeometry;
  pillCenter: SharedValue<number>;
}

export type { ITabBarIcons };
