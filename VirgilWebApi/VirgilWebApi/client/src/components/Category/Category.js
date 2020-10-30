import React, {useContext, useState, useEffect} from 'react';
// import {UserProfileContext} from "../apiManager/UserProfileApi";
import {CategoryContext} from "../apiManager/CategoryApi";

import { Button } from "reactstrap";
import {Link} from "react-router-dom";
import CategoryList from "./CategoryList"


const Category = () => {
    // const {isLoggedIn} = useContext(UserProfileContext);
    const {getAllCategories, category} = useContext(CategoryContext);
    const userId = sessionStorage.getItem("userName").slice(-2).split("}")[0]
    

useEffect(()=> {
    getAllCategories(userId);
}, []);


console.log(userId);
//add a conditonal to check for a null return
    return (
        <>
        <div className="container">
        <h1>Categories</h1>
        <p>
          <Link to="/category/add">
          <Button color="primary">Create</Button>{" "}
          </Link>
        </p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {category.map((element) => (
              <CategoryList key={element.id} category={element}/>
            ))}
          </tbody>
        </table>
      </div>
        </>
    )
}


export default Category;