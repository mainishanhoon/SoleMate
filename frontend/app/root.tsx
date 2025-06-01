import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import './tailwind.css';
import { Fragment } from 'react/jsx-runtime';
import { Footer } from 'pages/Footer';
import { Header } from 'pages/Header';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Google+Sans:400,500,700|Google+Sans+Text:400,500,700|Google+Sans+Display:400,500,700|Roboto:400,500,700&display=swap',
  },
];

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AppLayout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </AppLayout>
      </body>
    </html>
  );
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      <main className='container'>{children}</main>
      <Footer />
    </Fragment>
  );
}
