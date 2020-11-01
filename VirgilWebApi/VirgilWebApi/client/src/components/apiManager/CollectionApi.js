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


return (
    <CollectionContext.Provider value={{getCollection, collection }}>
    {props.children}
</CollectionContext.Provider>
)

}


export default CollectionApi;