import React, {useContext, useState, useEffect} from 'react';
import {CollectionContext} from "../apiManager/CollectionApi";
import CollectionCard from "./CollectionCard";
import {Link} from "react-router-dom";
import { Button } from "reactstrap";



const Collection = () => {

    const {getCollection, collection} = useContext(CollectionContext);
    const userId = sessionStorage.getItem("id");

    useEffect(() => {
getCollection(parseInt(userId));
    }, [])

    return (
        <>

        <div className="container">
    <h1>Collection</h1>
    <p>
      <Link to="/book/add">
      <Button color="primary">Create</Button>
      </Link>
    </p>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Collection Name</th>
          <th># of Books</th>
        </tr>
      </thead>
      <tbody>
        {collection && collection.map((element) => (
          <CollectionCard key={element.id} collection={element} />
        ))}
      </tbody>
    </table>
  </div>
        </>
    )
}

export default Collection;