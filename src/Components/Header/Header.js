import React from "react";
import {  NavLink} from 'react-router-dom';
import classes from "./Header.module.css";

const Header=(props)=>{
    return(
        
        <header className={classes.Header}>
        <NavLink className={classes.link} to="/">Home</NavLink><br />
        <NavLink className={classes.link}
          to="/form"
          activeStyle={{ color: 'white' }}
       
        >contact</NavLink><br />

     
      </header>
    );
};


export default Header;