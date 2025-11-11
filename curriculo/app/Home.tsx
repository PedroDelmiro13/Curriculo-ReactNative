import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const { isDark } = useTheme();
  const [darkMode, setDarkMode] = useState(isDark);

  const colors = darkMode
    ? { 
        background: "#0f172a", 
        text: "#f1f5f9", 
        card: "#1e293b", 
        accent: "#3b82f6",
        shadow: "#020617"
      }
    : { 
        background: "#f8fafc", 
        text: "#1e293b", 
        card: "#ffffff", 
        accent: "#2563eb",
        shadow: "#cbd5e1"
      };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      <View style={[styles.header, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
        <Text style={[styles.title, { color: colors.text }]}>Meu Currículo</Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>Desenvolvedor</Text>
      </View>

      <View style={styles.linksContainer}>
        <Link href="/Sobre" asChild>
          <Pressable style={[styles.button, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
            <Text style={[styles.buttonText, { color: colors.text }]}>👤 Sobre</Text>
          </Pressable>
        </Link>

        <Link href="/Academica" asChild>
          <Pressable style={[styles.button, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
            <Text style={[styles.buttonText, { color: colors.text }]}>🎓 Formação</Text>
          </Pressable>
        </Link>

        <Link href="/Profissional" asChild>
          <Pressable style={[styles.button, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
            <Text style={[styles.buttonText, { color: colors.text }]}>💼 Experiência</Text>
          </Pressable>
        </Link>

        <Link href="/Projetos" asChild>
          <Pressable style={[styles.button, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
            <Text style={[styles.buttonText, { color: colors.text }]}>🚀 Projetos</Text>
          </Pressable>
        </Link>
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
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    padding: 30,
    borderRadius: 20,
    marginBottom: 30,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  linksContainer: {
    gap: 12,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  toggle: {
    marginTop: 30,
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  toggleText: {
    fontSize: 14,
    fontWeight: "600",
  },
});