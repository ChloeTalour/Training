import { useState } from "react";
import RadioInput from "../Input/radioInput";
import SwitchInput from "../Input/switchInput";

export default function SelectPlanStep() {
    const [optionBilling, setOptionBilling] = useState<'monthly' | 'yearly'>('monthly')
    const plans = [
        {
            id: 1,
            icon: '/icon-arcade.svg',
            name: 'Arcade',
            monthlyPrice: 9,
            annualPrice: 90
        },
        {
            id: 2,
            icon: '/icon-advanced.svg',
            name: 'Advanced',
            monthlyPrice: 12,
            annualPrice: 120
        },
        {
            id: 3,
            icon: '/icon-pro.svg',
            name: 'Pro',
            monthlyPrice: 15,
            annualPrice: 150
        },
    ]

    const [selectedPlan, setSelectedPlan] = useState(plans[1])
    return (
        <div className="flex flex-col gap-3 mt-4">
            {plans.map(plan => (
                <RadioInput {...plan} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} optionBilling={optionBilling} />
            ))}
            <SwitchInput optionBilling={optionBilling} setOptionBilling={setOptionBilling} />
        </div>
    );
}

