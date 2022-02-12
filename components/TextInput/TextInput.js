export default function TextInput({ name, ...props }) {
    return (
        <div className="mt-10 relative rounded-md shadow-md">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <div className="h-6 w-6 rounded-full bg-bright-lue border border-very-light-grayish-blue dark:border-very-dark-grayish-blue" />
            </div>
            <input
                name={name}
                id={name}
                className="block w-full pl-16 py-4 sm:text-sm rounded-md placeholder:text-body-base placeholder:text-very-dark-grayish-blue focus:ring-0 dark:bg-very-dark-desaturated-blue dark:placeholder:text-light-grayish-blue"
                {...props}
            />
        </div>
    );
}
