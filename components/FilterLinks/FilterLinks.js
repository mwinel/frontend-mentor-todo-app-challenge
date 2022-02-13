import classNames from '../../utils/classnames';

export default function FilterLinks({ filter, filterNames, setFilter }) {
    return (
        <nav className="flex space-x-4">
            {filterNames.map((name) => (
                <a
                    key={name}
                    aria-pressed={name === filter}
                    onClick={() => setFilter(name)}
                    className={classNames(
                        name === filter
                            ? 'text-bright-blue'
                            : 'text-dark-grayish-blue cursor-pointer',
                        'cursor-pointer hover:text-very-dark-grayish-blue',
                        'dark:hover:text-very-light-gray'
                    )}
                >
                    {name}
                </a>
            ))}
        </nav>
    );
}
