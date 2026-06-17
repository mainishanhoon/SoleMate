import { FC, useCallback } from 'react';
import { useTheme } from '@heroui/react';
import clsx from 'clsx';
import { Moon, Sun2 } from '@solar-icons/react-perf/BoldDuotone';

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme('light');

  const isLight = resolvedTheme === 'light';

  const toggleTheme = useCallback(() => {
    setTheme(isLight ? 'dark' : 'light');
  }, [isLight, setTheme]);

  if (!resolvedTheme) {
    return <div aria-hidden className="size-8" />;
  }

  return (
    <button
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      className={clsx(
        'cursor-pointer px-px transition-opacity hover:opacity-80',
        'inline-flex items-center justify-center',
        'h-auto w-auto rounded-lg border-none bg-transparent',
        className
      )}
      onClick={toggleTheme}
    >
      {isLight ? <Moon size={26} /> : <Sun2 size={26} />}
    </button>
  );
};
