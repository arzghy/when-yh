import React from "react";
import RekapCard from "../layout/RekapCard";
import PlaceholderList from "../layout/PlaceholderList";

const UpcomingPaymentsCard = () => (
     <RekapCard title="Upcoming planned payments">
        <PlaceholderList />
         <button className="mt-6 font-medium text-brand-500 text-theme-sm dark:text-brand-400">
            ADD RECORD
        </button>
    </RekapCard>
);

export default UpcomingPaymentsCard;