import { ICurvedArc } from "@/interfaces/curved-arc.interface";
import { IPoint } from "@/interfaces/points.interface";
import { pointOnArc } from "./point-on-arc";
import { tangentOnArc } from "./tanget-arc";

function sampleArc<T extends ICurvedArc>(
  arc: T,
  count: number,
): { points: IPoint[]; tangents: number[] } {
  const points: IPoint[] = [];
  const tangents: number[] = [];
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0.5 : i / (count - 1);
    points.push(pointOnArc(arc, t));
    tangents.push(tangentOnArc(arc, t));
  }
  return { points, tangents };
}

export { sampleArc };
