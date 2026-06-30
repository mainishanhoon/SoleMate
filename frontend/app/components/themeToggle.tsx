import { useTheme } from 'next-themes';
import {
  LineMdSunnyFilledLoopToMoonFilledLoopTransition,
  LineMdSunRisingTwoToneLoop,
} from '@/components/icons';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

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
