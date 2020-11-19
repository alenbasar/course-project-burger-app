import React from "react";
import classes from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

const NavItems = () => (
  <ul className={classes.NavItems}>
    <NavItem link="/">Burger Builder</NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default NavItems;
