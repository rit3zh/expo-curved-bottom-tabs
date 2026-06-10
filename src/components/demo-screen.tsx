import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function DemoScreen({ title, image }: { title: string; image: string }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.root}>
      <Image source={{ uri: image }} style={StyleSheet.absoluteFill} />
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 24, paddingBottom: 160 },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
        {Array.from({ length: 8 }).map((_, i) => (
          <View key={i} style={styles.card} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#111",
  },
  content: {
    paddingHorizontal: 20,
    gap: 14,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 8,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowRadius: 8,
  },
  card: {
    height: 110,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.22)",
  },
});
