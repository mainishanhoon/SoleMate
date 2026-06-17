'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { Avatar, InputGroup, Kbd, Link, TextField } from '@heroui/react';
import { RoundedMagnifier } from '@solar-icons/react-perf/BoldDuotone';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import { GithubIcon, Logo, TwitterIcon } from '@/components/icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const searchInput = (
    <TextField aria-label="Search" type="search">
      <InputGroup>
        <InputGroup.Prefix>
          <RoundedMagnifier className="text-muted pointer-events-none flex-shrink-0 text-base" />
        </InputGroup.Prefix>
        <InputGroup.Input className="text-sm" placeholder="Search..." />
        <InputGroup.Suffix>
          <Kbd className="hidden lg:inline-flex">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>K</Kbd.Content>
          </Kbd>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
  );

  return (
    <nav className="border-separator bg-background/70 sticky top-0 z-40 w-full border-b backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-4">
          <a className="flex items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </a>
          <ul className="ml-2 hidden gap-4 lg:flex">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <a
                  className={clsx(
                    'text-foreground hover:text-accent transition-colors',
                    'data-[active=true]:text-accent data-[active=true]:font-medium'
                  )}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex">{searchInput}</div>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            aria-label="Twitter"
            href={siteConfig.links.twitter}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon className="text-muted size-8" />
          </Link>
          <Link
            aria-label="Github"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="text-muted size-8" />
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
            <GithubIcon className="text-muted" />
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
          <div className="p-4">{searchInput}</div>
          <ul className="flex flex-col gap-2 px-4 pb-4">
            {siteConfig.navMenuItems.map((item, index) => (
              <li key={`${item.label}-${index}`}>
                <Link
                  className={clsx(
                    'block py-2 text-lg no-underline',
                    index === 2
                      ? 'text-accent'
                      : index === siteConfig.navMenuItems.length - 1
                        ? 'text-danger'
                        : 'text-foreground'
                  )}
                  href="#"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
