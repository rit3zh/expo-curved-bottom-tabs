import { IGlassBeads } from "@/interfaces/glass-beads.interface";
import { beadStyle } from "@/lib/bead-style";
import { GlassContainer, GlassView } from "expo-glass-effect";
import React from "react";
import { StyleSheet } from "react-native";

const GlassBeads: React.FC<IGlassBeads> = ({
  beads,
  thickness,
  glassEffectStyle,
  tintColor,
  isInteractive,
}: IGlassBeads & React.ComponentProps<typeof GlassBeads>): React.ReactNode &
  React.ReactElement => {
  return (
    <GlassContainer spacing={thickness} style={StyleSheet.absoluteFill}>
      {beads.map((b, i) => (
        <GlassView
          key={i}
          glassEffectStyle={glassEffectStyle}
          tintColor={tintColor}
          isInteractive={isInteractive}
          style={[styles.bead, beadStyle(b, thickness)]}
        />
      ))}
    </GlassContainer>
  );
};

const styles = StyleSheet.create({
  bead: {
    position: "absolute",
  },
});

export { GlassBeads };
