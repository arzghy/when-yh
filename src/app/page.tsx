// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import HomeNavbar from "@/layout/HomeNavbar";

export const metadata: Metadata = {
  title: "Welcome | TailAdmin - Next.js Dashboard Template",
  description: "This is Welcome page for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <HomeNavbar />
      
      {/* Main Content */}
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16">
            {/* Logo */}
            <div className="mb-8">
              <Image
                className="mx-auto dark:hidden"
                src="/images/logo/logo.svg"
                alt="TailAdmin Logo"
                width={240}
                height={64}
              />
              <Image
                className="mx-auto hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="TailAdmin Logo"
                width={240}
                height={64}
              />
            </div>

            {/* Welcome Content */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Welcome to <span className="text-brand-600 dark:text-brand-400">TailAdmin</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              Experience the power of our Next.js Dashboard Template with 
              comprehensive UI components and modern design patterns.
            </p>

            {/* Main CTA */}
            <div className="mb-16">
              <Link
                href="/beranda"
                className="inline-flex items-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                Explore Dashboard
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div id="features" className="scroll-mt-20">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose TailAdmin?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Built with modern technologies and best practices for exceptional performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-brand-100 dark:bg-brand-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Modern Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Clean and intuitive interface built with the latest technologies and design trends
                </p>
              </div>
              
              <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-brand-100 dark:bg-brand-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Responsive Design
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Perfectly optimized for all devices and screen sizes with mobile-first approach
                </p>
              </div>
              
              <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-brand-100 dark:bg-brand-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  High Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Built with Next.js for optimal speed, performance, and SEO optimization
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-brand-50 to-blue-50 dark:from-brand-900/20 dark:to-blue-900/20 rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">400+</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">UI Components</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">50+</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Ready Pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">100%</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Responsive</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">24/7</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div id="about" className="scroll-mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Start Building Today
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust TailAdmin for their dashboard needs
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Free
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}