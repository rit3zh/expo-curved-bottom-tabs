import { BAR_MARGIN, PILL_HEIGHT } from "@/constants/tab-bar";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrap: { position: "absolute", left: 0, right: 0, bottom: 0 },
  bar: {
    marginHorizontal: BAR_MARGIN,
    shadowColor: "#000",
    shadowOpacity: 0.16,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
  },
  pill: { position: "absolute", height: PILL_HEIGHT },
  pillFill: { flex: 1, borderRadius: PILL_HEIGHT / 2 },
  pillFallback: { backgroundColor: "rgba(99,99,102,0.5)" },
  pressRow: { flexDirection: "row" },
  press: { flex: 1 },
});

export { styles };
