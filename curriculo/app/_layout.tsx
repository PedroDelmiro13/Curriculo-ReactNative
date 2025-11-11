import { Stack } from "expo-router";
import { useTheme } from "../hooks/useTheme";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

export default function Layout() {
  const { colors, isDark } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.card },
          headerTintColor: colors.text,
          contentStyle: { backgroundColor: colors.background },
          animation: "slide_from_right", // animação de transição entre telas
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
