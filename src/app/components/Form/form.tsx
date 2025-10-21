"use client";

import { useMemo, useState } from "react";
import SubmitButton from "./SubmitButton/submitButton";
import { userFormSchema } from "@/lib/validations/userForm";
import InfoStep from "./Steps/infoStep";

interface FieldErrors {
    name?: string
    email?: string
    phone?: string
}

export default function FormContent() {
    const [errors, setErrors] = useState<FieldErrors>({});
    const [step, setStep] = useState<number>(1)

    const stepInfos = [
        {
            step: 1,
            title: 'Personal Info',
            description: 'Please provide your name, email adress, and phone number.',
            component: <InfoStep errors={errors} />
        },
        {
            step: 2,
            title: 'Select your plan',
            description: 'You have the option of monthly or yearly billing',
            component: <p>STEP 2</p>
        },
        {
            step: 3,
            title: 'Pick add-ons',
            description: 'Adds-ons help enhance your gaming experience',
            component: <p>STEP 3</p>
        },
        {
            step: 4,
            title: 'Finishing up',
            description: 'Double-check everything looks OK before confirming',
            component: <p>STEP 4</p>
        },
    ]


    const currentStep = useMemo(
        () => stepInfos.find((s) => s.step === step),
        [step, stepInfos]
    );

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const parsed = userFormSchema.safeParse(data);

        if (!parsed.success) {
            const fieldErrors: Record<string, string> = {};
            for (const [key, value] of Object.entries(parsed.error.flatten().fieldErrors)) {
                fieldErrors[key] = value?.[0] ?? "";
            }
            setErrors(fieldErrors);
            return;
        }
        setStep(step + 1)
        setErrors({});
    }
    return (
        <form className="h-full flex flex-col justify-between lg:w-2/3 lg:px-10 lg:p-5" onSubmit={onSubmit} noValidate>
            <div className="bg-[var(--white)] mx-4 px-4 py-6 relative -top-10 lg:top-0 rounded-xl lg:mx-0">
                <h2 className="text-2xl font-bold pb-2">{currentStep?.title}</h2>
                <p className="pb-2 text-[var(--grey-500)] lg:pb-8 text-sm">{currentStep?.description}</p>
                {currentStep?.component}
            </div>
            <SubmitButton />
        </form>
    );
}

