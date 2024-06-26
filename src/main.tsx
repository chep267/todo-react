/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import ReactDOM from 'react-dom/client';

/** App */
import App from '@root/components';
import Test from '@src/todo/components/Test.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <Test />
    // </React.StrictMode>
);
