import React from "react";
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

function NavbarContainer(props) {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    return (
                        <Navbar sideBar={state.sideBar} />
                    )
                }
            }
        </StoreContext.Consumer>
    ) ;
}

export default NavbarContainer;