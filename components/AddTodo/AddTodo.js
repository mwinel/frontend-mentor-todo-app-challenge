import { useState } from 'react';
import { TextInput } from '..';

export default function AddTodo({ lastID, onSendTodo }) {
    let [title, setTitle] = useState('');
    let [errors, setErrors] = useState({});

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (title.length <= 0) {
            tempErrors['title'] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        return isValid;
    };

    const handleAddTodo = async (e) => {
        e.preventDefault();
        let isFormValid = handleValidation();

        if (isFormValid) {
            const newTodo = {
                id: lastID + 1,
                title: title,
                completed: false,
            };

            onSendTodo(newTodo);
            setTitle('');
        }
        return;
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
                error={errors.title && 'Todo title is required.'}
            />
        </form>
    );
}
