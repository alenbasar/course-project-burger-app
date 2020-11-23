import React from "react";
import CopyrightNotice from "react-copyright-notice-component";
import classes from "./Copyright.module.css";
const Copyright = () => (
  <div className={classes.Copyright}>
    <CopyrightNotice
      copyrightHolder="Alen Basar"
      year={new Date().getFullYear()}
    ></CopyrightNotice>
  </div>
);
export default Copyright;
