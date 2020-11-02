import Home from "./home/Home";
import React from "react"
import { Switch, Route, Redirect } from "react-router-dom";
import UserLogIn from "./UserAccount/UserLogIn";
import Category from "./Category/Category";
import CategoryForm from "./Category/CategoryFrom";
import CategoryEdit from "./Category/CategoryEditForm";
import Book from "./Books/Book";
import BookDetail from "./Books/BookDetail";
import NewBookForm from "./Books/NewBookForm";
import BookEdit from "./Books/BookEdit";
import Collection from "./Collection/Collection";
import CollectionForm from "./Collection/CollectionForm";
import CollectionEdit from "./Collection/CollectionEdit";
import CollectionDetail from "./Collection/CollectionDetail";
import AddBook from "./Collection/AddBook";




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


                //book components
                <Route path="/book/add" exact>
                        <NewBookForm />
                    </Route>


                    <Route path="/Book" exact>
                        <Book />
                    </Route>

                    <Route path="/book/:id/detail" exact>
                        <BookDetail />
                    </Route>

                    <Route path="/book/:id/edit" exact>
                        <BookEdit />
                    </Route>

                    //collection components

                    <Route path="/collection" exact>
                        <Collection />
                    </Route>

                    <Route path="/collection/add" exact>
                        <CollectionForm />
                    </Route>

                    <Route path="/collection/:id/edit" exact>
                        <CollectionEdit />
                    </Route>

                    <Route path="/collection/:id/detail" exact>
                        <CollectionDetail />
                    </Route>

                    <Route path="/collection/:id/addBook" exact>
                        <AddBook />
                    </Route>

                </Switch>
            </main>
        </>
    );
}



