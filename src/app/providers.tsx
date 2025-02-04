'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme-provider';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    // <SessionProvider>
      // <ThemeProvider
      //   attribute="class"
      //   defaultTheme="dark"
      //   enableSystem
      //   disableTransitionOnChange
      // >
      //   {/* <RecoilRoot>{children}</RecoilRoot> */}
      // </ThemeProvider>
      <div className='bg-[#ecded3]' >{children}</div>
    // </SessionProvider>
  );
};
