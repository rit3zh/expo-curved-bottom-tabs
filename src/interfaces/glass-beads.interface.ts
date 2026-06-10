import type { GlassViewProps } from "expo-glass-effect";
import type { IBead } from "./bead.interface";

interface IGlassBeads extends Pick<
  GlassViewProps,
  "glassEffectStyle" | "tintColor" | "isInteractive"
> {
  beads: IBead[];
  thickness: number;
}

export type { IGlassBeads };
