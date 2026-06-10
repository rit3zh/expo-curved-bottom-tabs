import { SPECIAL_MEMORIES } from "@/constants/app";
import { SAPRONA } from "@/constants/fonts";
import { Image } from "expo-image";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppIcon } from "./app-icon";

const MEMORY_LABELS = ["Golden Hour", "City Lights", "Solitude", "Wanderlust"];

/**
 * "Special Memories" — a highlighted, large-format gallery to close the home
 * screen. These are featured, so the cards are big and bold.
 */
function GalleryFooter() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.titleRow}>
            <AppIcon name="heart.fill" size={16} color="#FF4D6D" />
            <Text style={styles.title}>Special Memories</Text>
          </View>
          <Text style={styles.subtitle}>Moments worth keeping</Text>
        </View>
        <View style={styles.count}>
          <Text style={styles.countText}>{SPECIAL_MEMORIES.length}</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cards}
        snapToInterval={244 + 14}
        decelerationRate="fast"
      >
        {SPECIAL_MEMORIES.map((uri, i) => (
          <Pressable
            key={uri}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
          >
            <Image
              source={{ uri }}
              style={StyleSheet.absoluteFill}
              contentFit="cover"
              transition={250}
            />
            <View style={[StyleSheet.absoluteFill, styles.overlay]} />
            <View style={styles.badge}>
              <AppIcon name="bookmark.fill" size={13} color="#fff" />
            </View>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>
                {MEMORY_LABELS[i % MEMORY_LABELS.length]}
              </Text>
              <Text style={styles.cardMeta}>Memory · 2025</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
  },
  headerLeft: {
    gap: 3,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  title: {
    fontFamily: SAPRONA.bold,
    fontSize: 20,
    color: "#111",
  },
  subtitle: {
    fontFamily: SAPRONA.medium,
    fontSize: 13,
    color: "#9A9A9A",
  },
  count: {
    minWidth: 28,
    height: 28,
    paddingHorizontal: 9,
    borderRadius: 14,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    fontFamily: SAPRONA.bold,
    fontSize: 13,
    color: "#fff",
  },
  cards: {
    paddingHorizontal: 22,
    gap: 14,
  },
  card: {
    width: 244,
    height: 320,
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: "#EFEFEF",
    justifyContent: "flex-end",
  },
  cardPressed: {
    opacity: 0.92,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.22)",
  },
  badge: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(0,0,0,0.35)",
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    padding: 18,
    gap: 3,
  },
  cardTitle: {
    fontFamily: SAPRONA.bold,
    fontSize: 22,
    color: "#fff",
  },
  cardMeta: {
    fontFamily: SAPRONA.medium,
    fontSize: 13,
    color: "rgba(255,255,255,0.85)",
  },
});

export { GalleryFooter };
