import React from "react";
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Footer = (props) => {
    return (
        <footer>
            <Button style={{ position: "absolute", left: "10px" }} variant="info">

                <NavLink style={{ textDecoration: "none" }}
                    to="/form"
                    activeStyle={{ color: 'white' }}

                >Contact</NavLink>
            </Button>

            <br />

            Footer</footer>
    );
};


export default Footer;