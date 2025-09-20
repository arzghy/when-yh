"use client";
import React, { useState } from "react";
import Link from "next/link";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { PlusIcon } from "../../../icons";
import ExpensesStructureCard from "./card/ExpensesStructureCard";
import LastRecordsOverviewCard from "./card/LastRecordsOverviewCard";
import BalanceTrendCard from "./card/BalanceTrendCard";
import UpcomingPaymentsCard from "./card/UpcomingPaymentsCard";
import BudgetsAndGoalsView from "./card/BudgetAndGoalsView";

// Komponen Halaman Utama
export default function RekapPage() {
    const [activeTab, setActiveTab] = useState('accounts');

    return ( 
        <div className="relative pb-20"> 
            <PageBreadcrumb pageTitle="Rekap" />

            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200 dark:border-gray-800">
                <nav className="flex -mb-px space-x-8" aria-label="Tabs">
                    <button
                        onClick={() => setActiveTab('accounts')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'accounts' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                        ACCOUNTS
                    </button>
                    <button
                        onClick={() => setActiveTab('budgets')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'budgets' ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                        BUDGETS & GOALS
                    </button>
                </nav>
            </div>

            {activeTab === 'accounts' && (
                <>
                    {/* Grid Konten */}
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">                        
                        <ExpensesStructureCard />
                        <BalanceTrendCard />
                        <LastRecordsOverviewCard />
                        <UpcomingPaymentsCard />
                    </div>
                    <div className="mt-6 text-center">
                        <button className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                            ADD MORE CARDS
                        </button>
                    </div>
                    {/* Tombol Aksi Mengambang */}
                    <Link href="/tambah-rekap" className="fixed bottom-8 right-8 z-99">
                        <span className="flex items-center justify-center w-14 h-14 text-white rounded-full bg-brand-500 hover:bg-brand-600 shadow-lg">
                            <PlusIcon className="w-6 h-6" />
                        </span>
                    </Link>
                </>
            )}
            {activeTab === 'budgets' && <BudgetsAndGoalsView />}
        </div> 
    );
}