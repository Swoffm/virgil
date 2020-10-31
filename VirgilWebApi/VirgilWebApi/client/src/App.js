import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import UserProfileManager from "./components/apiManager/UserProfileApi";
// import AppView from "./components/AppView";
import AppView from "./components/appView";
import AppNav from "./components/nav/Nav";
import CategoryApi from "./components/apiManager/CategoryApi";
import BookApi from "./components/apiManager/BookApi";

const App = () => {

    return (
        <>

        <Router>
            <BookApi>
            <CategoryApi>
        <UserProfileManager>
          <AppNav />
          <AppView />
          </UserProfileManager>
          </CategoryApi>
          </BookApi>
          </Router>
          </>
    )

}

export default App;