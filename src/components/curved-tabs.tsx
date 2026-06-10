import { TAB_BAR_COLORS } from "@/constants/tab-bar-colors";
import { usePillAnimation } from "@/hooks/use-pill-animation";
import { usePillGesture } from "@/hooks/use-pill-gesture";
import { useTabBarGeometry } from "@/hooks/use-tab-bar-geometry";
import type { ICurvedTabsRoot } from "@/interfaces/curved-tabs.interface";
import type { ITabRoute } from "@/interfaces/tab-bar.interface";
import { parseTabChildren } from "@/lib/parse-tab-children";
import { styles } from "@/stylesheet/curved-tab.styles";
import { GlassView, isLiquidGlassAvailable } from "expo-glass-effect";
import React, { useState } from "react";
import { LayoutChangeEvent, Pressable, StyleSheet, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { TabBarIcons } from "./tab-bar-icons";
import { TabBarSurface } from "./tab-bar-surface";

const CurvedTabsRoot: ICurvedTabsRoot = ({
  state,
  navigation,
  insets,
  children,
}): React.ReactNode & React.ReactElement => {
  const { tabs: declaredTabs, hasIndicator } = parseTabChildren(children);
  const [width, setWidth] = useState<number>(0);

  const routes = state.routes;
  const glass = isLiquidGlassAvailable();
  const geometry = useTabBarGeometry(width, routes.length);

  const { pillLeft, pillRight, pillCenter, pillStyle } = usePillAnimation({
    activeIndex: state.index,
    width,
    geometry,
  });

  const navigateToIndex = (index: number) => {
    if (index !== state.index) navigation.navigate(routes[index].name);
  };

  const onPress = (route: ITabRoute, index: number) => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });
    if (state.index !== index && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const pan = usePillGesture({
    geometry,
    pillLeft,
    pillRight,
    onSnap: navigateToIndex,
  });

  const onLayout = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    if (w !== width) setWidth(w);
  };

  return (
    <View
      pointerEvents="box-none"
      style={[styles.wrap, { paddingBottom: Math.max(insets.bottom, 12) }]}
    >
      <View
        style={[styles.bar, { height: geometry.barHeight }]}
        onLayout={onLayout}
      >
        {width > 0 && (
          <>
            <TabBarSurface
              arc={geometry.arc}
              beads={geometry.beads}
              width={width}
              barHeight={geometry.barHeight}
              glass={glass}
            />

            {hasIndicator && (
              <Animated.View style={[styles.pill, pillStyle]}>
                <GlassView
                  glassEffectStyle="regular"
                  isInteractive
                  tintColor={TAB_BAR_COLORS.pillTint}
                  style={[styles.pillFill, !glass && styles.pillFallback]}
                />
              </Animated.View>
            )}

            <TabBarIcons
              routes={routes}
              declaredTabs={declaredTabs}
              geometry={geometry}
              pillCenter={pillCenter}
            />

            <GestureDetector gesture={pan}>
              <View style={[StyleSheet.absoluteFill, styles.pressRow]}>
                {routes.map((route, i) => (
                  <Pressable
                    key={route.key}
                    style={styles.press}
                    onPress={() => onPress(route, i)}
                  />
                ))}
              </View>
            </GestureDetector>
          </>
        )}
      </View>
    </View>
  );
};

export { CurvedTabsRoot };
