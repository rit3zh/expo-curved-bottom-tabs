import type { IBead } from "./bead.interface";

interface ICurvedGlassGeometry {
  beads: IBead[];
  svgPath: string;
  contentHeight: number;
}

export type { ICurvedGlassGeometry };
