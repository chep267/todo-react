import * as React from 'react';

/** lib components */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

/** components */
import StartLoading from '@module-base/components/StartLoading';
import AppHeader from '@module-global/components/AppHeader';

import Login from './Login';
import Home from './Home';

export default function Main() {
    return (
        <BrowserRouter>
            <Box className="flex w-screen h-screen">
                <Box className="flex flex-col grow shrink w-auto max-w-full min-h-dvh relative backface-hidden direction-lrt">
                    <AppHeader />
                    <Box
                        className="grow shrink-0 w-auto max-w-full pt-16 direction-lrt"
                        component="main">
                        <Container
                            id="container"
                            className="flex w-full h-full max-w-full mx-auto p-0 direction-lrt">
                            <React.Suspense fallback={<StartLoading />}>
                                <Routes>
                                    <Route path="/" element={<Login />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/home" element={<Home />} />
                                </Routes>
                            </React.Suspense>
                        </Container>
                    </Box>
                </Box>
            </Box>
        </BrowserRouter>
    );
}
