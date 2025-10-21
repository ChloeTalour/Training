import InputText from "./Input/textInput"
import SubmitButton from "./SubmitButton/submitButton";


export default function Form() {
    return (
        <div className="h-full flex flex-col justify-between lg:w-2/3 lg:px-10 lg:p-5">
            <div className="bg-[var(--white)] mx-4 px-4 py-6 relative -top-10 lg:top-0 rounded-xl lg:mx-0">
                <h2 className="text-2xl font-bold pb-2">Personal Info</h2>
                <p className="pb-2 text-[var(--grey-500)] lg:pb-8 text-sm">Please provide your name, email adress, and phone number.</p>
                <div>
                    <InputText
                        label='Name'
                        placeholder='e.g. Stephen King'
                        name='name'
                    />
                    <InputText
                        label='Email Adress'
                        placeholder='e.g. stephenking@lorem.com'
                        name='email'
                    />
                    <InputText
                        label='Phone Number'
                        placeholder='e.g. +1 234 567 890'
                        name='phone'
                    />
                </div>
            </div>
            <SubmitButton />
        </div>
    );
}

