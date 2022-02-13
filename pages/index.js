import { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import axios from 'axios';

import { Header, TodoItem, FilterLinks, Footer } from '../components';
import AddTodo from '../components/AddTodo';

const TODOS = [
    { id: 1, title: 'Learn something new...', completed: true },
    { id: 2, title: 'Go for lunch at cafe javas', completed: false },
    { id: 3, title: 'Learn something new part two...', completed: false },
    { id: 4, title: 'Go and pick up my dinner', completed: false },
];

export default function Home() {
    const [todos, setTodos] = useState(TODOS);
    const [filter, setFilter] = useState('All');
    const { theme, setTheme } = useTheme();

    const fetchTodos = useCallback(async () => {
        try {
            const { data } = await axios.get('./data.json');
            setTodos(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleCompleteTodo = (item) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === item.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    const handleClearCompletedTodos = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const FILTER_MAP = {
        All: () => true,
        Active: (todo) => !todo.completed,
        Completed: (todo) => todo.completed,
    };
    
    const FILTER_NAMES = Object.keys(FILTER_MAP);

    const filteredTodos = todos.filter(FILTER_MAP[filter]);

    return (
        <div className="relative">
            <div
                className="relative h-[320px] bg-light-grayish-blue bg-no-repeat bg-cover"
                style={{
                    backgroundImage:
                        theme === 'dark'
                            ? `url("/images/bg-desktop-dark.jpg")`
                            : `url("/images/bg-desktop-light.jpg")`,
                }}
            ></div>
            <div className="absolute left-0 w-full top-24">
                <div className="w-[620px] mx-auto top- left-0">
                    <Header theme={theme} setTheme={setTheme} />
                    <AddTodo
                        onSendTodo={(todo) => setTodos([...todos, todo])}
                        lastID={todos.reduce(
                            (max, item) =>
                                Number(item.id) > max ? Number(item.id) : max,
                            0
                        )}
                    />
                    <div className="mt-6 divide-y rounded-md shadow-lg bg-neutral divide-very-light-grayish-blue dark:bg-very-dark-desaturated-blue dark:divide-very-dark-grayish-blue">
                        {filteredTodos.length ? (
                            <>
                                {filteredTodos.map((todo) => (
                                    <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        onDeleteTodo={handleDeleteTodo}
                                        onCompleteTodo={handleCompleteTodo}
                                    />
                                ))}
                            </>
                        ) : (
                            <div className="flex items-center justify-center p-5">
                                <p className="pt-1 text-body-base text-very-dark-grayish-blue dark:text-light-grayish-blue">
                                    {filter === 'All'
                                        ? `You do not have any todos at the moment`
                                        : `You do not have any ${filter.toLowerCase()} todos at the moment`}
                                </p>
                            </div>
                        )}
                        {/* todo list footer */}
                        <div className="flex items-center justify-between px-5 py-4">
                            <div className="w-3/12">
                                <p className="text-dark-grayish-blue">
                                    {
                                        todos.filter((todo) => !todo.completed)
                                            .length
                                    }{' '}
                                    items left
                                </p>
                            </div>
                            <div className="w-6/12 flex items-center justify-center">
                                <FilterLinks
                                    filterNames={FILTER_NAMES}
                                    filter={filter}
                                    setFilter={setFilter}
                                />
                            </div>
                            <div className="w-3/12 flex justify-end">
                                <a
                                    className="text-dark-grayish-blue cursor-pointer hover:text-very-dark-grayish-blue dark:hover:text-very-light-gray"
                                    onClick={handleClearCompletedTodos}
                                >
                                    Clear completed
                                </a>
                            </div>
                        </div>
                    </div>
                    {todos.length ? <Footer /> : null}
                </div>
            </div>
        </div>
    );
}
