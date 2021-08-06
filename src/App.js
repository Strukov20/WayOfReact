import React from 'react'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navigation/Navbar";
import Profile from "./components/Pages/Profile/Profile";
import Dialogs from "./components/Pages/Dialogs/Dialogs";
import News from "./components/Pages/News/News";
import Music from "./components/Pages/Music/Music";
import Settings from "./components/Pages/Settings/Settings";

function App (props) {

  return (
      <BrowserRouter>
          <div className="main-app">
              <Header />
              <div className='down-block'>
                  <Navbar sidebarData={props.appState.sideBar} />
                  <div className='pages'>
                      <Route path='/profile'
                             render={ () => <Profile profilePage={props.appState.profilePage}
                                                     addPost={props.addPost}
                                                     updateNewPostText={props.updateNewPostText}/> } />
                      <Route path='/dialogs'
                             render={ () => <Dialogs dialogsData={props.appState.dialogsPage.dialogsData}
                                                     messageData={props.appState.dialogsPage.messageData} /> } />
                      <Route path='/news' component={News} />
                      <Route path='/music' component={Music} />
                      <Route path='/settings' component={Settings} />
                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
