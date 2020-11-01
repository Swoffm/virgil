import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import UserProfileManager from "./components/apiManager/UserProfileApi";
// import AppView from "./components/AppView";
import AppView from "./components/appView";
import AppNav from "./components/nav/Nav";
import CategoryApi from "./components/apiManager/CategoryApi";
import BookApi from "./components/apiManager/BookApi";
import CollectionApi from "./components/apiManager/CollectionApi";

const App = () => {

    return (
        <>

        <Router>
            <CollectionApi>
            <BookApi>
            <CategoryApi>
        <UserProfileManager>
          <AppNav />
          <AppView />
          </UserProfileManager>
          </CategoryApi>
          </BookApi>
          </CollectionApi>
          </Router>
          </>
    )

}

export default App;