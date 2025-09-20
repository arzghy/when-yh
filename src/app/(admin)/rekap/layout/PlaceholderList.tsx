import React from "react";

const PlaceholderList = () => (
    <div className="space-y-4">
        {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center justify-between animate-pulse">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-800"></div>
                    <div className="space-y-2">
                        <div className="w-24 h-4 bg-gray-100 rounded dark:bg-gray-800"></div>
                        <div className="w-16 h-3 bg-gray-100 rounded dark:bg-gray-800"></div>
                    </div>
                </div>
                <div className="space-y-2 text-right">
                    <div className="w-20 h-4 ml-auto bg-gray-100 rounded dark:bg-gray-800"></div>
                    <div className="w-12 h-3 ml-auto bg-gray-100 rounded dark:bg-gray-800"></div>
                </div>
            </div>
        ))}
    </div>
);

export default PlaceholderList;