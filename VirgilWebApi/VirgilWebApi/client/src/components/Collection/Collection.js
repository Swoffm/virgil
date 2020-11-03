import React, {useContext, useState, useEffect} from 'react';
import {CollectionContext} from "../apiManager/CollectionApi";
import CollectionCard from "./CollectionCard";
import {Link} from "react-router-dom";
import { Button } from "reactstrap";



const Collection = () => {

    const {getCollection, collection, deleteCollection} = useContext(CollectionContext);
    const userId = sessionStorage.getItem("id");
    const [userSelect, setUserSelect] = useState();

    const handleFieldChange = evt => {
      const stateToChange = { ...userSelect };
      stateToChange[evt.target.id] = evt.target.value;
      setUserSelect(stateToChange);
      console.log(userSelect)
  };




    const deleteColFromList = (id) => {

        if(window.confirm("Are you sure?"))
        {
            deleteCollection(parseInt(id)).then(() => {
            getCollection(parseInt(userId));
          });
        }
    
      }


    useEffect(() => {
getCollection(parseInt(userId));
    }, [])

    return (
        <>

        <div className="container">
    <h1>Collection</h1>
    <p>
      <Link to="/collection/add">
      <Button color="primary">Create</Button>
      </Link>
    </p>
    <select name="name" onClick={handleFieldChange} id="name">
                                <option value="NA">Select a value</option>
    {collection.map(element => <option key={element.id} value={element.id}>{element.name}</option>)}
                            </select>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Collection Name</th>
        </tr>
      </thead>
      <tbody>
        { userSelect !== undefined ? collection.map((element) => ( element.id == userSelect.name || userSelect.name == "NA" ? 
           <CollectionCard key={element.id} delete={deleteColFromList} collection={element} /> 
        
            : null ) ) : collection.map((element) => ( <CollectionCard key={element.id} delete={deleteColFromList} collection={element} /> ))  }  

           


      </tbody>
    </table>
  </div>
        </>
    )
}

export default Collection;