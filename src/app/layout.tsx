import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Technosolution Steel - Металлоизделия',
  description: 'Производство и поставка качественных металлоизделий: арматура, трубы, листовой прокат, профили',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-mantine-color-scheme="light"
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider
          theme={{
            colors: {
              dark: [
                '#C1C2C5',
                '#A6A7AB',
                '#909296',
                '#5c5f66',
                '#373A40',
                '#2C2E33',
                '#25262b',
                '#1A1B1E',
                '#141517',
                '#0a0a0a',
              ],
            },
            primaryColor: 'blue',
            defaultRadius: 'md',
          }}
          defaultColorScheme="dark"
        >
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
