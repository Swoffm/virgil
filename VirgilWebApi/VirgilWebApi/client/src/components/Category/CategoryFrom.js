import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../apiManager/CategoryApi";

const CategoryForm = (props) => {
    let user = sessionStorage.getItem("id");
    const [category, setCategory] = useState({id: 1, Name: ""});
    const [isLoading, setIsLoading] = useState(false);
    const {addCategory} = useContext(CategoryContext);

    
    const handleFieldChange = evt => {
        const stateToChange = { ...category};
        stateToChange[evt.target.id] = evt.target.value;
        setCategory(stateToChange);
    }
    
    const newCategory = evt => {
        evt.preventDefault();
        console.log(category);
        if(category.Name == ""){
            window.alert("Must input a name");
        }
        else if (category.Name.toUpperCase() == "OTHER")
        {
            window.alert("Other can not be a category")
        }
        else {
        setIsLoading(true);
        let newCategory = {
            id: category.id,
            userId: parseInt(user),
            name: category.Name.toLowerCase()

        }
        console.log(newCategory.name)
            addCategory(newCategory).then(() => {
                window.location.href = "/category"
            });
        }
    }
    
    
    
    
        return (
            <>
            <div className="container pt-5">
                <div className="card col-md12">
                    <h3 className="mt-3 text-primary text-center card-title">Add a Category</h3>
                    <form className="mt-5 card-body">
                        <div className="form-group">
                            <input className="form-control" id="Name" onChange={handleFieldChange}/>
                        </div>
                        <div className="form-group">
                            <input type="button" value="Add" className="btn btn-primary btn-block" onClick={newCategory}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
        )
    }
    
    export default CategoryForm;