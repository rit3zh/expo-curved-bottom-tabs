import { Stack } from "expo-router";
import { STACK_HEADER } from "@/constants/stack";

export default function SearchStack() {
  return (
    <Stack screenOptions={STACK_HEADER}>
      <Stack.Screen
        name="index"
        options={{ title: "Explore", headerLargeTitle: true }}
      />
    </Stack>
  );
}
