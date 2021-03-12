import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Error from './Error.jsx';
import Navbar from './Navbar.jsx';
import Search from './Search.jsx';

const App = () => {
    const Name = () => {
        return <h1>hello,Name page.</h1>
    };

    return (
        <>
            <Navbar />
            <Switch>                
                <Route exact path='/search' component={Search} />               
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;