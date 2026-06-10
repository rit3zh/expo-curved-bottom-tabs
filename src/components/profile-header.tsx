import { PROFILE } from "@/constants/app";
import { SAPRONA } from "@/constants/fonts";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { AppIcon } from "./app-icon";

function ProfileHeader() {
  return (
    <View style={styles.root}>
      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{PROFILE.name}</Text>
          <AppIcon name="checkmark.seal.fill" size={20} color="#2E9BFF" />
        </View>
        <View style={styles.subtitleRow}>
          <Text style={styles.badge}>{PROFILE.badge}</Text>
          <View style={styles.dot} />
          <Text style={styles.subtitle}>
            {PROFILE.shots.toLocaleString()} Shots
          </Text>
        </View>
      </View>

      <Image
        source={{ uri: PROFILE.picture }}
        style={styles.avatar}
        contentFit="cover"
        transition={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
  },
  info: {
    gap: 4,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  name: {
    fontFamily: SAPRONA.bold,
    fontSize: 30,
    color: "#0E0E0E",
    letterSpacing: -0.5,
  },
  subtitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  subtitle: {
    fontFamily: SAPRONA.semiBold,
    fontSize: 14,
    color: "#1d1d1d",
  },
  badge: {
    fontFamily: SAPRONA.semiBold,
    color: "#FF7A1A",
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#000000",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#DDEFFB",
  },
});

export { ProfileHeader };
