import { ICurvedArc } from "@/interfaces/curved-arc.interface";
import { pointOnArc } from "./point-on-arc";

function arcToSvgPath<T extends ICurvedArc>(arc: T): string {
  const start = pointOnArc(arc, 0);
  const end = pointOnArc(arc, 1);
  return `M ${start.x} ${start.y} A ${arc.radius} ${arc.radius} 0 0 1 ${end.x} ${end.y}`;
}

export { arcToSvgPath };
