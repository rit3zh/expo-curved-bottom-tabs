import type {
  IParsedChildren,
  ITabConfig,
  ITriggerProps,
} from "@/interfaces/tab-bar.interface";
import { Children, isValidElement, type ReactNode } from "react";

function parseTabChildren<T extends React.ReactNode>(
  children: T,
): IParsedChildren {
  const tabs: ITabConfig[] = [];
  let hasIndicator = false;

  const visit = (nodes: Required<ReactNode>) => {
    Children.forEach(nodes, (child) => {
      if (!isValidElement(child)) return;
      const role = (child.type as { __curvedTabsRole?: string })
        ?.__curvedTabsRole;

      if (role === "indicator") {
        hasIndicator = true;
        return;
      }
      if (role === "list") {
        visit((child.props as { children?: ReactNode }).children);
        return;
      }
      if (role === "trigger") {
        const props = child.props as ITriggerProps;
        if (props.name == null) return;
        tabs.push({
          name: props.name,
          render: props.children != null ? () => props.children : undefined,
        });
      }
    });
  };

  visit(children);
  return { tabs, hasIndicator };
}

export { parseTabChildren };
