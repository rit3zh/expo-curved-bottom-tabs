import type {
  CurvedTabsIndicator,
  CurvedTabsList,
  CurvedTabsTrigger,
} from "@/components/markers";
import type {
  ICurvedTabs,
  ICurvedTabsRoot,
} from "@/interfaces/curved-tabs.interface";

function createCurvedTabs(
  root: ICurvedTabsRoot,
  list: typeof CurvedTabsList,
  trigger: typeof CurvedTabsTrigger,
  indicator: typeof CurvedTabsIndicator,
): ICurvedTabs {
  return Object.assign(root, {
    List: list,
    Trigger: trigger,
    Indicator: indicator,
  });
}

export { createCurvedTabs };
