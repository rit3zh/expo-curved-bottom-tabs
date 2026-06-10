import { IGlassBeads } from "@/interfaces/glass-beads.interface";
import { beadStyle } from "@/lib/bead-style";
import React from "react";
import { StyleSheet, View } from "react-native";

const FallbackBeads: React.FC<IGlassBeads> = ({
  beads,
  thickness,
  tintColor,
}: Pick<IGlassBeads, "beads" | "thickness" | "tintColor">): React.ReactNode &
  React.ReactElement => {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {beads.map((b, i) => (
        <View
          key={i}
          style={[
            styles.bead,
            beadStyle(b, thickness),
            { backgroundColor: tintColor ?? "rgba(255,255,255,0.12)" },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bead: {
    position: "absolute",
  },
});

export { FallbackBeads };
