import { useState } from "react";
import RadioInput from "../Input/radioInput";

export default function SwitchInput({ optionBilling, setOptionBilling }) {
    const isYearly = optionBilling === 'yearly'

    console.log('optionBilling', optionBilling)

    const onChange = () => {
        if (isYearly) {
            setOptionBilling('monthly')
        } else {
            setOptionBilling('yearly')
        }
    }

    return (
        <label className="flex items-center cursor-pointer justify-center bg-[var(--blue-100)] py-4 rounded-xl">
            <input type="checkbox" value="" className="sr-only peer" checked={isYearly} onChange={onChange} />
            <span
                className={`ms-3 text-sm font-medium pr-3 transition-colors duration-300 ${!isYearly ? 'text-[var(--blue-950)]' : 'text-[var(--grey-500)]'
                    }`}
            >
                Monthly
            </span>
            <div className="relative w-9 h-5 bg-[var(--blue-200)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[6px] after:bg-white after:border-gray-300 after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[var(--blue-950)]"></div>
            <span className={`ms-3 text-sm font-medium ${isYearly ? 'text-[var(--blue-950)]' : 'text-[var(--grey-500)]'}`}>Yearly</span>
        </label>
    );
}

