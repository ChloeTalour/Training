import Image from 'next/image';

interface PlanInterface {
    id: number,
    name: string,
    monthlyPrice: number,
    annualPrice: number,
    icon: string,
}

interface RadioInputProps extends PlanInterface {
    selectedPlan: PlanInterface,
    setSelectedPlan: React.Dispatch<React.SetStateAction<PlanInterface>>
    optionBilling: 'monthly' | 'yearly'
}

export default function RadioInput({ id, name, monthlyPrice, annualPrice, icon, selectedPlan, setSelectedPlan, optionBilling }: RadioInputProps) {
    const onChange = () => {
        setSelectedPlan({ id, name, monthlyPrice, annualPrice, icon });
    };

    const isSelected = selectedPlan.id === id

    return (
        <div
            className={`border border-[var(--purple-200)] rounded-xl p-4 flex gap-4 cursor-pointer transition ${isSelected ? 'border-[var(--purple-600)] bg-[var(--blue-200)]' : ''}`}
            onClick={onChange}
        >
            <Image src={icon} width={40} height={40} alt={name} />
            <input
                type="radio"
                id={name}
                value={name}
                checked={selectedPlan.id === id}
                onChange={onChange}
                className="hidden"
            />

            <div className="flex flex-col gap-1">
                <label htmlFor={name} className="font-bold text-sm">
                    {name}
                </label>
                <span className="text-[var(--grey-500)] text-xs">${optionBilling === 'yearly' ? annualPrice : monthlyPrice}/mo</span>
                {optionBilling === 'yearly' && (
                    <span className="text-xs font-medium">2 months free</span>
                )}
            </div>
        </div>
    );
}
