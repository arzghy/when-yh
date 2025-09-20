import { MoreDotIcon } from "@/icons";
import React from "react";

interface RekapCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const RekapCard: React.FC<RekapCardProps> = ({ title, subtitle, children }) => (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-between mb-4">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">{title}</h3>
                {subtitle && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
            </div>
            <button>
                <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
            </button>
        </div>
        {children}
    </div>
);

export default RekapCard;