import { Ionicons } from "@expo/vector-icons";
import { SymbolView, type SymbolViewProps } from "expo-symbols";
import { Platform } from "react-native";

type IconName = keyof typeof ICON_MAP;

/** SF Symbol name -> Ionicons fallback for Android. */
const ICON_MAP = {
  "square.and.arrow.up": "share-outline",
  bookmark: "bookmark-outline",
  "bookmark.fill": "bookmark",
  "checkmark.seal.fill": "checkmark-circle",
  "chevron.right": "chevron-forward",
  magnifyingglass: "search",
  "heart.fill": "heart",
  "square.grid.2x2.fill": "grid",
  "rectangle.stack.fill": "albums",
  "gearshape.fill": "settings-sharp",
  "plus": "add",
  "ellipsis": "ellipsis-horizontal",
} as const satisfies Record<string, React.ComponentProps<typeof Ionicons>["name"]>;

type AppIconProps = {
  name: IconName;
  size?: number;
  color?: string;
  weight?: SymbolViewProps["weight"];
};

function AppIcon({ name, size = 20, color = "#1A1A1A", weight = "semibold" }: AppIconProps) {
  if (Platform.OS === "ios") {
    return (
      <SymbolView
        name={name as SymbolViewProps["name"]}
        size={size}
        tintColor={color}
        weight={weight}
        resizeMode="scaleAspectFit"
      />
    );
  }

  return <Ionicons name={ICON_MAP[name]} size={size} color={color} />;
}

export { AppIcon };
export type { IconName };
