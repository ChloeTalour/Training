
interface InputTextInterface {
    label: string
    placeholder: string
    name: string
    error?: string
}

export default function InputText({ label, placeholder, name, error }: InputTextInterface) {
    return (
        <div className="flex flex-col pb-3 lg:pb-5 lg:relative">
            <label htmlFor={name} className="text-xs pb-1">{label}</label>
            {error && <p className="text-[var(--red-500)] text-xs font-bold lg:absolute lg:right-0">{error}</p>}
            <input
                type="text"
                id={name}
                name={name}
                required
                className="border rounded-md p-2 border-[var(--purple-200)] text-sm pl-4 font-semibold focus:border-[var(--purple-600)] focus:outline-none focus:ring-0"
                placeholder={placeholder}
            />

        </div>

    );
}

