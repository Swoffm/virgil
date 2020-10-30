import React, {useContext, useState, useEffect} from 'react';
// import {UserProfileContext} from "../apiManager/UserProfileApi";
import {CategoryContext} from "../apiManager/CategoryApi";

import { Button } from "reactstrap";
import {Link} from "react-router-dom";
import CategoryCard from "./CategoryCard"


const Category = () => {
    // const {isLoggedIn} = useContext(UserProfileContext);
    const {getAllCategories, deleteCategories, category} = useContext(CategoryContext);
    const userId = sessionStorage.getItem("id");
    

useEffect(()=> {
    getAllCategories(userId);
}, []);

const deleteCategoryFromList = (id) => {

    if(window.confirm("Are you sure?"))
    {
        deleteCategories(id).then(() => {
        getAllCategories(userId);
      });
    }

  }


//add a conditonal to check for a null return
    return (
        <>
        <div className="container">
        <h1>Categories</h1>
        <p>
          <Link to="/category/add">
          <Button color="primary">Create</Button>
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
            {category && category.map((element) => (
              <CategoryCard key={element.id} delete={deleteCategoryFromList} category={element}/>
            ))}
          </tbody>
        </table>
      </div>
        </>
    )
}


export default Category;