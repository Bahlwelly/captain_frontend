import { ThemeProvider, useTheme } from "@/components/Theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

function LayoutWithTheme() {
  const { mode, theme } = useTheme();

  return (
    <>
      <StatusBar
        style={mode === "dark" ? "light" : "dark"}
        backgroundColor={theme.backGround}
      />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutWithTheme />
    </ThemeProvider>
  );
}
