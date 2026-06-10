import { AppIcon, type IconName } from "@/components/app-icon";
import { SAPRONA } from "@/constants/fonts";
import {
  Host,
  HStack,
  Image,
  Label,
  List,
  Section,
  Spacer,
  Toggle,
} from "@expo/ui/swift-ui";
import {
  foregroundStyle,
  listStyle,
  onTapGesture,
  scrollDisabled,
} from "@expo/ui/swift-ui/modifiers";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import type { SFSymbol } from "sf-symbols-typescript";

type MenuRow = {
  /** SF Symbol name (iOS) */
  symbol: SFSymbol;
  /** Ionicons-mapped name used by AppIcon (Android fallback) */
  icon: IconName;
  label: string;
  tint: string;
  onPress?: () => void;
};

type NativeMenuListProps = {
  rows: MenuRow[];
  notificationsOn: boolean;
  onToggleNotifications: (v: boolean) => void;
};

/**
 * Native iOS settings list via SwiftUI `List` + `Section` + `Label`.
 * Falls back to a styled RN list on Android.
 */
function NativeMenuList({
  rows,
  notificationsOn,
  onToggleNotifications,
}: NativeMenuListProps) {
  if (Platform.OS === "ios") {
    return (
      <Host style={styles.host} colorScheme="light">
        <List modifiers={[listStyle("insetGrouped"), scrollDisabled(true)]}>
          <Section title="Library">
            {rows.map((row) => (
              <HStack
                key={row.label}
                modifiers={[onTapGesture(row.onPress ?? (() => {}))]}
              >
                <Label
                  title={row.label}
                  systemImage={row.symbol}
                  modifiers={[foregroundStyle("#111111")]}
                />
                <Spacer />
                <Image systemName="chevron.right" size={13} color="#C4C4C4" />
              </HStack>
            ))}
          </Section>

          <Section title="Preferences">
            <Toggle
              label="Notifications"
              systemImage="bell.fill"
              isOn={notificationsOn}
              onIsOnChange={onToggleNotifications}
            />
          </Section>
        </List>
      </Host>
    );
  }

  return (
    <View style={styles.menu}>
      {rows.map((row) => (
        <Pressable
          key={row.label}
          onPress={row.onPress}
          style={({ pressed }) => [styles.menuItem, pressed && styles.pressed]}
        >
          <View style={styles.menuIcon}>
            <AppIcon name={row.icon} size={17} color="#111" />
          </View>
          <Text style={styles.menuLabel}>{row.label}</Text>
          <AppIcon name="chevron.right" size={15} color="#C4C4C4" />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  host: {
    height: 320,
    width: "100%",
  },
  menu: {
    marginHorizontal: 22,
    gap: 4,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  pressed: {
    opacity: 0.6,
  },
  menuIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
  },
  menuLabel: {
    flex: 1,
    fontFamily: SAPRONA.semiBold,
    fontSize: 15,
    color: "#111",
  },
});

export { NativeMenuList };
export type { MenuRow };
