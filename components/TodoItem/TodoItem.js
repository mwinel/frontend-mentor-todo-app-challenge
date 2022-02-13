import { useState } from 'react';
import classNames from '../../utils/classnames';

export default function TodoItem({ todo, onDeleteTodo, onCompleteTodo }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="flex items-center justify-between p-5 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                    <div
                        className={classNames(
                            'flex items-center justify-center h-6 w-6 rounded-full border cursor-pointer',
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
                                className="w-2.5 h-2.5"
                            />
                        ) : null}
                    </div>
                    <p
                        className={classNames(
                            'text-very-dark-grayish-blue dark:text-light-grayish-blue mx-3 lg:text-body-base',
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
                    className="hidden lg:cursor-pointer lg:flex lg:justify-center lg:items-center"
                    onClick={() => onDeleteTodo(todo.id)}
                >
                    <img
                        src="/images/icon-cross.svg"
                        alt="icon cross"
                        className="w-4 h-4"
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
                    className="w-4 h-4"
                />
            </div>
        </div>
    );
}
