import { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import axios from 'axios';
import { DragDropContext } from 'react-beautiful-dnd';

import { Header, AddTodo, TodosList, FilterLinks, Footer } from '../components';
import { reorder } from '../utils/reorder';

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('All');
    const { theme, setTheme } = useTheme();

    const fetchData = useCallback(async () => {
        try {
            const { data } = await axios.get('./data.json');
            setTodos(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

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

    const onDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const newItems = reorder(
            filteredTodos,
            source.index,
            destination.index
        );
        setTodos(newItems);
    };

    return (
        <main>
            <div
                className="bg-desktop-img"
                style={{
                    backgroundImage:
                        theme === 'dark'
                            ? `url("/images/bg-desktop-dark.jpg")`
                            : `url("/images/bg-desktop-light.jpg")`,
                }}
            ></div>
            <div className="main-inner-one">
                <div className="main-inner-two">
                    <Header theme={theme} setTheme={setTheme} />
                    <AddTodo
                        onSendTodo={(todo) => setTodos([...todos, todo])}
                        lastID={`todo-${todos.length}`}
                    />
                    <div className="form-container">
                        {filteredTodos.length ? (
                            <DragDropContext onDragEnd={onDragEnd}>
                                <TodosList
                                    todos={filteredTodos}
                                    onDeleteTodo={handleDeleteTodo}
                                    onCompleteTodo={handleCompleteTodo}
                                />
                            </DragDropContext>
                        ) : (
                            <div className="no-todos">
                                <p>
                                    {filter === 'All'
                                        ? `You do not have any todos at the moment`
                                        : `You do not have any ${filter.toLowerCase()} todos at the moment`}
                                </p>
                            </div>
                        )}

                        {/* todo list footer */}
                        <div className="todo-list-footer">
                            <div className="todo-list-footer-left">
                                <p>
                                    {
                                        todos.filter((todo) => !todo.completed)
                                            .length
                                    }{' '}
                                    items left
                                </p>
                            </div>
                            <div className="todo-list-footer-center">
                                <FilterLinks
                                    filterNames={FILTER_NAMES}
                                    filter={filter}
                                    setFilter={setFilter}
                                />
                            </div>
                            <div className="todo-list-footer-right">
                                <a onClick={handleClearCompletedTodos}>
                                    Clear completed
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* filter links mobile */}
                    <div className="filter-links">
                        <FilterLinks
                            filterNames={FILTER_NAMES}
                            filter={filter}
                            setFilter={setFilter}
                        />
                    </div>
                    {todos.length ? <Footer /> : null}
                </div>
            </div>
        </main>
    );
}
