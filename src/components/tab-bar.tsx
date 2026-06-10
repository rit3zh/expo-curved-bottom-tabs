import { createCurvedTabs } from "@/lib/create-curved-tabs";
import { BottomTabBarProps } from "expo-router/tabs";
import { CurvedTabsRoot } from "./curved-tabs";
import {
  CurvedTabsIndicator,
  CurvedTabsList,
  CurvedTabsTrigger,
} from "./markers";

const CurvedTabs = createCurvedTabs(
  CurvedTabsRoot,
  CurvedTabsList,
  CurvedTabsTrigger,
  CurvedTabsIndicator,
);

const CurvedTabBar: React.FC<BottomTabBarProps> = (
  props: BottomTabBarProps & React.ComponentProps<typeof CurvedTabBar>,
): React.ReactNode & React.ReactElement & React.JSX.Element => {
  return (
    <CurvedTabs {...props}>
      <CurvedTabs.List>
        {props.state.routes.map((route) => (
          <CurvedTabs.Trigger key={route.key} name={route.name} />
        ))}
      </CurvedTabs.List>
      <CurvedTabs.Indicator />
    </CurvedTabs>
  );
};

export { CurvedTabBar, CurvedTabs };
