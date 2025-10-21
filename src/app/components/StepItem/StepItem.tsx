import Link from "next/link";

interface StepItemInterface {
    numberStep: number
    url: string
    active: boolean
    stepTitle: string
}

export default function StepItem({ numberStep, url, active, stepTitle }: StepItemInterface) {
    const activeState = active ? 'bg-[var(--blue-200)] text-[var(--blue-950)]' : 'text-white border-1'
    return (
        <Link href={url} className="flex gap-5 group">
            <div className={`rounded-full text-sm inline-flex h-8 w-8 transition ease-in-out duration-300 justify-center items-center ${activeState}  group-hover:bg-[var(--blue-200)] group-hover:text-[var(--blue-950)] group-hover:border-none`}>
                {numberStep}
            </div>
            <div className="hidden lg:flex flex-col ">
                <p className="text-[var(--purple-200)] uppercase font-light lg:opacity-75 text-[11px]">Step {numberStep}</p>
                <p className="text-[var(--white)] uppercase text-xs tracking-wide ">{stepTitle}</p>
            </div>
        </Link>
    );
}

