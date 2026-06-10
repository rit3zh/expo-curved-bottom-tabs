import { PhotoGrid } from "@/components/photo-grid";
import { ScreenScaffold } from "@/components/screen-scaffold";
import { RANDOM_COLLECTION, RECENT_SAVES } from "@/constants/app";
import { SAPRONA } from "@/constants/fonts";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TAGS = ["Nature", "Portraits", "Abstract", "3D", "Anime"];

export default function Search() {
  const insets = useSafeAreaInsets();
  return (
    <ScreenScaffold>
      <Stack.SearchBar placement="stacked" />
      <View
        style={[
          styles.tags,
          {
            paddingTop: 12,
          },
        ]}
      >
        {TAGS.map((tag, i) => (
          <View key={tag} style={[styles.tag, i === 0 && styles.tagActive]}>
            <Text style={[styles.tagText, i === 0 && styles.tagTextActive]}>
              {tag}
            </Text>
          </View>
        ))}
      </View>

      <PhotoGrid images={[...RECENT_SAVES, ...RANDOM_COLLECTION]} />
    </ScreenScaffold>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 22,
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#F4F4F4",
  },
  placeholder: {
    fontFamily: SAPRONA.medium,
    fontSize: 15,
    color: "#9A9A9A",
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingHorizontal: 22,
  },
  tag: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 14,
    backgroundColor: "#F4F4F4",
  },
  tagActive: {
    backgroundColor: "#111",
  },
  tagText: {
    fontFamily: SAPRONA.semiBold,
    fontSize: 13,
    color: "#555",
  },
  tagTextActive: {
    color: "#fff",
  },
});
