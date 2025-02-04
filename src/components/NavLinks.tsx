'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import Logo from "@/components/Logo";

function NavLinks({ isMobile, setMobileMenuOpen }:{ isMobile?: boolean, setMobileMenuOpen?: (open: boolean) => void }) {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/allproducts', label: 'All Products' },
    { path: '/awards', label: 'Awards' },
    { path: '/news', label: 'News' },
    { path: '/gallery', label: 'Gallery' },
  ];

  const pathname = usePathname();

  return (
    <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex items-center space-x-8'}`}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.path}
          //@ts-ignore
          onClick={() => isMobile && setMobileMenuOpen(false)}
          className={`nav-link text-lg hover:text-[#b11f29] transition-colors duration-200 ${
            pathname === item.path ? 'text-[#b11f29] font-semibold' : ''
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavLinks;