import { Draggable } from 'react-beautiful-dnd';
import classNames from '../../utils/classnames';

export default function Todo({ todo, index, onDeleteTodo, onCompleteTodo }) {
    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        // change background colour if dragging
        background: isDragging ? '#FAFAFA' : '',
        // styles we need to apply on draggables
        ...draggableStyle,
    });

    return (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={classNames('item-container', 'group')}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}
                >
                    <div className="item-left">
                        <div
                            className={classNames(
                                'item-checkbox',
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
                                'item-title',
                                todo.completed ? 'line-through' : 'none'
                            )}
                        >
                            {todo.title}
                        </p>
                    </div>
                    <button
                        className="item-right"
                        onClick={() => onDeleteTodo(todo.id)}
                    >
                        <img
                            src="/images/icon-cross.svg"
                            alt="icon cross"
                            className="h-4 w-4"
                        />
                    </button>
                </div>
            )}
        </Draggable>
    );
}
