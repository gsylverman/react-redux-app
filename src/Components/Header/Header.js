import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import classes from "./Header.module.css";
import Button from 'react-bootstrap/Button';
import Modal from "../Modal/Modal";

class Header extends Component {

    state = {
        show: false
    }

    show = () => {
        this.setState({show: true});
    }

    closeModal = () => {
        this.setState({show: false});
    }
    render() {
        return (

            <header className={classes.Header}>
                <NavLink
                    activeStyle={{
                        color: 'white'
                    }}
                    className={classes.link}
                    to="/">Home</NavLink><br/>
                <NavLink
                    className={classes.link}
                    to="/form"
                    activeStyle={{
                        color: 'white'
                    }}>Contact</NavLink><br/>
                <Button onClick={this.show} variant="light">Contact Us
                </Button>
                <Modal show={this.state.show} modalClosed={this.closeModal}>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. It is a long established fact that
                    a reader will be distracted by the readable content of a page when looking at
                    its layout.
                </Modal>

            </header>
        );
    }

};

export default Header;