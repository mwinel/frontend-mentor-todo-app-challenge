export default function Header({ theme, setTheme }) {
    return (
        <div className="header">
            <div className="header-title">TODO</div>
            <div
                className="header-icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? (
                    <img
                        src="/images/icon-sun.svg"
                        alt="icon sun"
                        className="h-7 w-7"
                    />
                ) : (
                    <img
                        src="/images/icon-moon.svg"
                        alt="icon moon"
                        className="h-7 w-7"
                    />
                )}
            </div>
        </div>
    );
}
