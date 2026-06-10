import { ICON_SIZE } from "@/constants/tab-bar";
import { TAB_BAR_COLORS } from "@/constants/tab-bar-colors";
import type { ITabIcon } from "@/interfaces/tab-icon.interface";
import { Ionicons } from "@expo/vector-icons";
import { SymbolView } from "expo-symbols";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const TabIcon: React.FC<ITabIcon> = ({
  icon,
  fallback,
  render,
  x,
  slotWidth,
  pillCenter,
}: ITabIcon): React.ReactNode & React.ReactElement => {
  const activeStyle = useAnimatedStyle(() => {
    const d = Math.abs(pillCenter.value - x);
    return {
      opacity: interpolate(
        d,
        [0, slotWidth * 0.55],
        [1, 0],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          scale: interpolate(
            d,
            [0, slotWidth * 0.55],
            [1.08, 1],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  }, [x, slotWidth]);

  const idleStyle = useAnimatedStyle(() => {
    const d = Math.abs(pillCenter.value - x);
    return {
      opacity: interpolate(
        d,
        [0, slotWidth * 0.55],
        [0, 1],
        Extrapolation.CLAMP,
      ),
    };
  }, [x, slotWidth]);

  const glyph = (tintColor: string) => (
    <SymbolView
      name={icon}
      size={ICON_SIZE}
      tintColor={tintColor}
      fallback={<Ionicons name={fallback} size={ICON_SIZE} color={tintColor} />}
    />
  );

  return (
    <View style={styles.iconStack}>
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.center, idleStyle]}
      >
        {render ? render(false) : glyph(TAB_BAR_COLORS.iconIdle)}
      </Animated.View>
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.center, activeStyle]}
      >
        {render ? render(true) : glyph(TAB_BAR_COLORS.iconActive)}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStack: {
    flex: 1,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export { TabIcon };
