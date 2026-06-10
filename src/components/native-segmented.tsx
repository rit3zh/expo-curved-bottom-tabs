import { SAPRONA } from "@/constants/fonts";
import { Host, Picker, Text as SwiftText } from "@expo/ui/swift-ui";
import { pickerStyle, tag, tint } from "@expo/ui/swift-ui/modifiers";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

type NativeSegmentedProps = {
  options: readonly string[];
  selectedIndex: number;
  onChange: (index: number) => void;
};

function NativeSegmented({
  options,
  selectedIndex,
  onChange,
}: NativeSegmentedProps) {
  if (Platform.OS === "ios") {
    return (
      <Host style={styles.host} colorScheme="light">
        <Picker<number>
          modifiers={[pickerStyle("segmented"), tint("#2E9BFF")]}
          selection={selectedIndex}
          onSelectionChange={onChange}
        >
          {options.map((opt, i) => (
            <SwiftText key={opt} modifiers={[tag(i)]}>
              {opt}
            </SwiftText>
          ))}
        </Picker>
      </Host>
    );
  }

  return (
    <View style={styles.segment}>
      {options.map((opt, i) => (
        <Pressable
          key={opt}
          onPress={() => onChange(i)}
          style={[styles.segBtn, selectedIndex === i && styles.segBtnActive]}
        >
          <Text
            style={[
              styles.segText,
              selectedIndex === i && styles.segTextActive,
            ]}
          >
            {opt}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  host: {
    height: 36,
    marginHorizontal: 22,
  },
  segment: {
    flexDirection: "row",
    gap: 6,
    marginHorizontal: 22,
    padding: 4,
    borderRadius: 16,
    backgroundColor: "#F4F4F4",
  },
  segBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  segBtnActive: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  segText: {
    fontFamily: SAPRONA.semiBold,
    fontSize: 14,
    color: "#9A9A9A",
  },
  segTextActive: {
    color: "#111",
  },
});

export { NativeSegmented };
