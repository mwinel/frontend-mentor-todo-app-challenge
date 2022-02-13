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
    // { id: 5, title: 'Go and pick up my dinner', completed: false },
    // { id: 6, title: 'Go and pick up my dinner', completed: false },
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
                className="relative h-[260px] bg-light-grayish-blue bg-no-repeat bg-cover lg:h-[320px]"
                style={{
                    backgroundImage:
                        theme === 'dark'
                            ? `url("/images/bg-desktop-dark.jpg")`
                            : `url("/images/bg-desktop-light.jpg")`,
                }}
            ></div>
            <div className="absolute left-0 w-full top-14 lg:top-24">
                <div className="top-0 left-0 px-4 mx-auto lg:px-0 lg:w-[620px]">
                    <Header theme={theme} setTheme={setTheme} />
                    <AddTodo
                        onSendTodo={(todo) => setTodos([...todos, todo])}
                        lastID={todos.reduce(
                            (max, item) =>
                                Number(item.id) > max ? Number(item.id) : max,
                            0
                        )}
                    />
                    <div className="mt-4 divide-y rounded-md shadow-lg bg-neutral divide-very-light-grayish-blue dark:bg-very-dark-desaturated-blue dark:divide-very-dark-grayish-blue lg:mt-6">
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
                                <p className="pt-1 text-center text-very-dark-grayish-blue dark:text-light-grayish-blue lg:text-body-base">
                                    {filter === 'All'
                                        ? `You do not have any todos at the moment`
                                        : `You do not have any ${filter.toLowerCase()} todos at the moment`}
                                </p>
                            </div>
                        )}
                        {/* todo list footer */}
                        <div className="flex items-center justify-between px-5 py-4">
                            <div className="lg:w-3/12">
                                <p className="text-dark-grayish-blue">
                                    {
                                        todos.filter((todo) => !todo.completed)
                                            .length
                                    }{' '}
                                    items left
                                </p>
                            </div>
                            <div className="hidden lg:w-6/12 lg:flex lg:justify-center">
                                <FilterLinks
                                    filterNames={FILTER_NAMES}
                                    filter={filter}
                                    setFilter={setFilter}
                                />
                            </div>
                            <div className="flex justify-end lg:w-3/12">
                                <a
                                    className="cursor-pointer text-dark-grayish-blue hover:text-very-dark-grayish-blue dark:hover:text-very-light-gray"
                                    onClick={handleClearCompletedTodos}
                                >
                                    Clear completed
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* filter links mobile */}
                    <div className="flex items-center justify-center py-4 mt-4 rounded-md shadow-lg bg-neutral dark:bg-very-dark-desaturated-blue lg:hidden">
                        <FilterLinks
                            filterNames={FILTER_NAMES}
                            filter={filter}
                            setFilter={setFilter}
                        />
                    </div>
                    {todos.length ? <Footer /> : null}
                </div>
            </div>
        </div>
    );
}
