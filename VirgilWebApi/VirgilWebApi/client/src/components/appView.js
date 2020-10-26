import Home from "./home/Home";
import React from "react"
import { Switch, Route, Redirect } from "react-router-dom";
import UserLogIn from "./UserAccount/UserLogIn";


export default function AppView() {
    
    
    return (
        <>
       <main>
           <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/login">
                <UserLogIn />
            </Route>

            
           </Switch>
       </main> 
       </>
    );
}



