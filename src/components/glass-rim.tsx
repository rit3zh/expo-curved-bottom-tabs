import { IGlassRim } from "@/interfaces/glass-rim.interface";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const GlassRim: React.FC<IGlassRim> = ({
  svgPath,
  width,
  height,
  thickness,
}: IGlassRim & React.ComponentProps<typeof GlassRim>): React.ReactNode &
  React.ReactElement => {
  return (
    <Svg
      style={StyleSheet.absoluteFill}
      width={width}
      height={height}
      pointerEvents="none"
    >
      <Path
        d={svgPath}
        stroke="rgba(255,255,255,0.35)"
        strokeWidth={thickness}
        strokeLinecap="round"
        fill="none"
        opacity={0.18}
      />
      <Path
        d={svgPath}
        stroke="rgba(255,255,255,0.6)"
        strokeWidth={1.5}
        strokeLinecap="round"
        fill="none"
        transform={`translate(0 ${-thickness / 2 + 1})`}
      />
    </Svg>
  );
};

export { GlassRim };
