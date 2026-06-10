import { Stack } from "expo-router";
import { STACK_HEADER } from "@/constants/stack";

export default function AppsStack() {
  return (
    <Stack screenOptions={STACK_HEADER}>
      <Stack.Screen
        name="index"
        options={{ title: "Categories", headerLargeTitle: true }}
      />
    </Stack>
  );
}
