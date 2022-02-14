import classNames from '../../utils/classnames';

export default function FilterLinks({ filter, filterNames, setFilter }) {
    return (
        <div className="filter">
            <nav className="filter-nv">
                {filterNames.map((name) => (
                    <a
                        key={name}
                        aria-pressed={name === filter}
                        onClick={() => setFilter(name)}
                        className={classNames(
                            name === filter && 'text-bright-blue'
                        )}
                    >
                        {name}
                    </a>
                ))}
            </nav>
        </div>
    );
}
