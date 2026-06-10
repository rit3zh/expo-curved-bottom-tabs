import { COLLECTIONS } from "@/constants/app";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CollectionSection } from "./collection-section";
import { GalleryFooter } from "./gallery-footer";
import { ProfileHeader } from "./profile-header";

function GalleryScreen() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          title: "‎ ‎ ‎ ",
        }}
      />
      <Stack.Toolbar placement="right">
        <Stack.Toolbar.Button icon={"bell.fill"} separateBackground>
          <Stack.Toolbar.Badge
            style={{
              backgroundColor: "#FF3B30",
            }}
          >
            4
          </Stack.Toolbar.Badge>
        </Stack.Toolbar.Button>
        <Stack.Toolbar.Button
          icon={"line.3.horizontal.decrease"}
        ></Stack.Toolbar.Button>
      </Stack.Toolbar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top * 2, paddingBottom: 150 },
        ]}
      >
        <ProfileHeader />

        <View style={styles.sections}>
          {COLLECTIONS.map((collection) => (
            <CollectionSection key={collection.title} collection={collection} />
          ))}
        </View>

        <GalleryFooter />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    gap: 28,
  },
  sections: {
    gap: 28,
  },
});

export { GalleryScreen };
