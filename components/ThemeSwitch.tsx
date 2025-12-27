import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from './Theme';
const TOGGLE_COLORS = {
  activeBg: '#0B0D22',   // always dark
  inactiveBg: '#F5F7FA', // always light
  activeText: '#F5F7FA',
  inactiveText: '#0B0D22',
  border: '#0F1235',
};

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();

  const isLightActive = mode === 'light';
  const isDarkActive = mode === 'dark';

  return (
    <View style={[styles.container, { borderColor: TOGGLE_COLORS.border }]}>

      {/* LIGHT */}
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: isLightActive
              ? TOGGLE_COLORS.inactiveBg
              : TOGGLE_COLORS.activeBg,
          },
        ]}
        disabled={isLightActive}
        onPress={toggleTheme}
      >
        <Text
          style={[
            styles.text,
            {
              color: isLightActive
                ? TOGGLE_COLORS.inactiveText
                : TOGGLE_COLORS.activeText,
            },
          ]}
        >
          Light
        </Text>
      </Pressable>

      {/* DARK */}
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: isDarkActive
              ? TOGGLE_COLORS.inactiveBg
              : TOGGLE_COLORS.activeBg,
          },
        ]}
        disabled={isDarkActive}
        onPress={toggleTheme}
      >
        <Text
          style={[
            styles.text,
            {
              color: isDarkActive
                ? TOGGLE_COLORS.inactiveText
                : TOGGLE_COLORS.activeText,
            },
          ]}
        >
          Dark
        </Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ThemeToggle;
