import React, { useContext, useEffect, useState } from "react";
import { CollectionContext } from "../apiManager/CollectionApi";
import { useParams, useHistory } from "react-router";




const CollectionEdit = () => {
    const [collection, setCollection] = useState();
    const { getCollectionById, updateCollection } = useContext(CollectionContext);
    const { id } = useParams();
    const history = useHistory();



    const handleFieldChange = evt => {
        const stateToChange = { ...collection };
        stateToChange[evt.target.id] = evt.target.value;
        setCollection(stateToChange);
    };


    const updateCollections = (evt) => {
        evt.preventDefault();
        if(collection.name == ""){
            window.alert("Must input a name");
        }
        
        updateCollection(collection)
            .then(() => history.push("/collection"));
    };

const Cancel = () => {
        history.push("/collection")
    };


    useEffect(() => {
        
        getCollectionById(parseInt(id)).then(setCollection)
    }, [])

    if (!collection) {
        return null;
           
        }

    return (
        <>
         <div className="container pt-5">
                <div className="card col-md12">
                    <h3 className="mt-3 text-primary text-center card-title">Edit a Category</h3>
                    <form className="mt-5 card-body">
                        <div className="form-group">
                            <input className="form-control" id="name" value={collection.name} onChange={handleFieldChange} />
                        </div>
                        <div className="form-group">
                            <input type="button" value="Save" className="btn btn-primary btn-block" onClick={updateCollections} />
                            <input type="button" value="Cancel" className="btn btn-primary btn-block" onClick={Cancel} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CollectionEdit;