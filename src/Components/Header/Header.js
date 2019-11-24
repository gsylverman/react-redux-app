import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import classes from "./Header.module.css";
import Button from 'react-bootstrap/Button';
import Modal from "../Modal/Modal";

class Header extends Component {
    
    render() {
        return (
            <header className={classes.Header}>
                <NavLink exact
                    activeStyle={{ fontWeight: "bold", color: "white" }}
                    className={classes.link}
                    to="/">Home
                </NavLink>
                <NavLink
                    className={classes.link}
                    to="/form"
                    activeStyle={{ fontWeight: "bold", color: "white" }}>
                    Contact
                </NavLink>
                <Button onClick={this.props.showModal} variant="light">Contact Us
                </Button>
                <Modal show={this.props.show} modalClosed={this.props.modalClosed}>
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