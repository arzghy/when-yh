"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import RekapCard from "../layout/RekapCard";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BalanceTrendCard = () => {
    const options: ApexOptions = {
        chart: { height: 150, type: 'area', toolbar: { show: false }, zoom: { enabled: false } },
        dataLabels: { enabled: false },
        stroke: { curve: 'straight', width: 2 },
        colors: ['#465FFF'],
        fill: { type: 'gradient', gradient: { opacityFrom: 0.1, opacityTo: 0.1 } },
        grid: { show: true, borderColor: '#E4E7EC', strokeDashArray: 4, yaxis: { lines: { show: true } }, xaxis: { lines: { show: false } } },
        xaxis: {
            type: 'category',
            categories: ["21 Aug", "31 Aug", "10 Sep", "Today"],
            labels: { style: { colors: '#98A2B3', fontSize: '12px' } },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            min: -1.2,
            max: 1.2,
            tickAmount: 4,
            labels: { style: { colors: '#98A2B3', fontSize: '12px' } }
        },
        tooltip: { enabled: true, x: { show: false } },
    };
    const series = [{ name: 'Balance', data: [0, -0.2, -0.8, -0.6] }];

    return (
        <RekapCard title="Balance Trend" subtitle="TODAY">
             <div className="text-left mb-4">
                <h4 className="font-bold text-gray-800 text-title-sm dark:text-white/90">IDR 0</h4>
            </div>
            <div id="balance-trend-chart">
                <ReactApexChart options={options} series={series} type="area" height={150} />
            </div>
             <button className="mt-4 font-medium text-brand-500 text-theme-sm dark:text-brand-400">
                ADD RECORD
            </button>
        </RekapCard>
    );
};

export default BalanceTrendCard;