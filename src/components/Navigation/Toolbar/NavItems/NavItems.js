import React from "react";
import classes from "./NavItems.module.css";
import NavItem from "../NavItems/NavItem/NavItem";

const NavItems = () => (
  <ul className={classes.NavItems}>
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default NavItems;
