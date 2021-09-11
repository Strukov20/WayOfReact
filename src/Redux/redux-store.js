import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/profile-reducer";
import dialogReducer from "./Reducers/dialogs-reducer";
import sidebarReducer from "./Reducers/sidebar-reducer";
import usersReducer from "./Reducers/users-reducer";
import authReducer from "./Reducers/auth-reducer";
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export function randomValue(max) {
    return Math.floor(Math.random() * max);
} // random value

export default store;