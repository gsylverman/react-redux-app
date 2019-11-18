import React from "react";
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Footer = (props) => {
    return (
        <footer
            style={{
                position:"absolute",
                width:"100%",
                background:"lightblue",
                right:"0",
                bottom: "0",
                textAlign: "center"
            }}>
            <Button
                style={{
                    position: "absolute",
                    left: "10px",
                    bottom: "10px"
                }}
                variant="info">

                <NavLink style={{textDecoration: "none"}}
                    to="/form"
                    activeStyle={{ color: 'white'}}>
                 Contact
                </NavLink>
            </Button>
            <br/>
         Footer
        </footer>
    );
};

export default Footer;