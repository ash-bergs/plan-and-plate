'use client';

import { ReactNode } from 'react';
import { AppShell } from '@mantine/core';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: ReactNode;
};

// this AppShell component is really nice
// I feel like we spent a lot of time trying to create something like this with chakra
const Layout = ({ children }: LayoutProps) => (
  <AppShell
    padding="md"
    //header={{ height: 60 }}
    navbar={{
      width: 300,
      breakpoint: 'sm',
      collapsed: { mobile: true },
    }}
  >
    {/* <AppShell.Header>
      <p>Some stuff in the header</p>
    </AppShell.Header> */}
    <AppShell.Navbar>
      <Sidebar />
    </AppShell.Navbar>
    <AppShell.Main>{children}</AppShell.Main>
  </AppShell>
);

export default Layout;
