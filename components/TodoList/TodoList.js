import InternalLink from '../InternalLink/InternalLink';

export default function TodoList({ todos }) {
    return (
        <div className="bg-neutral rounded-md shadow-lg mt-6 divide-y divide-very-light-grayish-blue dark:bg-very-dark-desaturated-blue dark:divide-very-dark-grayish-blue">
            {todos.length ? (
                <>
                    {todos.map((todo) => (
                        <div
                            key={todo.id}
                            className="flex justify-between items-center p-5"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex justify-center space-x-6 items-center">
                                    <div className="h-6 w-6 rounded-full bg-bright-lue border border-very-light-grayish-blue dark:border-very-dark-grayish-blue" />

                                    <p className="pt-1 text-body-base text-very-dark-grayish-blue dark:text-light-grayish-blue">
                                        {todo.title}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center cursor-pointer">
                                <img
                                    src="/images/icon-cross.svg"
                                    alt="icon cross"
                                    className="h-4 w-4"
                                />
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div className="flex justify-center items-center p-5">
                    <p className="pt-1 text-body-base text-very-dark-grayish-blue dark:text-light-grayish-blue">
                        You do not have any todos at the moment
                    </p>
                </div>
            )}

            <div className="px-5 py-4 flex items-center justify-between">
                <div className="text-dark-grayish-blue">
                    {todos.length} items left
                </div>
                <div className="flex items-center space-x-4">
                    <InternalLink title="All" />
                    <InternalLink title="Active" />
                    <InternalLink title="Completed" />
                </div>
                <InternalLink title="Clear completed" />
            </div>
        </div>
    );
}
