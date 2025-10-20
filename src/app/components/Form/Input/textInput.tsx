
interface InputTextInterface {
    label: string
    placeholder: string
    name: string
}

export default function InputText({ label, placeholder, name }: InputTextInterface) {
    return (
        <div className="flex flex-col pb-3">
            <label htmlFor={name} className="text-xs pb-1">{label}</label>
            <input
                type="text"
                id={name}
                name={name}
                required
                className="border rounded-sm p-2 border-[var(--grey-500)] text-sm pl-3 font-semibold"
                placeholder={placeholder}
            />
        </div>

    );
}

