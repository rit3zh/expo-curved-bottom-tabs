import type { ITriggerProps } from "@/interfaces/tab-bar.interface";
import type { ReactNode } from "react";

const CurvedTabsTrigger = (_props: ITriggerProps): null => {
  return null;
};
CurvedTabsTrigger.__curvedTabsRole = "trigger" as const;

const CurvedTabsIndicator = (): null => {
  return null;
};
CurvedTabsIndicator.__curvedTabsRole = "indicator" as const;

const CurvedTabsList = (_props: { children?: ReactNode }): null => {
  return null;
};
CurvedTabsList.__curvedTabsRole = "list" as const;

export { CurvedTabsIndicator, CurvedTabsList, CurvedTabsTrigger };
