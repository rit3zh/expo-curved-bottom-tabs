import { ScreenScaffold } from "@/components/screen-scaffold";
import { RANDOM_COLLECTION, RECENT_SAVES } from "@/constants/app";
import { SAPRONA } from "@/constants/fonts";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const CATEGORIES = [
  { title: "Landscapes", count: 128, cover: RECENT_SAVES[0] },
  { title: "Portraits", count: 96, cover: RANDOM_COLLECTION[0] },
  { title: "Abstract", count: 74, cover: RECENT_SAVES[2] },
  { title: "Anime", count: 210, cover: RANDOM_COLLECTION[2] },
];

export default function Apps() {
  return (
    <ScreenScaffold withHeader>
      <View style={styles.grid}>
        {CATEGORIES.map((cat) => (
          <View key={cat.title} style={styles.card}>
            <Image
              source={{ uri: cat.cover }}
              style={StyleSheet.absoluteFill}
              contentFit="cover"
              transition={200}
            />
            <View style={[StyleSheet.absoluteFill, styles.overlay]} />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{cat.title}</Text>
              <Text style={styles.cardCount}>{cat.count} items</Text>
            </View>
          </View>
        ))}
      </View>
    </ScreenScaffold>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 22,
  },
  card: {
    width: "47.6%",
    flexGrow: 1,
    height: 150,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "#EFEFEF",
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.28)",
  },
  cardText: {
    padding: 14,
    gap: 2,
  },
  cardTitle: {
    fontFamily: SAPRONA.bold,
    fontSize: 17,
    color: "#fff",
  },
  cardCount: {
    fontFamily: SAPRONA.medium,
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
  },
});
