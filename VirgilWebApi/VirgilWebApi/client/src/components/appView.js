import Home from "./home/Home";
import React from "react"
import { Switch, Route, Redirect } from "react-router-dom";
import UserLogIn from "./UserAccount/UserLogIn";
import Category from "./Category/Category";
import CategoryForm from "./Category/CategoryFrom";
import CategoryEdit from "./Category/CategoryEditForm";



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


            <Route path="/category" exact>
              <Category />
            </Route>

            <Route path="/category/add" exact>
             <CategoryForm />
            </Route>

            <Route path="/category/:id/edit" exact>
             <CategoryEdit />
            </Route>

            
           </Switch>
       </main> 
       </>
    );
}



