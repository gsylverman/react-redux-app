import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends Component {

    showModal = () => {
        this.props.modalShow();
    }

    closeModal = () => {
        this.props.modalHide();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header
                        show={this.props.show}
                        showModal={this.showModal}
                        modalClosed={this.closeModal}
                    />
                    <Switch>
                        <Route path="/form" component={Form} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                    <Footer
                        show={this.props.show}
                        showModal={this.showModal}
                        modalClosed={this.closeModal}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return state.modal;
};

const mapDispatchToProps = (disapatch) => {
    return {
        modalShow: () => disapatch({ type: "SHOW", payload: true }),
        modalHide: () => disapatch({ type: "HIDE", payload: false })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
