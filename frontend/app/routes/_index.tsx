import { Link } from 'react-router';
import { MdiGithubBox } from '@/components/icons';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-muted-foreground from-accent via-accent/20 to-accent/20 dark:to-background flex min-h-dvh flex-col items-center justify-center bg-gradient-to-b px-4"
    >
      <div className="mb-8 flex w-full justify-center">
        <Link
          to="https://github.com/mainishanhoon/SoleMate"
          target="_blank"
          className="border-muted-foreground inline-flex items-center justify-center space-x-2 rounded-lg border-2 border-dashed px-4 py-1.5 font-medium"
        >
          <MdiGithubBox className="size-6" />
          <span className="font-medium">Visit GitHub Directory</span>
        </Link>
      </div>

      <h1 className="font-bricolage dark:text-muted text-center text-4xl font-bold md:text-6xl lg:text-8xl">
        Find Your SoleMate <br />& Walk With Confidence.
      </h1>

      <p className="mx-auto mt-8 max-w-md text-center font-mono tracking-tighter md:text-2xl lg:max-w-3xl">
        Explore thousands of styles from global brands. Find your perfect pair
        for any journey today.
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          to={{ pathname: '/products' }}
          className="bg-foreground text-accent cursor-pointer rounded-lg px-2 py-1 font-bold transition-transform hover:scale-105"
        >
          Find Your Match !!
        </Link>
      </div>
    </section>
  );
}
