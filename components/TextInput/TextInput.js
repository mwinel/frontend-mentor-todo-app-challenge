export default function TextInput({ name, error, ...props }) {
    return (
        <div>
            <div className="relative rounded-md shadow-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                    <div className="w-6 h-6 border rounded-full bg-bright-lue border-very-light-grayish-blue dark:border-very-dark-grayish-blue" />
                </div>
                <input
                    name={name}
                    id={name}
                    className="block w-full py-4 pl-16 rounded-md sm:text-sm placeholder:text-body-base placeholder:text-very-dark-grayish-blue focus:ring-0 dark:bg-very-dark-desaturated-blue dark:placeholder:text-light-grayish-blue"
                    {...props}
                />
            </div>
            <p className="mt-1 text-red-200">{error}</p>
        </div>
    );
}
