"use client"
import React, { useState } from 'react'
import Logo from "@/components/Logo";
import NavLinks from './NavLinks';
import { Button } from './ui/button';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between items-center py-2 mb-9 border-b border-gray-500 px-4">
        <Logo />
        
        {/* Desktop Navigation */}
        <NavLinks isMobile={false} setMobileMenuOpen={setMobileMenuOpen} />
        
        <div className="flex items-center gap-4">
          {/* Get Franchise Button - Visible on all screens */}
          <Button
            asChild
            variant="personal"
            className="rounded-full text-sm md:text-lg"
            size="default"
          >
            <Link href="/get-franchise">Get Franchise</Link>
          </Button>
          
          {/* Hamburger Menu Button - Visible only on mobile */}
          <button
            className="md:hidden p-2 relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#b79652] " />
            ) : (
              <Menu className="h-6 w-6 text-[#b79652]" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay backdrop when sidebar is open */}
      <div
        className={`
          fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300
          ${mobileMenuOpen ? 'opacity-100 z-30' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={`
          fixed md:hidden top-0 right-0 h-screen w-3/4 bg-[#ecded3]
          transform transition-transform duration-300 ease-in-out z-40
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-4 pt-16">
          <NavLinks isMobile={true} setMobileMenuOpen={setMobileMenuOpen} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;