
interface InputTextInterface {
    label: string
    placeholder: string
    name: string
}

export default function InputText({ label, placeholder, name }: InputTextInterface) {
    return (
        <div className="flex flex-col pb-3 lg:pb-5">
            <label htmlFor={name} className="text-xs pb-1">{label}</label>
            <input
                type="text"
                id={name}
                name={name}
                required
                className="border rounded-md p-2 border-[var(--purple-200)] text-sm pl-3 font-semibold lg:p-2"
                placeholder={placeholder}
            />
        </div>

    );
}

