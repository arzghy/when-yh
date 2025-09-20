import { DollarLineIcon, ShootingStarIcon } from "@/icons";
import React from "react";

const BudgetsAndGoalsView = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-6">
            {/* Budgets Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                <div className="flex items-center gap-5">
                    <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-error-50 rounded-full dark:bg-error-500/15">
                        <DollarLineIcon className="w-8 h-8 text-error-500" />
                    </div>
                    <div>
                        <h4 className="mb-1 font-semibold text-gray-800 text-lg dark:text-white/90">Budgets</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Start with Budgets to have an efficient overview of your spending limits.</p>
                    </div>
                </div>
                 <button className="mt-6 font-medium text-brand-500 text-theme-sm dark:text-brand-400 hover:underline">
                    CREATE BUDGET
                </button>
            </div>

            {/* Goals Card */}
             <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                <div className="flex items-center gap-5">
                     <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-blue-light-50 rounded-full dark:bg-blue-light-500/15">
                        <ShootingStarIcon className="w-8 h-8 text-blue-light-500" />
                    </div>
                    <div>
                        <h4 className="mb-1 font-semibold text-gray-800 text-lg dark:text-white/90">Goals</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Set your first goal and have a quick overview of your progress.</p>
                    </div>
                </div>
                 <button className="mt-6 font-medium text-brand-500 text-theme-sm dark:text-brand-400 hover:underline">
                    CREATE GOAL
                </button>
            </div>
        </div>
    );
};

export default BudgetsAndGoalsView;