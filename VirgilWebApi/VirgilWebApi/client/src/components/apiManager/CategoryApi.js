import React, { useState, createContext } from "react";
import {useHistory} from "react-router-dom";

export const CategoryContext = createContext();

const CategoryApi = props => {

    const [category, setCategory] = useState([]);

const apiUrl = "/api/Category";

    const getAllCategories = (userId) => {
        return fetch(`${apiUrl}/${userId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        .then(setCategory);
    }


    return (
        <CategoryContext.Provider value={{ category, getAllCategories}}>
        {props.children}
    </CategoryContext.Provider>
    )
}


export default CategoryApi;