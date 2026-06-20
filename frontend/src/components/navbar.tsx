'use client';

import { useState } from 'react';
import { Avatar, Link } from '@heroui/react';
import { Volleyball } from '@solar-icons/react-perf/BoldDuotone';

import { siteConfig } from '@/config/site';
import ThemeSwitch from '@/components/theme-switch';
import SearchInput from '@/components/SearchInput.tsx';
import { GithubIcon } from '@/components/icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-separator bg-background/70 sticky top-0 z-40 w-full border-b backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-4">
          <a
            className="text-accent dark:text-accent-hover flex items-center gap-1"
            href="/"
          >
            <Volleyball size={42} />
            <p className="text-xl font-bold">SoleMate</p>
          </a>
        </div>

        <div className="hidden w-full max-w-xl lg:flex">
          <SearchInput />
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            aria-label="Github"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="text-foreground" />
          </Link>
          <ThemeSwitch />
          <div className="hidden md:flex">
            <Avatar size="sm">
              <Avatar.Image
                alt="Medium Avatar"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg"
              />
              <Avatar.Fallback>MD</Avatar.Fallback>
            </Avatar>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <Link
            aria-label="Github"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="text-foreground" />
          </Link>
          <ThemeSwitch />
          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-separator border-t sm:hidden">
          <div className="p-4">
            <SearchInput />
          </div>
        </div>
      )}
    </nav>
  );
}
