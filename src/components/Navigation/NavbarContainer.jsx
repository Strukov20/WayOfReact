import React from "react";
import Navbar from "./Navbar";

function NavbarContainer(props) {

    return  <Navbar sideBar={props.store.sideBar} /> ;
}

export default NavbarContainer;