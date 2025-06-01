'use client';

import { Switch } from '@heroui/switch';
import { useTheme } from '@heroui/use-theme';
import { MoonIcon, SunIcon } from 'constants/icons';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  const handleChange = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Switch
      isSelected={isDark}
      onChange={handleChange}
      color="primary"
      size="lg"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    />
  );
}
