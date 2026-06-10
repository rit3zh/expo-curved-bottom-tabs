import type { IBead } from "@/interfaces/bead.interface";
import type { ICurvedGlassGeometry } from "@/interfaces/curved-glass-geometry.interface";
import { computeCurvedArc } from "./compute-curved-arc";
import { sampleArc } from "./sample";

function computeCurvedGlassGeometry(
  width: number,
  arcHeight: number,
  thickness: number,
  segments: number,
): ICurvedGlassGeometry {
  if (width <= 0) {
    return { beads: [], svgPath: "", contentHeight: thickness };
  }

  const arc = computeCurvedArc(width, arcHeight);
  const { points } = sampleArc(arc, segments);
  const ys = points.map((p) => p.y);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const contentHeight = maxY - minY + thickness;
  const offsetY = minY - thickness / 2;

  const beads: IBead[] = points.map((p) => ({
    left: p.x - thickness / 2,
    top: p.y - offsetY - thickness / 2,
  }));

  const start = points[0];
  const end = points[points.length - 1];
  const svgPath = `M ${start.x} ${start.y - offsetY} A ${arc.radius} ${arc.radius} 0 0 1 ${end.x} ${end.y - offsetY}`;

  return { beads, svgPath, contentHeight };
}

export { computeCurvedGlassGeometry };
