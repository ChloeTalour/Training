import StepItem from "../StepItem/StepItem";

export default function Header() {
    return (
        <header className="font-semibold bg-[url('/bg-sidebar-mobile.svg')]  bg-no-repeat bg-cover h-1/4 flex pt-8 justify-center gap-4 lg:h-auto lg:w-1/3 lg:rounded-xl lg:bg-[url('/bg-sidebar-desktop.svg')] lg:flex-col lg:pt-0 lg:gap-7 lg:justify-start lg:pt-8 lg:bg-bottom lg:px-8">
            <StepItem numberStep={1} url="/" active={true} stepTitle='Your info' />
            <StepItem numberStep={2} url="/" active={false} stepTitle='Select plan' />
            <StepItem numberStep={3} url="/" active={false} stepTitle='Add-ons' />
            <StepItem numberStep={4} url="/" active={false} stepTitle='summary' />
        </header>
    );
}

