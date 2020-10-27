import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import UserProfileManager from "./components/apiManager/UserProfileApi";
// import AppView from "./components/AppView";
import AppView from "./components/appView";
import AppNav from "./components/nav/Nav";


const App = () => {

    return (
        <>

        <Router>
        <UserProfileManager>
          <AppNav />
          <AppView />
          </UserProfileManager>
          </Router>
          </>
    )

}

export default App;