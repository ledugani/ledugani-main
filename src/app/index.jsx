import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.css';

import Layout from './layout';
import Graphics from './pages/graphics';

export default function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Homepage />
                    </Route>
                    <Route path='/graphics'>
                        <Graphics />
                    </Route>
                    <Route path='/illustrations'>
                        <Illustrations />
                    </Route>
                    <Route path='/shop'>
                        <Shop />
                    </Route>
                    <Route path='/info'>
                        <Info />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Layout>
    );
}