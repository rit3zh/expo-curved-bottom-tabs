import type { ICurvedArc } from "@/interfaces/curved-arc.interface";

function tangentOnArc<T extends ICurvedArc>(arc: T, t: number): number {
  const a = arc.startAngle + (arc.endAngle - arc.startAngle) * t;
  return a + Math.PI / 2;
}

export { tangentOnArc };
