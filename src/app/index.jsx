import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

import Layout from './layout';
import Graphics from './pages/graphics';
import Home from './pages/home';
import Illustrations from './pages/illustrations';
import Shop from './pages/shop';
import Info from './pages/info';

export default function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/graphics' element={<Graphics />} />
                    <Route path='/illustrations' element={<Illustrations />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/info' element={<Info />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    );
}