import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/form" component={Form}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
