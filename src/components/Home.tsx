import * as React from 'react';
import { useNavigate } from 'react-router-dom';

/** styles */
import '../css/header.css';

export default function Home() {
    const navigate = useNavigate();

    // do something

    const onLogout = () => {
        navigate('/login');
    };

    return (
        <div className="w-full h-full">
            <h2>Day la trang chu</h2>
            <button onClick={onLogout}>log out</button>
        </div>
    );
}
