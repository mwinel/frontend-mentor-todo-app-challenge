import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '..';

export default function TodosList({ todos, onDeleteTodo, onCompleteTodo }) {
    return (
        <Droppable droppableId="droppable">
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="todo-list"
                >
                    {todos.map((todo, index) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            index={index}
                            onDeleteTodo={onDeleteTodo}
                            onCompleteTodo={onCompleteTodo}
                        />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}
