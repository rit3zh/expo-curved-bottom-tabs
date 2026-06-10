import type { ICurvedArc } from "@/interfaces/curved-arc.interface";
import type { IPoint } from "@/interfaces/points.interface";

function computeCurvedArc(width: number, height: number): ICurvedArc {
  const x = width / 2;
  const y = Math.max(height, 0.0001);
  const w = Math.sqrt(x * x + y * y);
  const phi = Math.atan2(x, y);
  const radius = w / 2 / Math.cos(phi);
  const center: IPoint = { x, y: radius };
  const theta = 2 * (Math.PI / 2 - phi);
  const startAngle = (3 * Math.PI) / 2 - theta;
  const endAngle = (3 * Math.PI) / 2 + theta;
  return { center, radius, startAngle, endAngle };
}

export { computeCurvedArc };
