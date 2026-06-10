import { Stack } from "expo-router";
import { STACK_HEADER } from "@/constants/stack";

export default function LibraryStack() {
  return (
    <Stack screenOptions={STACK_HEADER}>
      <Stack.Screen
        name="index"
        options={{ title: "Library", headerLargeTitle: true }}
      />
    </Stack>
  );
}
