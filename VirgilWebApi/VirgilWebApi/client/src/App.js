import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import UserProfileManager from "./components/apiManager/UserProfileApi";
// import AppView from "./components/AppView";
import AppView from "./components/appView";
import AppNav from "./components/nav/Nav";
import CategoryApi from "./components/apiManager/CategoryApi";


const App = () => {

    return (
        <>

        <Router>
            <CategoryApi>
        <UserProfileManager>
          <AppNav />
          <AppView />
          </UserProfileManager>
          </CategoryApi>
          </Router>
          </>
    )

}

export default App;