import { useFonts } from "expo-font";
import { Tabs } from "expo-router/tabs";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { CurvedTabBar } from "@/components";
import { SAPRONA_FONTS } from "@/constants/fonts";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts(SAPRONA_FONTS);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Tabs
        tabBar={(props) => <CurvedTabBar {...props} />}
        screenOptions={{ headerShown: false, animation: "shift" }}
        detachInactiveScreens={false}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="search" options={{ title: "Search" }} />
        <Tabs.Screen name="apps" options={{ title: "Apps" }} />
        <Tabs.Screen name="library" options={{ title: "Library" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
    </GestureHandlerRootView>
  );
}
