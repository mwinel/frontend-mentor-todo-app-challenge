export default function TodoItem({ todo, onDeleteTodo }) {
    return (
        <div className="flex justify-between items-center p-5">
            <div className="flex justify-between items-center">
                <div className="flex justify-center space-x-6 items-center">
                    <div className="h-6 w-6 rounded-full bg-bright-lue border border-very-light-grayish-blue dark:border-very-dark-grayish-blue" />

                    <p className="pt-1 text-body-base text-very-dark-grayish-blue dark:text-light-grayish-blue">
                        {todo.title}
                    </p>
                </div>
            </div>
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => onDeleteTodo(todo.id)}
            >
                <img
                    src="/images/icon-cross.svg"
                    alt="icon cross"
                    className="h-4 w-4"
                />
            </div>
        </div>
    );
}