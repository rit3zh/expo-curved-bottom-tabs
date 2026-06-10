import { SAPRONA } from "@/constants/fonts";
import { Stack } from "expo-router";
import type { ComponentProps } from "react";

type StackScreenOptions = NonNullable<
  ComponentProps<typeof Stack.Screen>["options"]
>;

const STACK_HEADER = {
  headerTintColor: "#111111",
  headerTitleStyle: {
    fontFamily: SAPRONA.semiBold,
    fontSize: 17,
    color: "#111111",
  },
} satisfies StackScreenOptions;

export { STACK_HEADER };
export type { StackScreenOptions };
