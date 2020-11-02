import React, {useContext, useState, useEffect} from 'react';
import { BookContext } from "../apiManager/BookApi";
import { Button } from "reactstrap";
import {Link} from "react-router-dom";
import BookCard from "./BookCard";


const Book = () => {

const {getAllBooks, deleteBook, book} = useContext(BookContext);

const userId = sessionStorage.getItem("id");

const deleteBookFromList = (id) => {

    if(window.confirm("Are you sure?"))
    {
        deleteBook(id).then(() => {
        getAllBooks(parseInt(userId));
      });
    }

  }

useEffect(()=> {

getAllBooks(parseInt(userId));

}, [])
return (
    <>
    <div className="container">
    <h1>Books</h1>
    <p>
      <Link to="/book/add">
      <Button color="primary">Create</Button>
      </Link>
    </p>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {book && book.map((element) => (
          <BookCard key={element.id} col={false} book={element} delete={deleteBookFromList}/>
        ))}
      </tbody>
    </table>
  </div>
    </>
)

}

export default Book;