import type {
  CurvedTabsIndicator,
  CurvedTabsList,
  CurvedTabsTrigger,
} from "@/components/markers";
import type { BottomTabBarProps } from "expo-router/tabs";
import type { FC, PropsWithChildren } from "react";

interface ICurvedTabsRoot extends FC<PropsWithChildren<BottomTabBarProps>> {}

interface ICurvedTabs extends ICurvedTabsRoot {
  List: typeof CurvedTabsList;
  Trigger: typeof CurvedTabsTrigger;
  Indicator: typeof CurvedTabsIndicator;
}

export type { ICurvedTabs, ICurvedTabsRoot };

