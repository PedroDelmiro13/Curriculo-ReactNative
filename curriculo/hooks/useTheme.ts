import { useColorScheme } from "react-native";

export const useTheme = () => {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  const colors = {
    background: isDark ? "#0d1117" : "#f9f9f9",
    text: isDark ? "#f5f5f5" : "#111",
    card: isDark ? "#161b22" : "#fff",
    accent: isDark ? "#58a6ff" : "#0077ff",
  };

  return { isDark, colors };
};