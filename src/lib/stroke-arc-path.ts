import type { ICurvedArc } from "@/interfaces/curved-arc.interface";
import type { IPoint } from "@/interfaces/points.interface";

export function strokedArcPath<T extends ICurvedArc>(
  arc: T,
  thickness: number,
): string {
  const h = thickness / 2;
  const { center, radius, startAngle, endAngle } = arc;
  const pt = (r: number, a: number): IPoint => ({
    x: center.x + r * Math.cos(a),
    y: center.y + r * Math.sin(a),
  });
  const outerStart = pt(radius + h, startAngle);
  const outerEnd = pt(radius + h, endAngle);
  const innerStart = pt(radius - h, startAngle);
  const innerEnd = pt(radius - h, endAngle);
  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${radius + h} ${radius + h} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
    `A ${h} ${h} 0 0 1 ${innerEnd.x} ${innerEnd.y}`,
    `A ${radius - h} ${radius - h} 0 0 0 ${innerStart.x} ${innerStart.y}`,
    `A ${h} ${h} 0 0 1 ${outerStart.x} ${outerStart.y}`,
    "Z",
  ].join(" ");
}
