import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/profile-reducer";
import dialogReducer from "./Reducers/dialogs-reducer";
import sidebarReducer from "./Reducers/sidebar-reducer";
import usersReducer from "./Reducers/users-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer
})

const store = createStore(reducers);

export function randomValue(max) {
    return Math.floor(Math.random() * max);
} // random value

export default store;