import InputText from "../Input/textInput"

interface InfoStepProps {
    errors?: {
        name?: string
        email?: string
        phone?: string
    }
}

export default function InfoStep({ errors }: InfoStepProps) {
    return (
        <div>
            <InputText
                label='Name'
                placeholder='e.g. Stephen King'
                name='name'
                error={errors?.name}
            />
            <InputText
                label='Email Adress'
                placeholder='e.g. stephenking@lorem.com'
                name='email'
                error={errors?.email}
            />
            <InputText
                label='Phone Number'
                placeholder='e.g. +1 234 567 890'
                name='phone'
                error={errors?.phone}
            />
        </div>
    );
}
