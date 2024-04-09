/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from '@components/Header';
import Login from '@components/Main';
import Home from '@components/Home';

/** global styles */
import './global.css';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/home',
        element: <Home />,
    },
]);

export default function App() {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    );
}
