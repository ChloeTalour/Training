import Link from "next/link";

interface StepItemInterface {
    numberStep: number
    url: string
    active: boolean
}

export default function StepItem({ numberStep, url, active }: StepItemInterface) {
    const activeState = active ? 'bg-[var(--blue-200)] text-[var(--blue-950)]' : 'text-white border-1'
    return (
        <div>
            <Link href={url} className={`rounded-full text-sm inline-flex h-8 w-8 justify-center items-center ${activeState} hover:bg-[var(--blue-200)] hover:text-[var(--blue-950)] hover:border-none`}>{numberStep}</Link>
        </div>
    );
}

