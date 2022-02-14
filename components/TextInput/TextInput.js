export default function TextInput({ name, error, ...props }) {
    return (
        <div>
            <div className="input-container">
                <div className="input-icon-container">
                    <div className="input-icon" />
                </div>
                <input
                    name={name}
                    id={name}
                    className="input-field"
                    {...props}
                />
            </div>
            <p className="input-error">{error}</p>
        </div>
    );
}
