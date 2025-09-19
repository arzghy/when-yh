// 1. Pindahkan file src/app/(admin)/page.tsx ke src/app/page.tsx
// Ini akan membuat halaman welcome berada di luar grup (admin)

// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Welcome | TailAdmin - Next.js Dashboard Template",
  description: "This is Welcome page for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <Image
            className="mx-auto dark:hidden"
            src="/images/logo/logo.svg"
            alt="TailAdmin Logo"
            width={200}
            height={53}
          />
          <Image
            className="mx-auto hidden dark:block"
            src="/images/logo/logo-dark.svg"
            alt="TailAdmin Logo"
            width={200}
            height={53}
          />
        </div>

        {/* Welcome Content */}
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to TailAdmin
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Experience the power of our Next.js Dashboard Template with 
          comprehensive UI components and modern design patterns.
        </p>

        {/* Action Button */}
        <Link
          href="/beranda"
          className="inline-flex items-center px-8 py-4 bg-brand-500 text-white text-lg font-medium rounded-xl hover:bg-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <svg
            className="w-5 h-5 mr-2"
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
          Enter Dashboard
        </Link>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-brand-100 dark:bg-brand-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Modern Dashboard
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Clean and intuitive interface built with the latest technologies
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-brand-100 dark:bg-brand-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Responsive Design
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Perfectly optimized for all devices and screen sizes
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-brand-100 dark:bg-brand-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              High Performance
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with Next.js for optimal speed and performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}