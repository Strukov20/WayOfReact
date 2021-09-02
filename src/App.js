import React from 'react'
import './App.css';
import {Route} from "react-router-dom";
import News from "./components/Pages/News/News";
import Music from "./components/Pages/Music/Music";
import Settings from "./components/Pages/Settings/Settings";
import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navigation/NavbarContainer";
import UsersContainer from "./components/Pages/FindUsers/UsersContainer";
import ProfileContainer from "./components/Pages/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App () {
  return (
    <div className="main-app">
        <HeaderContainer />
        <div className='down-block'>
            <NavbarContainer  />
            <div className='pages'>
                <Route path='/profile/:userId?' render={ () => <ProfileContainer/> } />
                <Route path='/dialogs' render={ () => <DialogsContainer/> } />
                <Route path='/news' render={ () => <News/> } />
                <Route path='/music' render={ () => <Music/> } />
                <Route path='/friends' render={ () => <UsersContainer/> } />
                <Route path='/settings' render={ () => <Settings/> } />
            </div>
        </div>
    </div>
  );
}

export default App;
