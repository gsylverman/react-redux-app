import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = (props) => {
  return (
    <div className="App">

      <BrowserRouter>
        <>
          <Header />

          <div style={{ background: "silver",height:"600px" }}>
            <Switch>
              <Route path="/form" component={Form} />
              <Route path="/" exact component={Home} />
            </Switch>


          </ div>
          <Footer />
        </>
      </BrowserRouter>


    </div>
  );
}

export default App;
