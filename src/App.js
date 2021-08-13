import React from 'react'
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Pages/Profile/Profile";
import News from "./components/Pages/News/News";
import Music from "./components/Pages/Music/Music";
import Settings from "./components/Pages/Settings/Settings";
import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navigation/NavbarContainer";

function App (props) {
  return (
    <div className="main-app">
        <Header />
        <div className='down-block'>
            <NavbarContainer store={props.store.getState()} />
            <div className='pages'>
                <Route path='/profile'
                       render={ () => <Profile store={props.store}/> } />
                <Route path='/dialogs'
                       render={ () => <DialogsContainer store={props.store}/> } />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
        </div>
    </div>
  );
}

export default App;
