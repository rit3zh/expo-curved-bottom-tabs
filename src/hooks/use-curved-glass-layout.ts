import { IUseCurvedGlassLayout } from "@/interfaces/curved-glass.interface";
import { useCallback, useMemo, useState } from "react";
import type { LayoutChangeEvent } from "react-native";
import { computeCurvedGlassGeometry } from "../lib/compute-curved-geometry";

function useCurvedGlassLayout(
  arcHeight: number,
  thickness: number,
  segments: number,
): IUseCurvedGlassLayout {
  const [width, setWidth] = useState(0);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    setWidth((prev) => (w !== prev ? w : prev));
  }, []);

  const geometry = useMemo(
    () => computeCurvedGlassGeometry(width, arcHeight, thickness, segments),
    [width, arcHeight, thickness, segments],
  );

  return { width, onLayout, ...geometry };
}

export { useCurvedGlassLayout };
