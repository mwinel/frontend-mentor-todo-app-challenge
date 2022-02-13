import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="bg-very-light-gray font-josefin dark:bg-very-dark-blue">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
