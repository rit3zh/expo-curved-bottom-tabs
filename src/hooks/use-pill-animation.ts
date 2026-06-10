import {
  EDGE_PAD,
  PILL_HEIGHT,
  SPRING_LEAD,
  SPRING_TRAIL,
} from "@/constants/tab-bar";
import type {
  IPillAnimation,
  IUsePillAnimationArgs,
} from "@/interfaces/pill-animation.interface";
import { useEffect, useRef } from "react";
import type { ViewStyle } from "react-native";
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

function usePillAnimation({
  activeIndex,
  width,
  geometry,
}: IUsePillAnimationArgs): IPillAnimation {
  const { slotWidth, pillWidth, centerX, centerY, radius, halfSpan } = geometry;

  const pillLeft = useSharedValue<number>(0);
  const pillRight = useSharedValue<number>(0);
  const initialized = useRef<boolean>(false);

  useEffect(() => {
    if (width <= 0) return;
    const target = EDGE_PAD + slotWidth * (activeIndex + 0.5);
    const targetLeft = target - pillWidth / 2;
    const targetRight = target + pillWidth / 2;
    if (!initialized.current) {
      initialized.current = true;
      pillLeft.value = targetLeft;
      pillRight.value = targetRight;
      return;
    }
    const movingRight = targetLeft >= pillLeft.value;
    pillLeft.value = withSpring(
      targetLeft,
      movingRight ? SPRING_TRAIL : SPRING_LEAD,
    );
    pillRight.value = withSpring(
      targetRight,
      movingRight ? SPRING_LEAD : SPRING_TRAIL,
    );
  }, [activeIndex, width, slotWidth, pillWidth, pillLeft, pillRight]);

  const pillCenter = useDerivedValue<number>(
    () => (pillLeft.value + pillRight.value) / 2,
  );

  const animatedPillStylez = useAnimatedStyle<ViewStyle>(() => {
    const left = pillLeft.value;
    const w = Math.max(pillRight.value - left, PILL_HEIGHT);
    const cx = left + w / 2;
    const dx = Math.min(Math.max(cx - centerX, -halfSpan), halfSpan);
    const yBase = Math.sqrt(Math.max(radius * radius - dx * dx, 0));
    const top = centerY - yBase - PILL_HEIGHT / 2;
    const tilt = Math.atan2(dx, yBase);
    const scaleY = interpolate(
      w,
      [pillWidth, pillWidth * 2.4],
      [1, 0.74],
      Extrapolation.CLAMP,
    );
    return {
      left,
      top,
      width: w,
      transform: [{ rotate: `${tilt}rad` }, { scaleY }],
    };
  }, [width, pillWidth, centerX, centerY, radius, halfSpan]);

  return { pillLeft, pillRight, pillCenter, pillStyle: animatedPillStylez };
}

export { usePillAnimation };
