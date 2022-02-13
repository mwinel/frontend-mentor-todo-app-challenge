import classNames from '../../utils/classnames';

export default function TextInput({ name, error, ...props }) {
    return (
        <div>
            <div className="relative rounded-md shadow-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                    <div
                        className={classNames(
                            'bg-bright-lue h-6 w-6 rounded-full border',
                            'border-very-light-grayish-blue dark:border-very-dark-grayish-blue'
                        )}
                    />
                </div>
                <input
                    name={name}
                    id={name}
                    className={classNames(
                        'sm:text-sm block w-full rounded-md py-4 pl-16 focus:ring-0',
                        'placeholder:text-body-base placeholder:text-very-dark-grayish-blue',
                        'dark:bg-very-dark-desaturated-blue dark:placeholder:text-light-grayish-blue'
                    )}
                    {...props}
                />
            </div>
            <p className="mt-1 text-red-200">{error}</p>
        </div>
    );
}
