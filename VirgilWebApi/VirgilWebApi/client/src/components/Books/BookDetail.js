import React, {useContext, useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router";
import { BookContext } from "../apiManager/BookApi";


const BookDetail = props => {

    const [book, setBook] = useState();
    const { getBookById } = useContext(BookContext);
    const { id } = useParams();
    const history = useHistory();
    const userId = sessionStorage.getItem("id");


    useEffect(()=> {
        getBookById(parseInt(id), userId).then(setBook);
    }, [])

    //Book details needs a return, and possibliy a check for data
    //book details also needs the ability to delete or edit from the view
}


export default BookDetail;