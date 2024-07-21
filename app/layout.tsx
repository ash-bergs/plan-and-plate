import '@mantine/core/styles.css';
import React from 'react';
import { Provider } from 'jotai';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import Layout from '@/components/Layout';

export const metadata = {
  title: 'Plan & Plate',
  description: 'Plan your meals from start to finish.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Provider>
          <MantineProvider forceColorScheme="light" theme={theme}>
            <Layout>{children}</Layout>
          </MantineProvider>
        </Provider>
      </body>
    </html>
  );
}
