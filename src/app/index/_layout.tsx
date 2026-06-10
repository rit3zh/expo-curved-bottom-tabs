import { STACK_HEADER } from "@/constants/stack";
import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack screenOptions={STACK_HEADER}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
