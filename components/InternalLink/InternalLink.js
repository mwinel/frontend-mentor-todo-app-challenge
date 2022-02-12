export default function InternalLink({ title, onClick }) {
    return (
        <a
            className="text-dark-grayish-blue cursor-pointer hover:text-very-dark-grayish-blue"
            onClick={onClick}
        >
            {title}
        </a>
    );
}
