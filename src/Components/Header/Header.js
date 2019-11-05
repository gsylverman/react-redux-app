import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import classes from "./Header.module.css";
import Button from 'react-bootstrap/Button';
import Modal from "../Modal/Modal";


class Header extends Component {

  state = {
    show: false
  }


  show = () => {
    this.setState({ show: true });
  }


  closeModal = () => {
    this.setState({ show: false });

  }
  render() {
    return (

      <header className={classes.Header}>
        <NavLink className={classes.link} to="/">Home</NavLink><br />
        <NavLink className={classes.link}
          to="/form"
          activeStyle={{ color: 'white' }}

        >Contact</NavLink><br />
        <Button onClick={this.show} variant="light">Contact Us </Button>
        <Modal show={this.state.show} modalClosed={this.closeModal} >
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
  </Modal>

      </header>
    );
  }

};


export default Header;