import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Search from './Search.jsx';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>                
                <Route exact path='/' component={Search} />                               
            </Switch>
        </>
    );
}

export default App;