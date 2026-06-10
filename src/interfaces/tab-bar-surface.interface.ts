import type { ICurvedArc } from "./curved-arc.interface";
import type { IPoint } from "./points.interface";

interface ITabBarSurface {
  arc: ICurvedArc;
  beads: IPoint[];
  width: number;
  barHeight: number;
  glass: boolean;
}

export type { ITabBarSurface };
