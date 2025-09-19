"use client";
import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const HomeNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-800/20 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                className="h-8 w-auto dark:hidden"
                src="/images/logo/logo.svg"
                alt="TailAdmin Logo"
                width={150}
                height={32}
              />
              <Image
                className="h-8 w-auto hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="TailAdmin Logo"
                width={150}
                height={32}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link 
                href="/beranda" 
                className="text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Dashboard
              </Link>
              <Link 
                href="#features" 
                className="text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Features
              </Link>
              <Link 
                href="#about" 
                className="text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>

            {/* Theme Toggle */}
            <ThemeToggleButton />

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <Link
                href="/signin"
                className="text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggleButton />
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-800/20">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <Link 
                href="/beranda" 
                className="block text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="#features" 
                className="block text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#about" 
                className="block text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700"></div>

            {/* Mobile Auth Buttons */}
            <div className="space-y-3 px-3">
              <Link
                href="/signin"
                className="block w-full text-center text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 px-4 py-3 text-base font-medium border border-gray-300 dark:border-gray-600 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;