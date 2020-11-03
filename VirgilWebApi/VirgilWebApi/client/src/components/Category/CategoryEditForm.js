import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { CategoryContext } from "../apiManager/CategoryApi";



const CategoryEdit = props => {
    const [category, setCategory] = useState();
    const { updateCategory, getCategoryById } = useContext(CategoryContext);
    const { id } = useParams();
    const history = useHistory();
    
    const user = sessionStorage.getItem("id");


    useEffect(() => {
        
        getCategoryById(parseInt(id)).then(setCategory)
    }, [])


    const handleFieldChange = evt => {
        const stateToChange = { ...category };
        stateToChange[evt.target.id] = evt.target.value;
        setCategory(stateToChange);
    };


    const SaveCategory = () => {
        const newCategory = {
            id: category.id,
            userId: parseInt(user),
            Name: category.name.toLowerCase()

        }
        updateCategory(newCategory)
            .then(() => history.push("/category"));
    };

const Cancel = () => {
        history.push("/category")
    };


   if (!category) {
    return null;
       
    }

    return (
        <>
            <div className="container pt-5">
                <div className="card col-md12">
                    <h3 className="mt-3 text-primary text-center card-title">Edit a Category</h3>
                    <form className="mt-5 card-body">
                        <div className="form-group">
                            <input className="form-control" id="name" value={category.name} onChange={handleFieldChange} />
                        </div>
                        <div className="form-group">
                            <input type="button" value="Save" className="btn btn-primary btn-block" onClick={SaveCategory} />
                            <input type="button" value="Cancel" className="btn btn-primary btn-block" onClick={Cancel} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default CategoryEdit;

