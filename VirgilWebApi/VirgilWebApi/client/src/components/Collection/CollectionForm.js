import React, {useContext, useState, useEffect} from 'react';
import {CollectionContext} from "../apiManager/CollectionApi";



const CollectionForm = () => {

    const {newCollection} = useContext(CollectionContext);
    const userId = sessionStorage.getItem("id");
    const [isLoading, setIsLoading] = useState(false);
    const [collection, setCollection] =useState([]);


    const handleFieldChange = evt => {
        const stateToChange = { ...collection};
        stateToChange[evt.target.id] = evt.target.value;
        setCollection(stateToChange);
        
    }


    const newCollections = evt => {
        evt.preventDefault();
        if(collection.name = ""){
            window.alert("Must input a name");
        }
        
        else {
        setIsLoading(true);
        //===============MAKE SURE TO ADD USERID TO THE OBJECT
        const newCol = {
            UserId: parseInt(userId),
            Name: collection.Name
        }
            newCollection(newCol).then(() => {
                window.location.href = "/collection"
            });
        }
    }



    return (
        <div className="container pt-5">
        <div className="card col-md12">
            <h3 className="mt-3 text-primary text-center card-title">Add a Book</h3>
            <form className="mt-5 card-body">
                <div className="form-group">
                    <label htmlFor="Name">Collection Name</label>
                    <input className="form-control" id="Name" onChange={handleFieldChange}/>
                </div>
                


                <div className="form-group">
                    <input type="button" value="Add" className="btn btn-primary btn-block" onClick={newCollections} />
                </div>
            </form>
        </div>
    </div>
    )
}


export default CollectionForm;