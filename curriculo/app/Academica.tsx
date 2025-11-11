import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme } from "../hooks/useTheme";

export default function ExperienciaAcademica() {
  const { isDark } = useTheme();
  const [darkMode, setDarkMode] = useState(isDark);

  const colors = darkMode
    ? { background: "#0f172a", text: "#f1f5f9", card: "#1e293b", accent: "#3b82f6", shadow: "#020617" }
    : { background: "#f8fafc", text: "#1e293b", card: "#ffffff", accent: "#2563eb", shadow: "#cbd5e1" };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Formação Acadêmica</Text>

      <View style={[styles.card, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>Universidade Católica de Pernambuco</Text>
        <Text style={[styles.cardText, { color: colors.text }]}>Sistemas para Internet</Text>
        <Text style={[styles.cardText, { color: colors.text }]}>2024 - 2026</Text>
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>Curso Online - Alura</Text>
        <Text style={[styles.cardText, { color: colors.text }]}>Front-End com HTML CSS JAVASCRIPT</Text>
        <Text style={[styles.cardText, { color: colors.text }]}>Concluído em 2024</Text>
      </View>

      <Pressable 
        onPress={() => setDarkMode(!darkMode)} 
        style={[styles.toggle, { backgroundColor: colors.card, shadowColor: colors.shadow }]}
      >
        <Text style={[styles.toggleText, { color: colors.text }]}>
          {darkMode ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: { 
    padding: 16, 
    borderRadius: 12, 
    marginBottom: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardTitle: { fontWeight: "bold", fontSize: 18, marginBottom: 5 },
  cardText: { fontSize: 14, marginBottom: 3 },
  toggle: { 
    marginTop: 20, 
    padding: 12, 
    borderRadius: 12, 
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  toggleText: { fontWeight: "600", fontSize: 14 },
});