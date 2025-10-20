import StepItem from "../StepItem/StepItem";

export default function Header() {
    return (
        <header className="font-semibold bg-[url('/bg-sidebar-mobile.svg')]  bg-no-repeat bg-cover h-1/4 flex pt-8 justify-center gap-4">
            <StepItem numberStep={1} url="/" active={true} />
            <StepItem numberStep={2} url="/" active={false} />
            <StepItem numberStep={3} url="/" active={false} />
            <StepItem numberStep={4} url="/" active={false} />
        </header>
    );
}

