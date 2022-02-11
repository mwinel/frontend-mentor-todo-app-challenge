import { useTheme } from 'next-themes';

export default function Home() {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                TODO
            </h1>
            <button
                className="border-2 border-gray-800 p-2 m-2 rounded-lg"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                toggle
            </button>
        </div>
    );
}
