import { EDGE_PAD, SPRING_LEAD, SPRING_TRAIL } from "@/constants/tab-bar";
import type { IUsePillGestureArgs } from "@/interfaces/pill-gesture-args";
import { Gesture } from "react-native-gesture-handler";
import { useSharedValue, withSpring } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

function usePillGesture({
  geometry,
  pillLeft,
  pillRight,
  onSnap,
}: IUsePillGestureArgs) {
  const { slotWidth, pillWidth, tabCenters } = geometry;
  const count = tabCenters.length;
  const minCenter = tabCenters[0] ?? 0;
  const maxCenter = tabCenters[count - 1] ?? 0;

  const dragStartCenter = useSharedValue(0);

  return Gesture.Pan()
    .activeOffsetX([-6, 6])
    .onBegin(() => {
      dragStartCenter.value = (pillLeft.value + pillRight.value) / 2;
    })
    .onUpdate((e) => {
      const c = Math.min(
        Math.max(dragStartCenter.value + e.translationX, minCenter),
        maxCenter,
      );
      const movingRight = e.velocityX >= 0;
      pillLeft.value = withSpring(
        c - pillWidth / 2,
        movingRight ? SPRING_TRAIL : SPRING_LEAD,
      );
      pillRight.value = withSpring(
        c + pillWidth / 2,
        movingRight ? SPRING_LEAD : SPRING_TRAIL,
      );
    })
    .onEnd((e) => {
      const projected = Math.min(
        Math.max(
          dragStartCenter.value + e.translationX + e.velocityX * 0.06,
          minCenter,
        ),
        maxCenter,
      );
      const index = Math.min(
        Math.max(Math.round((projected - EDGE_PAD) / slotWidth - 0.5), 0),
        count - 1,
      );
      const target = EDGE_PAD + slotWidth * (index + 0.5);
      pillLeft.value = withSpring(target - pillWidth / 2, SPRING_TRAIL);
      pillRight.value = withSpring(target + pillWidth / 2, SPRING_TRAIL);
      scheduleOnRN(onSnap, index);
    });
}

export { usePillGesture };
