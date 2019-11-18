import React from "react";
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
            <Button onClick={props.showModal}
                style={{
                    position: "absolute",
                    top:"5px",
                    left: "10px"
                }}
                variant="info">
                 Contact Us 
            </Button>
            <br/>
         Footer
        </footer>
    );
};

export default Footer;