import { type MenuRow, NativeMenuList } from "@/components/native-menu-list";
import { NativeSegmented } from "@/components/native-segmented";
import { PhotoGrid } from "@/components/photo-grid";
import { ProfileHeader } from "@/components/profile-header";
import { ScreenScaffold } from "@/components/screen-scaffold";
import { RANDOM_COLLECTION, RECENT_SAVES } from "@/constants/app";
import { SAPRONA } from "@/constants/fonts";
import { Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const STATS = [
  { label: "Posts", value: "248" },
  { label: "Followers", value: "12.4k" },
  { label: "Following", value: "180" },
];

const FILTERS = ["Posts", "Saved", "Tagged"] as const;

const MENU: MenuRow[] = [
  { symbol: "heart.fill", icon: "heart.fill", label: "Liked", tint: "#FF4D6D" },
  {
    symbol: "rectangle.stack.fill",
    icon: "rectangle.stack.fill",
    label: "Collections",
    tint: "#2E9BFF",
  },
  {
    symbol: "gearshape.fill",
    icon: "gearshape.fill",
    label: "Settings",
    tint: "#8A8A8A",
  },
];

export default function Profile() {
  const [filter, setFilter] = useState(0);
  const [notifications, setNotifications] = useState(true);

  const images = filter === 1 ? RANDOM_COLLECTION : RECENT_SAVES;

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          title: "‎ ‎ ‎ ",
        }}
      />

      <ScreenScaffold>
        <ProfileHeader />

        <View style={styles.stats}>
          {STATS.map((s, i) => (
            <View key={s.label} style={styles.statWrap}>
              <View style={styles.stat}>
                <Text style={styles.statValue}>{s.value}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
              </View>
              {i < STATS.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>
        <NativeSegmented
          options={FILTERS}
          selectedIndex={filter}
          onChange={setFilter}
        />
        <NativeMenuList
          rows={MENU}
          notificationsOn={notifications}
          onToggleNotifications={setNotifications}
        />

        <PhotoGrid images={[...images, ...images]} />
      </ScreenScaffold>
    </>
  );
}

const styles = StyleSheet.create({
  stats: {
    flexDirection: "row",
    marginHorizontal: 22,
    paddingVertical: 18,
    borderRadius: 22,
    backgroundColor: "#F6F6F6",
  },
  statWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  stat: {
    flex: 1,
    alignItems: "center",
    gap: 3,
  },
  statValue: {
    fontFamily: SAPRONA.bold,
    fontSize: 20,
    color: "#111",
  },
  statLabel: {
    fontFamily: SAPRONA.medium,
    fontSize: 12,
    color: "#9A9A9A",
  },
  divider: {
    width: 1,
    height: 28,
    backgroundColor: "#E4E4E4",
  },
});
