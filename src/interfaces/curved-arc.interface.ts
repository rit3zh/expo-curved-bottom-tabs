import { IPoint } from "./points.interface";

interface ICurvedArc {
  center: IPoint;
  radius: number;
  startAngle: number;
  endAngle: number;
}

export type { ICurvedArc };
