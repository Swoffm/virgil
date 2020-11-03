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

    const deleteBook = id => {
        return fetch (`${apiUrl}/c=${id}`, {
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

    const getCollectionById = id => {
        return fetch(`${apiUrl}/c=${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
    }

    const getBooksInCollection = id => {
        return fetch(`${apiUrl}/cb=${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
    }

    const addBookToCollection = (bookId, colId) => {
        return fetch(`${apiUrl}/b=${bookId}/c=${colId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  
            },
            body: JSON.stringify(bookId)

            
        })
    }


    const updateCollection = (collection) => {
        return fetch(`${apiUrl}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"  
            },
            body: JSON.stringify(collection)
        })
    }

return (
    <CollectionContext.Provider value={{getCollection, deleteBook, addBookToCollection, updateCollection, getBooksInCollection, getCollectionById, newCollection, deleteCollection, collection }}>
    {props.children}
</CollectionContext.Provider>
)

}


export default CollectionApi;