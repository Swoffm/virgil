import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";


const BookCard = (props) => {


    const history = useHistory();

    const Edit = () => {
        history.push(`category/${props.book.id}/edit`)
    }

    const Details = () => {
        history.push(`category/${props.book.id}/details`)
    }

    return (
        <tr>
            <td>{props.book.bookName}</td>
            <td>{props.book.category}</td>
            <td>{props.book.name}</td>
            <td>{props.book.name}</td>
            <td>
                <Button onClick={() => { props.delete(props.book.id) }} color="danger">Delete</Button>
                <Button color="warning" onClick={Edit}>Edit</Button>
                <Button color="info" onClick={Details}>Details</Button>
            </td>
        </tr>
    )
}


export default BookCard;


