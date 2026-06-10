import type { ViewStyle } from "react-native";
import type { SharedValue, useAnimatedStyle } from "react-native-reanimated";
import type { ITabBarGeometry } from "./tab-bar-geometry.interface";

interface IUsePillAnimationArgs {
  activeIndex: number;
  width: number;
  geometry: ITabBarGeometry;
}

interface IPillAnimation {
  pillLeft: SharedValue<number>;
  pillRight: SharedValue<number>;
  pillCenter: SharedValue<number>;
  pillStyle: ReturnType<typeof useAnimatedStyle<ViewStyle>>;
}

export type { IPillAnimation, IUsePillAnimationArgs };
