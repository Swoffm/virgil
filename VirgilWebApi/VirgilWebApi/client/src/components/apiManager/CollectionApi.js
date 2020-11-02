import React, { useState, createContext } from "react";


export const CollectionContext = createContext();



const CollectionApi = props => {

    const apiUrl = "/api/collection";
    const [collection, setCollection] = useState([]);


    const getCollection = userId => {
        return fetch(`${apiUrl}/${userId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        .then(setCollection);

    }

    const deleteCollection = colId => {
        return fetch (`${apiUrl}/${colId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const newCollection = collection => {
        return fetch(`${apiUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  
            },
            body: JSON.stringify(collection)
        })
    }


return (
    <CollectionContext.Provider value={{getCollection, newCollection, deleteCollection, collection }}>
    {props.children}
</CollectionContext.Provider>
)

}


export default CollectionApi;