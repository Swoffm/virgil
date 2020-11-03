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
        .then(setBook);
    }

    const deleteBook = (bookId) => {
        return fetch (`${apiUrl}/b=${bookId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const getBookById = (bookId, userId) => {
        return fetch(`${apiUrl}/q=${userId}/b=${bookId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
    }

    const addBook = (book) => {
        console.log(book)
        return fetch(`${apiUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(book)
        })
    }

    const updateBook = (book) => {
        console.log(book)
        return fetch(`${apiUrl}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
        }
        )
    }

  

   return ( 
   <BookContext.Provider value={{ book, addBook, updateBook, getBookById, deleteBook, getAllBooks }}>
    {props.children}
</BookContext.Provider>
 )
}

export default BookApi;
