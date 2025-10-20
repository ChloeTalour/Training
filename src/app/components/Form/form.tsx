import InputText from "./Input/textInput"
import SubmitButton from "./SubmitButton/submitButton";


export default function Form() {
    return (
        <div className="h-full flex flex-col justify-between ">
            <div className="bg-[var(--white)] mx-4 px-4 py-6 relative -top-10 rounded-xl">
                <h2 className="text-2xl font-bold pb-2">Personal Info</h2>
                <p className="pb-2 text-[var(--grey-500)]">Please provide your name, email adress, and phone number</p>
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

