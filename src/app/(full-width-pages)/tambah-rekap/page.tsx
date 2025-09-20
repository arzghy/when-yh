"use client";

import { CheckLineIcon, CloseIcon, BoxIcon, CalenderIcon, ChatIcon, DollarLineIcon, EnvelopeIcon, GridIcon, HorizontaLDots, PieChartIcon, ShootingStarIcon, UserCircleIcon } from "@/icons";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModal";
import Link from "next/link";
import React, { useState } from "react";

// --- DATA KATEGORI ---
const categoryData = [
    { name: "Food & Drinks", color: "bg-red-500", icon: <EnvelopeIcon className="w-5 h-5 text-white" /> },
    { name: "Shopping", color: "bg-blue-400", icon: <BoxIcon className="w-5 h-5 text-white" /> },
    { name: "Housing", color: "bg-yellow-500", icon: <GridIcon className="w-5 h-5 text-white" /> },
    { name: "Transportation", color: "bg-gray-500", icon: <ChatIcon className="w-5 h-5 text-white" /> },
    { name: "Vehicle", color: "bg-purple-500", icon: <CalenderIcon className="w-5 h-5 text-white" /> },
    { name: "Life & Entertainment", color: "bg-green-500", icon: <UserCircleIcon className="w-5 h-5 text-white" /> },
    { name: "Communication, PC", color: "bg-blue-600", icon: <EnvelopeIcon className="w-5 h-5 text-white" /> },
    { name: "Financial expenses", color: "bg-teal-500", icon: <PieChartIcon className="w-5 h-5 text-white" /> },
    { name: "Investments", color: "bg-pink-500", icon: <ShootingStarIcon className="w-5 h-5 text-white" /> },
    { name: "Income", color: "bg-yellow-400", icon: <DollarLineIcon className="w-5 h-5 text-white" /> },
    { name: "Others", color: "bg-gray-400", icon: <HorizontaLDots className="w-5 h-5 text-white" /> },
];

// --- KOMPONEN-KOMPONEN ---

// Komponen Tampilan Transaksi
const TransactionView = ({ type, displayValue, category, onCategoryClick }: { type: 'income' | 'expense', displayValue: string, category: string, onCategoryClick: () => void }) => {
    const formatNumber = (numStr: string) => {
        if (!numStr || numStr === '0') return '0';
        const [integer, decimal] = numStr.split('.');
        const formattedInteger = parseFloat(integer).toLocaleString('id-ID');
        return decimal ? `${formattedInteger},${decimal}` : formattedInteger;
    };

    return (
        <div className="flex flex-col items-center justify-center flex-1 text-white">
            <div className="flex items-center w-full px-6">
                <div className="text-5xl font-thin w-1/5">{type === 'income' ? '+' : '—'}</div>
                <div className="flex-1 text-5xl font-light text-center truncate">
                    {formatNumber(displayValue)} <span className="text-3xl">IDR</span>
                </div>
                <div className="text-3xl font-thin w-1/5 text-right opacity-80">{'<'}</div>
            </div>
            <div className="flex justify-center w-full px-8 mt-8 text-sm">
                <button onClick={onCategoryClick} className="text-center">
                    <p className="opacity-80">Category</p>
                    <p className="font-semibold uppercase underline">{category}</p>
                </button>
            </div>
        </div>
    );
};

// Komponen Keypad Kalkulator
const CalculatorKeypad = ({ onKeyClick }: { onKeyClick: (key: string) => void }) => {
    const numKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '←'];
    const opKeys = ['÷', '*', '-', '+', '='];
    return (
        <div className="bg-gray-50 dark:bg-black p-4">
            <div className="grid grid-cols-4 gap-2">
                <div className="col-span-3 grid grid-cols-3 gap-2">
                    {numKeys.map(key => (<button key={key} onClick={() => onKeyClick(key)} className="py-4 text-3xl font-light bg-white rounded-xl dark:bg-gray-800 text-gray-800 dark:text-white/90 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">{key === '←' ? '⌫' : key}</button>))}
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                    {opKeys.map(key => (<button key={key} onClick={() => onKeyClick(key)} className="flex-1 py-4 text-2xl font-light bg-gray-100 rounded-xl dark:bg-gray-700 text-brand-500 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">{key}</button>))}
                </div>
            </div>
        </div>
    );
};

// --- HALAMAN UTAMA ---

export default function TambahCatatanPage() {
    const { isOpen: isCategoryModalOpen, openModal: openCategoryModal, closeModal: closeCategoryModal } = useModal();
    const [activeTab, setActiveTab] = useState<'income' | 'expense'>('expense');
    const [category, setCategory] = useState('SELECT CATEGORY');
    
    // State untuk kalkulator
    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState<string | null>(null);
    const [operator, setOperator] = useState<'+' | '-' | '*' | '÷' | null>(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const handleSelectCategory = (selectedCategory: string) => {
        setCategory(selectedCategory);
        closeCategoryModal();
    };

    const handleKeyClick = (key: string) => {
        if (!isNaN(parseInt(key)) || key === '.') {
            if (key === '.' && currentValue.includes('.')) return;
            if (waitingForOperand) {
                setCurrentValue(key);
                setWaitingForOperand(false);
            } else {
                setCurrentValue(currentValue === '0' && key !== '.' ? key : currentValue + key);
            }
        } else if (['÷', '*', '-', '+'].includes(key)) {
            if (operator && !waitingForOperand) calculate(); else setPreviousValue(currentValue);
            setOperator(key as any);
            setWaitingForOperand(true);
        } else if (key === '=') {
            calculate();
        } else if (key === '←') {
            setCurrentValue(currentValue.length === 1 ? '0' : currentValue.slice(0, -1));
        }
    };
    
    const calculate = () => {
        if (!previousValue || !operator) return;
        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);
        let result = 0;
        switch (operator) {
            case '+': result = prev + current; break;
            case '-': result = prev - current; break;
            case '*': result = prev * current; break;
            case '÷': result = prev / current; break;
        }
        const finalResult = Number(result.toFixed(10)).toString();
        setCurrentValue(finalResult);
        setPreviousValue(null);
        setOperator(null);
        setWaitingForOperand(true);
    };

    return (
        <>
            <div className="flex flex-col h-screen bg-blue-light-500">
                <div className="flex flex-col flex-1">
                    <header className="flex items-center justify-between p-4 text-white">
                        <Link href="/rekap"><CloseIcon className="w-6 h-6" /></Link>
                        <div className="flex items-center p-1 bg-black/10 rounded-lg">
                            <button onClick={() => setActiveTab('income')} className={`px-5 py-1.5 text-sm rounded-md ${activeTab === 'income' ? 'bg-white text-blue-light-600' : ''}`}>INCOME</button>
                            <button onClick={() => setActiveTab('expense')} className={`px-5 py-1.5 text-sm rounded-md ${activeTab === 'expense' ? 'bg-white text-blue-light-600' : ''}`}>EXPENSE</button>
                        </div>
                        <button><CheckLineIcon className="w-6 h-6" /></button>
                    </header>
                    <TransactionView type={activeTab} displayValue={currentValue} category={category} onCategoryClick={openCategoryModal} />
                </div>
                <div className="bg-white dark:bg-gray-900">
                    <CalculatorKeypad onKeyClick={handleKeyClick} />
                </div>
            </div>

            {/* Modal Pemilihan Kategori */}
            <Modal isOpen={isCategoryModalOpen} onClose={closeCategoryModal} isFullscreen={true}>
                 <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
                    <header className="flex items-center justify-between p-4 text-white bg-green-600 dark:bg-green-800">
                         <button onClick={closeCategoryModal}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <h1 className="text-xl font-semibold">Category</h1>
                        <div className="flex items-center space-x-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                    </header>
                    <div className="flex-1 overflow-y-auto">
                        <h2 className="p-4 text-sm font-semibold text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400">ALL CATEGORIES</h2>
                        <ul>
                            {categoryData.map((cat) => (
                                <li key={cat.name}>
                                    <button onClick={() => handleSelectCategory(cat.name)} className="flex items-center w-full p-4 space-x-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${cat.color}`}>{cat.icon}</div>
                                        <span className="text-gray-800 dark:text-white/90">{cat.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Modal>
        </>
    );
}