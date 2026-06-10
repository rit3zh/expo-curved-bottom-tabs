import { SAPRONA } from "@/constants/fonts";
import type { GalleryCollection } from "@/constants/app";
import { Image } from "expo-image";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppIcon } from "./app-icon";

const THUMB_SIZE = 84;
const THUMB_GAP = 10;

function ActionButton({
  icon,
  active,
}: {
  icon: "share" | "bookmark";
  active?: boolean;
}) {
  return (
    <Pressable
      style={({ pressed }) => [styles.actionBtn, pressed && styles.actionBtnPressed]}
      hitSlop={6}
    >
      <AppIcon
        name={
          icon === "share"
            ? "square.and.arrow.up"
            : active
              ? "bookmark.fill"
              : "bookmark"
        }
        size={17}
        color={icon === "bookmark" && active ? "#1A1A1A" : "#222"}
      />
    </Pressable>
  );
}

function CollectionSection({ collection }: { collection: GalleryCollection }) {
  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{collection.title}</Text>
            <AppIcon name="chevron.right" size={15} color="#1A1A1A" />
          </View>
          <Text style={styles.meta}>
            {collection.images} Images · {collection.videos} Videos
          </Text>
        </View>
        <View style={styles.actions}>
          <ActionButton icon="share" />
          <ActionButton icon="bookmark" active={collection.saved} />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.thumbs}
      >
        {collection.thumbnails.map((uri, i) => (
          <Image
            key={`${uri}-${i}`}
            source={{ uri }}
            style={styles.thumb}
            contentFit="cover"
            transition={200}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 14,
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
    gap: 6,
  },
  title: {
    fontFamily: SAPRONA.bold,
    fontSize: 18,
    color: "#111",
  },
  meta: {
    fontFamily: SAPRONA.medium,
    fontSize: 13,
    color: "#9A9A9A",
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  actionBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtnPressed: {
    backgroundColor: "#E8E8E8",
  },
  thumbs: {
    paddingHorizontal: 22,
    gap: THUMB_GAP,
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: 18,
    backgroundColor: "#EFEFEF",
  },
});

export { CollectionSection };
