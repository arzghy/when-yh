"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import RekapCard from "../layout/RekapCard";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ExpensesStructureCard = () => {
    const options: ApexOptions = {
        chart: { type: 'donut', height: 200, sparkline: { enabled: true } },
        stroke: { width: 0 },
        plotOptions: {
            pie: {
                donut: {
                    size: '75%',
                    labels: { show: true, total: { show: false } }
                }
            }
        },
        labels: ['Food', 'Transport', 'Shopping', 'Other'],
        colors: ['#E4E7EC', '#E4E7EC', '#E4E7EC', '#E4E7EC'],
        legend: { show: false },
        tooltip: { enabled: false },
        dataLabels: { enabled: false },
    };
    const series = [0, 0, 0, 1];

    return (
        <RekapCard title="Expenses structure" subtitle="LAST 30 DAYS">
            <div className="text-left">
                <h4 className="font-bold text-gray-800 text-title-sm dark:text-white/90">IDR 0</h4>
            </div>
            <div className="flex items-center justify-center my-4 -mt-4">
                <ReactApexChart options={options} series={series} type="donut" height={200} />
            </div>
            <button className="font-medium text-brand-500 text-theme-sm dark:text-brand-400">
                ADD RECORD
            </button>
        </RekapCard>
    );
};

export default ExpensesStructureCard;