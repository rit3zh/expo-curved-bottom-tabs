import type { ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenScaffoldProps = {
  children: ReactNode;
  withHeader?: boolean;
};

function ScreenScaffold({ children, withHeader = false }: ScreenScaffoldProps) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: withHeader ? 12 : 0,
          paddingBottom: 150,
        },
      ]}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    gap: 24,
  },
});

export { ScreenScaffold };
