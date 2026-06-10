import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

function PhotoGrid({ images }: { images: string[] }) {
  const columns: string[][] = [[], []];
  images.forEach((uri, i) => columns[i % 2].push(uri));

  return (
    <View style={styles.row}>
      {columns.map((col, c) => (
        <View key={c} style={styles.col}>
          {col.map((uri, i) => (
            <Image
              key={`${uri}-${i}`}
              source={{ uri }}
              style={[styles.img, { height: (i + c) % 2 === 0 ? 200 : 150 }]}
              contentFit="cover"
              transition={200}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 22,
  },
  col: {
    flex: 1,
    gap: 12,
  },
  img: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#EFEFEF",
  },
});

export { PhotoGrid };
