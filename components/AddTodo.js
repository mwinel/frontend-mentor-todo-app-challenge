import { useState } from 'react';
import { TextInput } from '.';

export default function AddTodo({ lastID, onSendTodo }) {
    let [title, setTitle] = useState('');

    const handleAddTodo = async (e) => {
        e.preventDefault();
        const newTodo = {
            id: lastID + 1,
            title: title,
            completed: false,
        };

        onSendTodo(newTodo);
        setTitle('');
    };

    return (
        <form onSubmit={handleAddTodo}>
            <TextInput
                name="todo"
                type="text"
                placeholder="Add your todo..."
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
        </form>
    );
}
