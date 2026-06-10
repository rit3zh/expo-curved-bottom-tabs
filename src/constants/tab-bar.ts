import type { ITabMeta } from "@/interfaces/tab-bar.interface";

const ARC_HEIGHT = 16;
const THICKNESS = 64;
const BAR_MARGIN = 14;
const EDGE_PAD = 12;
const PILL_HEIGHT = 50;
const ICON_SIZE = 23;
const ICON_BOX = 44;

const SPRING_LEAD = { stiffness: 680, damping: 43, mass: 0.3 };
const SPRING_TRAIL = { stiffness: 150, damping: 19, mass: 1 };

const TAB_META: Record<string, ITabMeta> = {
  index: { icon: "house.fill", fallback: "home-sharp" },
  search: { icon: "magnifyingglass", fallback: "search-sharp" },
  apps: { icon: "square.grid.2x2", fallback: "apps-sharp" },
  library: { icon: "book.fill", fallback: "book-sharp" },
  profile: { icon: "person.crop.circle", fallback: "person-sharp" },
};

const DEFAULT_TAB_META: ITabMeta = {
  icon: "circle",
  fallback: "at-circle",
};

export {
  ARC_HEIGHT,
  BAR_MARGIN,
  DEFAULT_TAB_META,
  EDGE_PAD,
  ICON_BOX,
  ICON_SIZE,
  PILL_HEIGHT,
  SPRING_LEAD,
  SPRING_TRAIL,
  TAB_META,
  THICKNESS,
};
