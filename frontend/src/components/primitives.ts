import { tv } from 'tailwind-variants';

export const title = tv({
  base: 'tracking-tight inline font-semibold',
  variants: {
    color: {
      violet: 'from-[#FF1CF7] to-[#B249F8]',
      yellow: 'from-[#FF705B] to-[#FFB457]',
      blue: 'from-[#5EA2EF] to-[#0072F5]',
      cyan: 'from-[#00B7FA] to-[#01CFEA]',
      green: 'from-[#6FEE8D] to-[#17C964]',
      pink: 'from-[#FF72E1] to-[#F54C7A]',
      foreground: 'dark:from-[#FFFFFF] dark:to-[#4B4B4B]',
      white: 'text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]',
    },
    size: {
      sm: 'text-3xl lg:text-4xl',
      md: 'text-[2.3rem] lg:text-5xl',
      lg: 'text-4xl lg:text-6xl',
    },
    fullWidth: {
      true: 'w-full block',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  compoundVariants: [
    {
      color: [
        'violet',
        'yellow',
        'blue',
        'cyan',
        'green',
        'pink',
        'foreground',
      ],
      class: 'bg-clip-text text-transparent bg-gradient-to-b',
    },
  ],
});

export const subtitle = tv({
  base: 'w-full md:w-1/2 my-2 text-lg lg:text-xl text-muted block max-w-full',
  variants: {
    fullWidth: {
      true: '!w-full',
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const liquidGlass = tv({
  base: 'backdrop-liquid-glass relative overflow-hidden text-center justify-center border shadow-2xl',
  variants: {
    intensity: {
      subtle: 'border-white/[0.06] shadow-black/20',
      medium: 'border-white/10 shadow-black/40',
      strong: 'border-white/20 shadow-black/60',
    },
    radius: {
      md: 'rounded-xl',
      lg: 'rounded-2xl',
      xl: 'rounded-[24px]',
      full: 'rounded-[32px]',
    },
    interactive: {
      true: 'transition-all duration-300 hover:border-white/20 hover:scale-[1.01] active:scale-[0.99]',
    },
  },
  defaultVariants: {
    intensity: 'medium',
    radius: 'full',
  },
});
