"use client";

import Header from "./components/Header/header";
import FormContent from "./components/Form/form";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState<number>(1)
  return (
    <div className="h-screen lg:flex lg:items-center lg:justify-center w-full">
      <div className="h-full flex flex-col lg:flex-row lg:bg-[var(--white)] lg:rounded-xl shadow-lg lg:p-3 lg:h-auto lg:w-2/3 max-w-[800px]">
        <Header step={step} />
        <FormContent step={step} setStep={setStep} />
      </div>
    </div>
  );
}
