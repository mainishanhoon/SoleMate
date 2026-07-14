import { useTheme } from 'next-themes';
import {
  LineMdSunnyFilledLoopToMoonFilledLoopTransition,
  LineMdSunRisingTwoToneLoop,
} from '@/components/icons';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="size-6 bg-transparent" aria-hidden="true" />
    );
  }
  return (
    <span
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="cursor-pointer"
    >
      {theme === 'dark' ? (
        <LineMdSunRisingTwoToneLoop className="size-6" />
      ) : (
        <LineMdSunnyFilledLoopToMoonFilledLoopTransition className="size-6" />
      )}
    </span>
  );
}
