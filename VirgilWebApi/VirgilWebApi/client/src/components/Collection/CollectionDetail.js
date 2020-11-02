import React, {useContext, useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router";
import { CollectionContext } from "../apiManager/CollectionApi";
import {Link} from "react-router-dom";
import { Button } from "reactstrap";
import BookCard from "../Collection/BookCollection";


const CollectionDetail = () => {

    const [books, setBooks] = useState([]);
    const {getBooksInCollection, deleteBook} = useContext(CollectionContext);
    const { id } = useParams();


    useEffect(() => {
        getBooksInCollection(id).then(setBooks)
    }, [])

    const deleteBookFromCol = (colId) => {

        if(window.confirm("Are you sure?"))
        {
            deleteBook(colId).then(() => {
                getBooksInCollection(id).then(setBooks)

          });
        }
    
      }



 
    return (
        <>
<div className="container">
    <h1>Add a book to your collection</h1>
    <p>
      <Link to={`/collection/${id}/addBook`}>
      <Button color="primary">Add</Button>
      </Link>
    </p>
   <table className="table table-striped">
      <thead>
        <tr>
          <th>Book Name</th>
        </tr>
      </thead>
      <tbody>
        {books && books.map((element) => (
          <BookCard key={element.id} delete={deleteBookFromCol} book={element} />
        ))}
      </tbody>
    </table>
  </div>

        </>
    )
}

export default CollectionDetail;