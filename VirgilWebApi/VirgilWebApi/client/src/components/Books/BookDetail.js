import React, {useContext, useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router";
import { BookContext } from "../apiManager/BookApi";
import {Table} from "reactstrap";



const BookDetail = props => {

    const [book, setBook] = useState();
    const { getBookById } = useContext(BookContext);
    const { id } = useParams();
    const history = useHistory();
    const userId = sessionStorage.getItem("id");


    useEffect(()=> {
        getBookById(parseInt(id), userId).then(setBook);
    }, [])



if (!book) {
    return null;
}
    //Book details needs a return, and possibliy a check for data
    //book details also needs the ability to delete or edit from the view

    return (
     <div className="container">
<h1>Book Details</h1>
<table className="table">
    <thead>
        <tr>
<th>Name</th>
<th>Category</th>
<th>Link</th>
</tr>
    </thead>
    <tbody>
        <tr>
    <td>{(book.bookName)}</td>
    <td>{(book.category)}</td>
    <td><a href={(book.bookLink)} target="_blank">Book</a></td>
   </tr>
   <tr>
       <th>Details: </th>
    <td colSpan="3">{book.details}</td>
    </tr>
    </tbody>
</table>
</div>
    )
}


export default BookDetail;