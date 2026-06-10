import type { ICurvedArc } from "@/interfaces/curved-arc.interface";
import type { IPoint } from "@/interfaces/points.interface";

function pointOnArc(arc: ICurvedArc, t: number): IPoint {
  const a = arc.startAngle + (arc.endAngle - arc.startAngle) * t;
  return {
    x: arc.center.x + arc.radius * Math.cos(a),
    y: arc.center.y + arc.radius * Math.sin(a),
  };
}

export { pointOnArc };
