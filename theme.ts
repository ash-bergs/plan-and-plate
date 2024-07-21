'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    dark: [
      '#f6f7f7',
      '#e1e6e3',
      '#c0c9c4',
      '#9eaaa4',
      '#798881',
      '#5e6e66',
      '#4a5751',
      '#3e4743',
      '#343b38',
      '#2e3331',
      '#181b1a',
    ],
  },
  components: {
    NavLink: {
      styles: {
        root: {
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        },
        label: { color: '#252323', fontWeight: 'semibold', fontSize: '24px' },
        section: { color: '#252323' },
      },
    },
  },
});
