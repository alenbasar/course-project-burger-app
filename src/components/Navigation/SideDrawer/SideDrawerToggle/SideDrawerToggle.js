import React from "react";
/* import Logo from "../../../Logo/Logo";*/
import classes from "./SideDrawerToggle.module.css";

const SideDrawerToggle = (props) => (
  <div className={classes.SideDrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default SideDrawerToggle;
