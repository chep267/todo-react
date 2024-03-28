import * as React from 'react';

/** components */
import MainContent from './MainContent.jsx';

/** styles */
import '../css/main.css';

export default function Main() {
    const num = 21;
    const isSoChan = num % 2 === 0;

    return (
        <main className="main">
            {isSoChan ? (
                <span>Xin chao, day la so chan</span>
            ) : (
                <span>So le, ket thuc</span>
            )}
        </main>
    );
}
