import { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import axios from 'axios';

import { Header, TodoList, Footer } from '../components';
import AddTodo from '../components/AddTodo';

const TODOS = [
    { id: 1, title: 'Learn something new...', completed: false },
    { id: 2, title: 'Go for lunch at cafe javas', completed: false },
    { id: 3, title: 'Learn something new part two...', completed: false },
    { id: 4, title: 'Go and pick up my dinner', completed: false },
];

export default function Home() {
    const [todos, setTodos] = useState(TODOS);
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

    return (
        <div className="relative">
            <div
                className="relative h-[340px] bg-light-grayish-blue bg-no-repeat bg-cover"
                style={{
                    backgroundImage:
                        theme === 'dark'
                            ? `url("/images/bg-desktop-dark.jpg")`
                            : `url("/images/bg-desktop-light.jpg")`,
                }}
            ></div>
            <div className="w-full absolute top-24 left-0">
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
                    <TodoList todos={todos} />
                    {todos.length ? <Footer /> : null}
                </div>
            </div>
        </div>
    );
}
