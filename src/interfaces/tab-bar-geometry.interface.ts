import type { ICurvedArc } from "./curved-arc.interface";
import type { IPoint } from "./points.interface";

interface ITabBarGeometry {
  arc: ICurvedArc;
  radius: number;
  centerX: number;
  centerY: number;
  halfSpan: number;
  innerWidth: number;
  barHeight: number;
  slotWidth: number;
  pillWidth: number;
  tabCenters: number[];
  beads: IPoint[];
  centerlineY: (x: number) => number;
}

export type { ITabBarGeometry };
