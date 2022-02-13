import { useState } from 'react';
import classNames from '../../utils/classnames';

export default function TodoItem({ todo, onDeleteTodo, onCompleteTodo }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="flex cursor-pointer items-center justify-between p-5"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                    <div
                        className={classNames(
                            'flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border',
                            'border-very-light-grayish-blue dark:border-very-dark-grayish-blue',
                            'hover:border-gradient-to-r hover:border-from-check-bg-one hover:border-to-check-bg-two',
                            todo.completed
                                ? 'bg-gradient-to-r from-check-bg-one to-check-bg-two'
                                : 'none'
                        )}
                        onClick={() => onCompleteTodo(todo)}
                    >
                        {todo.completed ? (
                            <img
                                src="/images/icon-check.svg"
                                alt="icon check"
                                className="h-2.5 w-2.5"
                            />
                        ) : null}
                    </div>
                    <p
                        className={classNames(
                            'mx-3 text-very-dark-grayish-blue dark:text-light-grayish-blue lg:text-body-base',
                            todo.completed ? 'line-through' : 'none'
                        )}
                    >
                        {todo.title}
                    </p>
                </div>
            </div>

            {/* cross icon */}
            {hovered && (
                <div
                    className="hidden lg:flex lg:cursor-pointer lg:items-center lg:justify-center"
                    onClick={() => onDeleteTodo(todo.id)}
                >
                    <img
                        src="/images/icon-cross.svg"
                        alt="icon cross"
                        className="h-4 w-4"
                    />
                </div>
            )}
            <div
                className="flex items-center justify-center lg:hidden"
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
