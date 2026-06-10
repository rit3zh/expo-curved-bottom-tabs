import { DEFAULT_TAB_META, ICON_BOX, TAB_META } from "@/constants/tab-bar";
import { ITabBarIcons } from "@/interfaces/tab-bar-icons.interface";
import { StyleSheet, View } from "react-native";
import { TabIcon } from "./tab-icon";

const TabBarIcons: React.FC<ITabBarIcons> = ({
  routes,
  declaredTabs,
  geometry,
  pillCenter,
}: ITabBarIcons & React.ComponentProps<typeof TabBarIcons>): React.ReactNode &
  React.ReactElement => {
  const { tabCenters, centerlineY, centerX, halfSpan, radius, slotWidth } =
    geometry;

  return (
    <>
      {routes.map((route, i) => {
        const meta = TAB_META[route.name] ?? DEFAULT_TAB_META;
        const x = tabCenters[i];
        const y = centerlineY(x);
        const dx = Math.min(Math.max(x - centerX, -halfSpan), halfSpan);
        const tilt = Math.atan2(
          dx,
          Math.sqrt(Math.max(radius * radius - dx * dx, 0)),
        );
        const render = declaredTabs.find((t) => t.name === route.name)?.render;
        return (
          <View
            key={route.key}
            pointerEvents="none"
            style={[
              styles.iconBox,
              {
                left: x - ICON_BOX / 2,
                top: y - ICON_BOX / 2,
                transform: [{ rotate: `${tilt}rad` }],
              },
            ]}
          >
            <TabIcon
              icon={meta.icon}
              fallback={meta.fallback}
              render={render}
              x={x}
              slotWidth={slotWidth}
              pillCenter={pillCenter}
            />
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  iconBox: {
    position: "absolute",
    width: ICON_BOX,
    height: ICON_BOX,
  },
});

export { TabBarIcons };
