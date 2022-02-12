export default function InternalLink({ title, onClearCompletedTodos }) {
    return (
        <a
            className="text-dark-grayish-blue cursor-pointer hover:text-very-dark-grayish-blue"
            onClick={onClearCompletedTodos}
        >
            {title}
        </a>
    );
}
