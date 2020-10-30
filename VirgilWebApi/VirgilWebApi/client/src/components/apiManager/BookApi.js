import React, { useState, createContext } from "react";


export const BookContext = createContext();

const BookApi = props => {

    const [book, setBook] = useState([]);

    const apiUrl = "/api/book";

    const getAllBooks = (userId) => {
        return fetch(`${apiUrl}/${userId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        .then(setCategory);
    }

    <BookContext.Provider value={{ getAllBooks }}>
    {props.children}
</BookContext.Provider>



}

export default BookApi;
