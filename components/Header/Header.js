export default function Header({ theme, setTheme }) {
    return (
        <div className="flex items-center justify-between">
            <div className="text-xl font-bold tracking-widest text-neutral">
                TODO
            </div>
            <div
                className="-mt-2 cursor-pointer"
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
