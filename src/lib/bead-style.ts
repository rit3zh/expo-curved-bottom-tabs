import { IBead } from "@/interfaces/bead.interface";

const beadStyle = <T extends IBead>(b: T, thickness: number) => ({
  width: thickness,
  height: thickness,
  borderRadius: thickness / 2,
  left: b.left,
  top: b.top,
});

export { beadStyle };
