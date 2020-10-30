import React, { useState, createContext } from "react";
import {useHistory} from "react-router-dom";

export const CategoryContext = createContext();

const CategoryApi = props => {

    const [category, setCategory] = useState([]);
    

const apiUrl = "/api/category";

    const getAllCategories = (userId) => {
        return fetch(`${apiUrl}/${userId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        .then(setCategory);
    }


    const deleteCategories = (id) => {
        return fetch (`${apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } 

    const getCategoryById = id => {
        return fetch(`${apiUrl}/c=${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        
    }

    const addCategory = (category) => {
        return fetch(`${apiUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  
            },
            body: JSON.stringify(category)
        })
    }

    const updateCategory = (category) => {
        return fetch(`${apiUrl}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
        }
        )
    }


    return (
        <CategoryContext.Provider value={{ getCategoryById, updateCategory, category, addCategory, deleteCategories, getAllCategories}}>
        {props.children}
    </CategoryContext.Provider>
    )
}


export default CategoryApi;