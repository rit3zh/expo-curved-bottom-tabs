import type { ICurvedGlassView } from "@/interfaces/glass-view.interface";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useCurvedGlassLayout } from "../hooks/use-curved-glass-layout";
import { GlassBeads } from "./glass-beads";
import { FallbackBeads } from "./glass-beards-(fallback)";
import { GlassRim } from "./glass-rim";

const CurvedGlassView: React.FC<ICurvedGlassView> = ({
  arcHeight = 90,
  thickness = 64,
  glassEffectStyle = "clear",
  tintColor,
  segments = 24,
  isInteractive = false,
  showRim = true,
  style,
}: ICurvedGlassView &
  React.ComponentProps<typeof CurvedGlassView>): React.ReactNode &
  React.ReactElement => {
  const { width, onLayout, beads, svgPath, contentHeight } =
    useCurvedGlassLayout(arcHeight, thickness, segments);

  return (
    <View style={[styles.root, style]} onLayout={onLayout}>
      <View style={{ height: contentHeight }}>
        {isLiquidGlassAvailable() ?
          <GlassBeads
            beads={beads}
            thickness={thickness}
            glassEffectStyle={glassEffectStyle}
            tintColor={tintColor}
            isInteractive={isInteractive}
          />
        : <FallbackBeads
            beads={beads}
            thickness={thickness}
            tintColor={tintColor}
          />
        }

        {showRim && width > 0 ?
          <GlassRim
            svgPath={svgPath}
            width={width}
            height={contentHeight}
            thickness={thickness}
          />
        : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
  },
});

export default CurvedGlassView;
